"use client";
import React from "react";
import useMediaQuery from "@/app/(hooks)/useMediaQuery";

function Footer() {
  const isResponsive = useMediaQuery("(min-width: 768px)");

  return <>{isResponsive ? " Desktop footer " : "mobile footer"}</>;
}

export default Footer;
