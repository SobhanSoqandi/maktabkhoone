"use client";

import Image from "next/image";
import Link from "next/link";
import { base_url } from "../../../../../data/info";

export default function SearchResultItem({ course }) {
  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-xl transition"
    >
      <div className="relative rounded-xl w-20 h-14 overflow-hidden">
        <Image
          src={base_url + course.banner}
          alt={course.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-bold line-clamp-1">{course.title}</h4>

        <p className="mt-1 text-gray-500 text-xs">{course.teacher}</p>
      </div>
    </Link>
  );
}
