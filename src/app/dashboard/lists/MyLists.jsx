"use client";

import SegmentedControl from "@/app/(components)/(SegmentControll)/SegmentedControl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MyList() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab =
    searchParams.get("tab") || "saved";

  const items = [
    {
      label: "نشان‌شده",
      value: "saved",
    },
    {
      label: "آرشیوشده",
      value: "archive",
    },
    {
      label: "پیشنهادها",
      value: "suggestions",
    },
  ];

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams);

    params.set("tab", value);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">
        لیست‌های من
      </h1>

      <SegmentedControl
        items={items}
        value={currentTab}
        onChange={handleChange}
      />

      <div className="rounded-2xl border p-8">
        {currentTab === "saved" && <p>دوره‌های نشان‌شده</p>}

        {currentTab === "archive" && <p>دوره‌های آرشیوشده</p>}

        {currentTab === "suggestions" && <p>دوره‌های پیشنهادی</p>}
      </div>
    </section>
  );
}