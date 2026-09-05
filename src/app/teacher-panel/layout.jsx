"use client";

import { useState } from "react";
import { Sidebar } from "./(components)/Sidebar";
import { MobileHeader } from "./(components)/MobileHeader";

export default function PanelLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f7] md:flex-row">
      <MobileHeader isOpen={isMobileOpen} onToggle={() => setIsMobileOpen(!isMobileOpen)} />
      <Sidebar isMobileOpen={isMobileOpen} onMobileClose={() => setIsMobileOpen(false)} />
      <main className="min-w-0 flex-1 p-4 md:p-8 md:pt-8 pt-4">{children}</main>
    </div>
  );
}