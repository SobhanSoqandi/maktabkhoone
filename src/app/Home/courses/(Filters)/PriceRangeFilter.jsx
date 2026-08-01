"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CheckboxFilter from "./(Components)/CheckboxFilter";

function PriceRangeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isFree = searchParams.get("is_free") === "true";

  const [minPrice, setMinPrice] = useState(searchParams.get("min_price") || "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("max_price") || "");

  function updatePrice(field, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(field, value);
    } else {
      params.delete(field);
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  // وقتی رایگان شد قیمت‌ها پاک شوند
  useEffect(() => {
    if (!isFree) return;

    setMinPrice("");
    setMaxPrice("");

    const params = new URLSearchParams(searchParams.toString());

    params.delete("min_price");
    params.delete("max_price");

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [isFree]);

  const is_free = [
    {
      label: "رایگان",
      value: "true",
    },
  ];

  return (
    <div className="space-y-4 p-4">
      <CheckboxFilter filterField="is_free" options={is_free} />

      {!isFree && (
        <>
          <div>
            <label className="block mb-1">حداقل قیمت</label>

            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onBlur={() => updatePrice("min_price", minPrice)}
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label className="block mb-1">حداکثر قیمت</label>

            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onBlur={() => updatePrice("max_price", maxPrice)}
              className="w-full input input-bordered"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PriceRangeFilter;
