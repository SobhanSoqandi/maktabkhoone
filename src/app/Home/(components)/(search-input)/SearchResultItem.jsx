"use client";

import Image from "next/image";
import Link from "next/link";

export default function SearchResultItem({
  course,
}) {
  return (
    <Link
      href={`/courses/${course.id}/${course.slug}`}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        p-2
        transition
        hover:bg-gray-50
      "
    >
      <div className="relative h-14 w-20 overflow-hidden rounded-xl">

        <Image
          src={course.banner}
          alt={course.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="flex-1">

        <h4 className="line-clamp-1 font-bold">
          {course.title}
        </h4>

        <p className="mt-1 text-xs text-gray-500">
          {course.teacher}
        </p>

      </div>

    </Link>
  );
}