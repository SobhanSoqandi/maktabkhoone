"use client";

import Modal from "@/app/(components)/modal";
import React from "react";
import { FiFilter } from "react-icons/fi";
import Filters from "../(Filters)/Filters";
import { IoFilter } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function CoursesHeader({ activeSort, setactiveSort }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function changeSort(sort) {
    setactiveSort(sort);
    const params = new URLSearchParams(searchParams.toString());

    if (!sort) {
      params.delete("sort");
    } else {
      params.set("sort", sort);
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="flex items-center shadow m-3 p-2 border border-gray-200 rounded-xl text-nowrap">
      <button className="hidden lg:flex font-bold btn">
        <IoFilter className="text-lg" />
        ترتیب :
      </button>

      <Modal>
        <Modal.Open name="filters">
          <button className="lg:hidden flex btn btn-primary">
            <FiFilter />
            فیلتر ها
          </button>
        </Modal.Open>

        <Modal.Window name="filters">
          <div className="p-2">
            <Filters />
          </div>
        </Modal.Window>
      </Modal>

      <div className="flex gap-5 p-3 px-5 overflow-x-auto overflow-y-hidden text-gray-500 text-sm">
        <button
          onClick={() => changeSort("")}
          className={`text-nowrap transition ${
            !activeSort ? "text-teal-600 font-bold" : "hover:text-teal-500"
          }`}
        >
          {" "}
          پیش فرض
        </button>
        <button
          onClick={() => changeSort("newest")}
          className={`text-nowrap transition ${
            activeSort === "newest"
              ? "text-teal-600 font-bold"
              : "hover:text-teal-500"
          }`}
        >
          {" "}
          جدید ترین
        </button>
        <button
          onClick={() => changeSort("popular")}
          className={`text-nowrap transition ${
            activeSort === "popular"
              ? "text-teal-600 font-bold"
              : "hover:text-teal-500"
          }`}
        >
          {" "}
          محبوب ترین
        </button>

        <button
          onClick={() => changeSort("price_high")}
          className={`text-nowrap transition ${
            activeSort === "price_high"
              ? "text-teal-600 font-bold"
              : "hover:text-teal-500"
          }`}
        >
          {" "}
          بیشترین قیمت
        </button>
        <button
          onClick={() => changeSort("price_low")}
          className={`text-nowrap transition ${
            activeSort === "price_low"
              ? "text-teal-600 font-bold"
              : "hover:text-teal-500"
          }`}
        >
          کمترین قیمت
        </button>
        <button
          onClick={() => changeSort("oldest")}
          className={`text-nowrap transition ${
            activeSort === "oldest"
              ? "text-teal-600 font-bold"
              : "hover:text-teal-500"
          }`}
        ></button>
      </div>
    </div>
  );
}

export default CoursesHeader;
