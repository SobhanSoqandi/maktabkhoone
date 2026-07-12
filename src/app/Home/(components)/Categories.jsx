
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { categories } from "./categories-data";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function Categories() {
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [path, setPath] = useState([]);
    const wrapperRef = useRef(null);

    const isOpen = isHover || isClick;

    useEffect(() => {
        const handler = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsClick(false);
                setPath([]);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleHover = (item, level) => {
        const next = path.slice(0, level);
        next[level] = item;
        setPath(next);
    };

    const columns = useMemo(() => {
        const result = [categories];
        path.forEach((item) => {
            if (item.children?.length) result.push(item.children);
        });
        return result;
    }, [path]);

    return (
        <div
            ref={wrapperRef}
            className="relative inline-block"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
                setIsHover(false);
                if (!isClick) setPath([]);
            }}
        >


            <button
                onClick={() => setIsClick((prev) => !prev)}
                className="btn shadow flex items-center">
                <HiOutlineViewGrid className="text-xl" />
                <span>دسته‌بندی دوره‌ها</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-1 flex rounded-xl bg-white shadow-2xl">
                    {columns.map((items, level) => (
                        <div key={level} className="w-72 border-l last:border-l-0">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => handleHover(item, level)}
                                    className={`flex cursor-pointer items-center justify-between px-5 py-3 hover:bg-gray-100 ${path[level]?.id === item.id ? "bg-gray-100" : ""
                                        }`}
                                >
                                    <span>{item.title}</span>
                                    {item.children?.length ?
                                        <span>
                                            <svg class="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                                            </svg>

                                        </span>
                                        : null}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
