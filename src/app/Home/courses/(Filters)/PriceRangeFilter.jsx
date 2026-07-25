"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CheckboxFilter from "./(Components)/CheckboxFilter";

function PriceRangeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const minPrice = searchParams.get("min_price") || "";
  const maxPrice = searchParams.get("max_price") || "";

  function updatePrice(field, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "") {
      params.delete(field);
    } else {
      params.set(field, value);
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  const is_free = [
    {
      label: " رایگان ",
      value: "true",
    },
  ];



  return (
    <div className="space-y-4 p-4">
      <div>
        <label className="block mb-1">حداقل قیمت</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => updatePrice("min_price", e.target.value)}
          placeholder="مثلا 100000"
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="block mb-1">حداکثر قیمت</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => updatePrice("max_price", e.target.value)}
          placeholder="مثلا 500000"
          className="input input-bordered w-full"
        />
      </div>

      <CheckboxFilter
        filterField="is_free"
        options={is_free}
      />
    </div>
  );
}

export default PriceRangeFilter;