"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "../(function)/getToken";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      router.replace("/not-found");
    }
  }, []);

  if (!getAccessToken()) {
    return null;
  }

  return children;
}
