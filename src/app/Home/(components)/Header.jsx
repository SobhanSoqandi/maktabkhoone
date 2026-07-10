import React from 'react'
import SearchInput from './SearchInput'

import { FaBook, FaRegUser } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import Categories from './Categories';
import Link from 'next/link';

function Header() {
    return (
        <header className="w-full border-b border-gray-200 bg-white" >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">


                <div className="hidden md:flex items-center md:ml-10">
                    <img
                        src="/next.svg"
                        alt="Logo"
                        className="h-5 w-[60px]"
                    />
                </div>


                <div className="hidden md:block" >
                    <Categories />
                </div>

                <SearchInput />

                <div className="hidden md:flex items-center gap-8">

                    <nav className="hidden items-center gap-8 lg:flex">
                        <Link
                            href="/"
                            className="link-style flex"
                        >
                            <span className="flex items-center gap-1 text-pink-500">
                                <HiOutlineSparkles className="text-lg" />
                            </span>

                            اشتراک مکتب‌پلاس
                        </Link>

                        <Link
                            href="/"
                            className="link-style"
                        >
                            سرویس سازمانی
                        </Link>
                    </nav>

                    <div className="flex items-center gap-3">

                        <button className="btn btn-primary">
                            <FaBook className="h-5 w-5" />
                            <span>دوره‌های من</span>
                        </button>

                        <button className="btn btn-primary">
                            <TiShoppingCart className="h-5 w-5" />
                        </button>

                        <button className="btn btn-primary">
                            <FaRegUser className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header