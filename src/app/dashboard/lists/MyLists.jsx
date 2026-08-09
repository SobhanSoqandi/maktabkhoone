"use client";

import { useContext } from "react";
import CourcesCard from "../courses/CourcesCard";
import { WishListContext } from "@/context/WishListContext";
import WishlistCourseCard from "./WishlistCard";
import useGet from "@/app/(hooks)/useGet";

export default function MyList() {
  const { data: myCourse, isLoading } = useGet(
    "wishlists/me/courses",
    "wishlist_course",
  );
  console.log(myCourse);
  return (
    <section className="space-y-8">
      <h1 className="font-bold text-3xl">دوره‌های ذخیره‌شده</h1>

      {isLoading ? (
        <div>در حال بارگذاری...</div>
      ) : myCourse.length > 0 ? (
        <div className="gap-6 grid lg:grid-cols-2">
          {myCourse.map((course) => (
            <WishlistCourseCard key={course.course.id} course={course.course} />
          ))}
        </div>
      ) : (
        <div className="p-8 border rounded-2xl text-gray-500 text-center">
          هنوز هیچ دوره‌ای ذخیره نکرده‌اید.
        </div>
      )}
    </section>
  );
}
