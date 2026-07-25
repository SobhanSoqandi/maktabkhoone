"use client";

export default function checkUser() {
  const token = localStorage.getItem("access_token");

  return !!token;
}
