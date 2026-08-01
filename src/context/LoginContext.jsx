import checkUser from "@/app/(function)/checkUser";
import React, { createContext, useState } from "react";

export const loginContext = createContext(false);

export default function LoginContext({ children }) {
  const [isLogin, setIsLogin] = useState(checkUser());
  return (
    <loginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </loginContext.Provider>
  );
}
