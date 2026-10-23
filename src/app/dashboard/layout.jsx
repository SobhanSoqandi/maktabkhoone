"use client";
import { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderPanel from "./(components)/HeaderPanel";
import Sidebar from "./(components)/sidebar/sidebar";
import ProtectedRoute from "../(components)/ProtectedRoute";

export default function Layout({ children }) {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = () =>
    window.matchMedia("(min-width: 1024px)").matches
      ? setDesktopOpen((v) => !v)
      : setMobileOpen((v) => !v);

  const close = () => setMobileOpen(false);

  return (
    <ProtectedRoute>
      <div className="h-screen bg-slate-50">
        <div className="mx-auto flex h-full flex-col container">
          <header className="z-30 flex shrink-0 items-center gap-2 border-b border-slate-200/80 bg-white/80 w-full backdrop-blur-md">
            <button
              onClick={toggle}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <HiOutlineBars3 className="text-2xl" />
            </button>
            <HeaderPanel />
          </header>

          <div className="relative flex min-h-0 flex-1">
            <div
              onClick={close}
              aria-hidden="true"
              className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            <div
              className={`fixed inset-y-0 start-0 z-50 flex transition-[transform,visibility,width] duration-300 ease-out lg:static lg:z-auto lg:overflow-hidden ${
                mobileOpen
                  ? "translate-x-0"
                  : "max-lg:invisible max-lg:ltr:-translate-x-full max-lg:rtl:translate-x-full"
              } ${desktopOpen ? "lg:w-[22.5rem]" : "lg:invisible lg:w-0"}`}
            >
              <Sidebar onClose={close} />
            </div>

            <main className="min-w-0 flex-1 overflow-y-auto p-4 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
