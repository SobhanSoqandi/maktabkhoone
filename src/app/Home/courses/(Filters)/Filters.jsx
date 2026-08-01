"use client";

import React from "react";
import { FiFilter } from "react-icons/fi";
import PriceRangeFilter from "./PriceRangeFilter";
import CheckboxFilter from "./(Components)/CheckboxFilter";
import AccordionSection from "./(Components)/AccordionSection";
import { usePathname, useRouter } from "next/navigation";

function Filters() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClearFilters = () => {
    router.replace(pathname, {
      scroll: false,
    });
  };

  const levelOptions = [
    {
      label: "مبتدی",
      value: "beginner",
    },
    {
      label: "متوسط",
      value: "intermediate",
    },
    {
      label: "حرفه‌ای",
      value: "advanced",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-x-2 p-4 border-gray-200 border-b">
        <FiFilter />
        <span>فیلتر ها</span>
      </div>

      <AccordionSection title="سطح دوره">
        <CheckboxFilter filterField="level" options={levelOptions} />
      </AccordionSection>

      <AccordionSection title=" قیمت ">
        <PriceRangeFilter />
      </AccordionSection>

      <div className="flex gap-4 p-5">
        {/* <button
          onClick={() => setisfilter(true)}
          className="w-full btn btn-success"
        >
          اعمال فیلتر
        </button> */}
        <button onClick={handleClearFilters} className="w-full btn btn-primary">
          حذف فیلتر
        </button>
      </div>
    </div>
  );
}

export default Filters;
