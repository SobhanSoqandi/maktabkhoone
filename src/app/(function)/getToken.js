"use client";

import checkUser from "./checkUser";

export default function getToken() {
  if (!checkUser()) return null;

  const user = JSON.parse(localStorage.getItem("personalInfo"));

  return user?.token ?? null;
}
