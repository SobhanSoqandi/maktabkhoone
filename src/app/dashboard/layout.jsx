"use client";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import HeaderPanel from "./(components)/HeaderPanel";
import Sidebar from "./(components)/sidebar/sidebar";
import { useState } from "react";
import ProtectedRoute from "../(components)/ProtectedRoute";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProtectedRoute>
      <div className="flex flex-col mx-auto container">
        <div className="flex border-gray-200 border-b-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <BsLayoutSidebarInsetReverse className="mr-5 text-gray-500 text-2xl" />
          </button>
          <HeaderPanel />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div
            className={`${isOpen ? "hidden" : "block absolute lg:relative z-50"}`}
          >
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <main className="flex-1 m-5 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
