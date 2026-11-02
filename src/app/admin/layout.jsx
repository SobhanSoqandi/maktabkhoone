"use client"

import { useEffect, useState } from "react"
import Header from "./(components)/Header"
import Sidebar from "./(components)/Sidebar"

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(window.innerWidth >= 1024)
    const onKey = (e) => e.key === "Escape" && window.innerWidth < 1024 && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex h-dvh overflow-hidden bg-slate-100">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header open={open} onToggle={() => setOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
