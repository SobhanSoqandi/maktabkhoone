"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AuthProvider } from "@/context/AuthContext";
import GlobalModalProvider from "./(components)/globalmodal/GlobalModalProvider";
import LoginContext from "@/context/LoginContext";
import WishListProvider from "@/context/WishListContext";

export default function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LoginContext>
          <GlobalModalProvider>
            <WishListProvider>{children}</WishListProvider>
          </GlobalModalProvider>
        </LoginContext>
      </AuthProvider>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 20,
          zIndex: 100000,
        }}
      />
    </QueryClientProvider>
  );
}
