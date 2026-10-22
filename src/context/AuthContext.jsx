"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { getAccessToken, getRefreshToken } from "@/app/(function)/getToken";
import { api, onAuthChange } from "../../data/server";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    if (!getAccessToken() && !getRefreshToken()) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("users/me");
      setUser(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();

    const unsubscribe = onAuthChange(({ loggedIn }) => {
      if (!loggedIn) setUser(null);
    });

    return unsubscribe;
  }, [loadUser]);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        loadUser,
        logout,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}