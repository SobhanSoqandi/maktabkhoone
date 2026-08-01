"use client";

export const getAccessToken = () => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("access_token");
};

export const getRefreshToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("refresh_token")|| null;
};
