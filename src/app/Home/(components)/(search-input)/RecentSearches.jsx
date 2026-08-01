"use client";

import { BiTrash } from "react-icons/bi";

export default function RecentSearches({
  searches,
}) {
  return (
    <div className="p-5">

          <div className="flex justify-between p-1" >
                <h3 className=" font-bold text-gray-800">
                    جستجو های اخیر 
                </h3>

                <button className="btn btn-primary text-lg p-2 text-zinc-500" >
                    <BiTrash />
                </button>
            </div>

      <div className="flex flex-wrap gap-3 max-h-28 overflow-y-auto p-2">

        {searches.map((item) => (
          <button
            key={item}
            className="
              rounded-xl
              bg-gray-50
              px-4
              py-2
              text-sm
              text-teal-600
              transition
              hover:bg-teal-50
              hover:text-teal-700
              whitespace-nowrap
            "
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
}