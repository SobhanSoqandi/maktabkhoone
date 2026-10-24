import truncateText from "@/app/Utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { HiStar, HiUsers, HiCheckBadge } from "react-icons/hi2";
import { base_url } from "../../../../../../../data/info";

export default function HeaderInfo({
  course,
  teacher,
  rate,
  students,
  avatar,
}) {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50/40 to-sky-50/70 shadow-[0_12px_45px_-25px_rgba(59,130,246,0.18)] p-5 sm:p-8 lg:p-10 border border-blue-100/80 rounded-[32px] overflow-hidden">
      <div className="-top-20 -right-16 absolute bg-sky-200/20 blur-3xl rounded-full w-56 h-56 pointer-events-none" />
      <div className="-bottom-24 left-0 absolute bg-blue-200/20 blur-3xl rounded-full w-56 h-56 pointer-events-none" />

      <div className="z-10 relative">
        <div className="flex flex-wrap items-center gap-2 mb-7 sm:mb-9 font-medium text-slate-400 text-sm">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            خانه
          </Link>
          <span className="text-blue-200">/</span>
          <Link
            href="/courses"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            دوره‌ها
          </Link>
          <span className="text-blue-200">/</span>
          <span className="max-w-full font-semibold text-blue-700 truncate">
            {course.title}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-full w-8 h-1.5" />
          <span className="font-bold text-blue-600 text-xs sm:text-sm tracking-wide">
            آموزش حرفه‌ای، آینده‌ای روشن
          </span>
        </div>

        <h1 className="max-w-4xl font-black text-slate-800 text-2xl sm:text-3xl lg:text-4xl leading-[1.8] sm:leading-[1.8]">
          {course.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-white/80 shadow-[0_4px_20px_-12px_rgba(59,130,246,0.15)] backdrop-blur-sm mt-7 sm:mt-8 p-4 sm:p-5 border border-blue-100/70 rounded-2xl">
          <div className="flex flex-1 items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-br from-sky-300 to-blue-500 opacity-50 blur-[3px] rounded-full" />
              <Image
                src={base_url + avatar}
                width={50}
                unoptimized
                alt="teacherProfile"
                height={50}
                className="relative bg-blue-100 border-2 border-white rounded-full ring-2 ring-blue-100 w-14 h-14 object-cover"
              />
              <span className="right-0 bottom-0 absolute bg-sky-400 border-2 border-white rounded-full w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="mb-1 font-medium text-slate-400 text-xs sm:text-sm">
                مدرس دوره
              </p>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base truncate">
                {teacher}
              </h3>
            </div>
          </div>

          <div className="hidden sm:block bg-gradient-to-b from-transparent via-blue-200 to-transparent w-px h-12" />

          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl w-11 h-11 text-blue-600 shrink-0">
              <HiCheckBadge className="text-2xl" />
            </div>
            <div>
              <p className="mb-1 font-medium text-slate-400 text-xs sm:text-sm">
                برگزارکننده
              </p>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                مکتب‌خونه
              </h3>
            </div>
          </div>
        </div>

        <p className="mt-6 sm:mt-7 text-slate-600 text-sm sm:text-base leading-9 sm:leading-10">
          {truncateText(course.description, 100)}
        </p>

        <div className="flex flex-wrap gap-3 mt-7 sm:mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-sky-100/80 shadow-sm hover:shadow-md border border-blue-100 font-bold text-blue-700 text-sm transition-all hover:-translate-y-0.5 duration-300 badge">
            <HiCheckBadge className="text-blue-500 text-lg shrink-0" />
            محبوب کاربران
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm hover:shadow-md border border-amber-100 font-bold text-amber-700 text-sm transition-all hover:-translate-y-0.5 duration-300 badge">
            <HiStar className="text-amber-500 text-lg shrink-0" />
            {rate}
          </div>

          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 shadow-sm hover:shadow-md border border-sky-100 font-bold text-sky-700 text-sm transition-all hover:-translate-y-0.5 duration-300 badge">
            <HiUsers className="text-sky-500 text-lg shrink-0" />
            {students.toLocaleString("fa-IR")} دانشجو
          </div>
        </div>
      </div>
    </div>
  );
}
