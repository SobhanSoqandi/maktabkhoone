"use client";

import { useContext } from "react";
import GlobalModalContext from "./GlobalModalContext";

export default function useGlobalModal() {
  const context = useContext(GlobalModalContext);

  if (!context) {
    throw new Error("useGlobalModal must be used inside GlobalModalProvider");
  }

  return context;
}
