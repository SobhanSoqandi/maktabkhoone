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
    router.push(`/Home/courses?search=${encodeURIComponent(search)}`);
    setOpen(false);
  };

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex-1 mx-2 md:mx-5">
      <div className="top-1/2 right-5 z-10 absolute -translate-y-1/2 pointer-events-none">
        <img src="/next.svg" alt="مکتب‌خونه" className="w-[50px] h-4" />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onFocus={() => setOpen(true)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="جستجو در دوره‌ها"
          className="bg-gray-50 pr-20 pl-12 border border-gray-200 focus:border-teal-500 rounded-2xl outline-none w-full h-12"
        />
      </form>

      <FiSearch className="top-1/2 left-5 absolute text-gray-500 text-2xl -translate-y-1/2" />

      <SearchDropdown open={open} search={search} />
    </div>
  );
}
