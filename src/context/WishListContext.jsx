"use client";

import { createContext, useContext, useEffect } from "react";
import { loginContext } from "./LoginContext";
import useGet from "@/app/(hooks)/useGet";
import { useQueryClient } from "@tanstack/react-query";

export const WishListContext = createContext(null);

export default function WishListProvider({ children }) {
  const { isLogin } = useContext(loginContext);
  const queryClient = useQueryClient();

  const {
    data: wishlist = [],
    isLoading,
    refetch,
  } = useGet("wishlists/me", "getWishlist", {
    enabled: false,
  });

  useEffect(() => {
    console.log("isLogin:", isLogin);
    if (isLogin) {
      refetch();
    } else {
      queryClient.setQueryData(["getWishlist"], []);
      console.log(wishlist);
    }
  }, [isLogin, refetch, queryClient]);

  return (
    <WishListContext.Provider
      value={{
        wishlist,
        loading: isLoading,
        refetchWishlist: refetch,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
