"use client"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import HeaderPanel from "./(components)/HeaderPanel";
import Sidebar from "./(components)/sidebar";
import { useState } from "react";

export default function Layout({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);


  return (
    <div className=" flex flex-col container mx-auto">
      <div className="flex border-b-2 border-gray-200" >
        <button
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsLayoutSidebarInsetReverse className="text-gray-500 text-2xl mr-5" />
        </button>
        <HeaderPanel />
      </div>

      <div className="flex flex-1 overflow-hidden">

        <div className={`${isOpen ? "hidden" : "block absolute lg:relative"}`} >
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        <main className="flex-1 overflow-y-auto p-6 m-5">
          {children}
        </main>
      </div>
    </div>
  );
}