"use client";

import SelectBox from "@/app/(components)/SelectBox";
import {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function HeaderCourses( { categories }) {

   

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

//   const categories = [
//     { id: 1, title: "همه دسته‌بندی‌ها", value: "" },
//     { id: 2, title: "برنامه نویسی", value: "programming" },
//     { id: 3, title: "هوش مصنوعی", value: "ai" },
//   ];

  const teachers = [
    { id: 1, title: "همه مدرس‌ها", value: "" },
    { id: 2, title: "سبحان میرزایی", value: "sobhan" },
    { id: 3, title: "محمد احمدی", value: "mohammad" },
  ];

  const statuses = [
    { id: 1, title: "همه وضعیت‌ها", value: "" },
    { id: 2, title: "منتشر شده", value: "published" },
    { id: 3, title: "پیش نویس", value: "draft" },
  ];

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px_220px]">
        <div className="relative">
          <HiMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

          <input
            type="text"
            defaultValue={searchParams.get("search") || ""}
            onChange={(e) => updateQuery("search", e.target.value)}
            placeholder="جستجو در دوره‌ها..."
            className="h-12 w-full rounded-xl border border-gray-200 pr-12 pl-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <SelectBox
          value={searchParams.get("category") || ""}
          onChange={(value) => updateQuery("category", value)}
          options={categories}
          placeholder="دسته‌بندی"
        />

        <SelectBox
          value={searchParams.get("teacher") || ""}
          onChange={(value) => updateQuery("teacher", value)}
          options={teachers}
          placeholder="مدرس"
        />

        <SelectBox
          value={searchParams.get("status") || ""}
          onChange={(value) => updateQuery("status", value)}
          options={statuses}
          placeholder="وضعیت"
        />
      </div>
    </div>
  );
}