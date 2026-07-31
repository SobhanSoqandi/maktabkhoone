"use client";

export default function checkUser() {
  if (typeof window === "undefined") return false;

  return !!localStorage.getItem("access_token");
}
