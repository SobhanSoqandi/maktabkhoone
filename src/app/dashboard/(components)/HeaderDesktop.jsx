import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";
import CategoriresFetch from "@/app/Home/(components)/category/CategoriresFetch";
import Image from "next/image";
import Login from "@/app/Home/(components)/login/Login";
import SearchInput from "@/app/Home/(components)/SearchInput";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";


function HeaderDesktop() {
    return (
        <header className="bg-white border-gray-200 border-b w-full">
            <div className="flex justify-between items-center mx-auto container px-4 h-20">
                {/* <div className="hidden xl:flex items-center md:ml-10">
                    <Image src="/next.svg" alt="Logo" width={60} height={20} />
                </div> */}


            <SearchInput />

                <div className="hidden md:flex items-center gap-6">
                    <nav className="hidden lg:flex items-center gap-6">
                        <Link href="/" className="flex link-style">
                            <span className="flex items-center gap-1 text-pink-500">
                                <HiOutlineSparkles className="text-lg" />
                            </span>
                            اشتراک مکتب‌پلاس
                        </Link>

                    </nav>
                    <Login />
                </div>
            </div>
        </header>
    )
}

export default HeaderDesktop

