"use client";

import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="
        flex
        flex-col
        md:flex-row
        overflow-hidden
        sm:rounded-2xl
        border
        border-gray-200
        bg-white
        transition
        hover:shadow-lg
      "
        >


            <div className="relative p-2 h-44 w-full overflow-hidden rounded-3xl shrink-0 md:w-[350px]">

                <Image
                    src={course.banner}
                    alt={course.title}
                    fill
                    className="object-cover p-3 rounded-3xl"
                />

            </div>

            <div className="flex flex-1 flex-col justify-between p-5">

                <div >

                    <h2 className="line-clamp-2 text-lg font-black leading-[60px]">
                        {course.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {course.teacher}
                    </p>



                </div>

                <div className="mt-3 flex left-0 justify-between">


                    <span className="badge max-w-24 text-xs">
                        {course.course_hour}
                    </span>


                    <div className="flex items-center gap-4">

                        {course.discount > 0 && (
                            <span className="badge bg-rose-500 text-white p-1 px-3 text-xs">
                                %{toPersianNumbers(course.discount)}
                            </span>
                        )}

                        {course.is_free ? (
                            <span className="badge bg-teal-50 text-teal-800">
                                رایگان
                            </span>
                        ) : (
                            <div className="flex items-end gap-2">

                                <span className="text-lg font-black">
                                    {course.price.toLocaleString("fa-IR")}
                                </span>

                                <span className="pb-1 text-sm">
                                    تومان
                                </span>

                                {course.old_price && (
                                    <span className="text-lg text-gray-400 line-through">
                                        {course.old_price.toLocaleString("fa-IR")}
                                    </span>
                                )}

                            </div>
                        )}

                    </div>


                </div>

            </div>


        </Link>
    );
}