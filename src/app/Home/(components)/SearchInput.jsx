"use client";

import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchDropdown from "./(search-input)/SearchDropdown";
import { useRouter } from "next/navigation";

export default function SearchInput() {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search.trim()) return;
        router.push(`/Home/courses?q=${encodeURIComponent(search)}`);
    };

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative mx-2 flex-1 md:mx-5"
        >
            <div className="pointer-events-none absolute right-5 top-1/2 z-10 -translate-y-1/2">
                <img
                    src="/next.svg"
                    alt="مکتب‌خونه"
                    className="h-4 w-[50px]"
                />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    value={search}
                    onFocus={() => setOpen(true)}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="جستجو در دوره‌ها"
                    className="
                    h-12
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    pr-20
                    pl-12
                    outline-none
                    focus:border-teal-500
                "
                />
            </form>

            <FiSearch
                className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-2xl
                    text-gray-500
                "
            />

            <SearchDropdown
                open={open}
                search={search}
            />
        </div >
    );
}