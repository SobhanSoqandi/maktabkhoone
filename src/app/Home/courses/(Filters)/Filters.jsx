'use client'

import React from 'react'
import { FiFilter } from 'react-icons/fi'
import PriceRangeFilter from './PriceRangeFilter'
import CheckboxFilter from './(Components)/CheckboxFilter'
import AccordionSection from './(Components)/AccordionSection'
import { usePathname, useRouter } from 'next/navigation'

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
      <div className="flex items-center border-b border-gray-200 p-4 gap-x-2" >
        <FiFilter />
        <span>
          فیلتر ها
        </span>
      </div>

      <AccordionSection title="سطح دوره" >
        <CheckboxFilter
          filterField="level"
          options={levelOptions}
        />
      </AccordionSection>

      <AccordionSection title=" قیمت " >
        <PriceRangeFilter />
      </AccordionSection>

      <div className="flex p-5 gap-4" >
        <button className="btn btn-success w-full" >
          اعمال فیلتر
        </button>
        <button 
        onClick={handleClearFilters}
        className="btn btn-primary w-full" >
          حذف فیلتر
        </button>
      </div>

    </div>
  )
}

export default Filters