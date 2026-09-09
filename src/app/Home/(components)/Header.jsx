import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import CategoriresFetch from "./category/CategoriresFetch";
import Login from "./login/Login";

function Header() {
  return (
    <header className="bg-white border-gray-200 border-b w-full">
      <div className="flex justify-between items-center mx-auto px-4 h-20 container">
        <div className="flex">
          <div className="hidden xl:flex items-center md:ml-10">
            <Image src="/next.svg" alt="Logo" width={60} height={20} />
          </div>

          <div className="hidden md:block">
            <CategoriresFetch />
          </div>
        </div>

        <SearchInput />

        <div className="hidden md:flex items-center gap-6">
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;
