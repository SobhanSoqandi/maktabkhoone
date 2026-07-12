import React from "react";
import SearchInput from "./SearchInput";
import { HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import CategoriresFetch from "./category/CategoriresFetch";
import Login from "./login/Login";

function Header() {
  return (
    <header className="bg-white border-gray-200 border-b w-full">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-20">
        <div className="hidden md:flex items-center md:ml-10">
          <Image src="/next.svg" alt="Logo" width={60} height={20} />
        </div>

        <div className="hidden md:block">
          <CategoriresFetch />
        </div>

        <SearchInput />

        <div className="hidden md:flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="flex link-style">
              <span className="flex items-center gap-1 text-pink-500">
                <HiOutlineSparkles className="text-lg" />
              </span>
              اشتراک مکتب‌پلاس
            </Link>

            <Link href="/" className="link-style">
              سرویس سازمانی
            </Link>
          </nav>
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;
