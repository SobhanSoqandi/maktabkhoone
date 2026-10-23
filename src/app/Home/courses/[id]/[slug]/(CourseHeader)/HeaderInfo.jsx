
import truncateText from "@/app/Utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { HiStar, HiUsers, HiCheckBadge } from "react-icons/hi2";

export default function HeaderInfo({ course, teacher, rate, students }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/40 to-sky-50/70 p-5 shadow-[0_12px_45px_-25px_rgba(59,130,246,0.18)] sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-400 sm:mb-9">
          <Link href="/" className="transition-colors duration-200 hover:text-blue-600">
            خانه
          </Link>
          <span className="text-blue-200">/</span>
          <Link href="/courses" className="transition-colors duration-200 hover:text-blue-600">
            دوره‌ها
          </Link>
          <span className="text-blue-200">/</span>
          <span className="max-w-full truncate font-semibold text-blue-700">
            {course.title}
          </span>
        </div>

        <div className="mb-5 flex items-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
          <span className="text-xs font-bold tracking-wide text-blue-600 sm:text-sm">
            آموزش حرفه‌ای، آینده‌ای روشن
          </span>
        </div>

        <h1 className="max-w-4xl text-2xl font-black leading-[1.8] text-slate-800 sm:text-3xl sm:leading-[1.8] lg:text-4xl">
          {course.title}
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-4 rounded-2xl border border-blue-100/70 bg-white/80 p-4 shadow-[0_4px_20px_-12px_rgba(59,130,246,0.15)] backdrop-blur-sm sm:mt-8 sm:gap-6 sm:p-5">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-300 to-blue-500 opacity-50 blur-[3px]" />
              <Image
                src="/images/teacher.jpg"
                width={50}
                alt="teacherProfile"
                height={50}
                className="relative h-14 w-14 rounded-full border-2 border-white bg-blue-100 object-cover ring-2 ring-blue-100"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-400" />
            </div>
            <div className="min-w-0">
              <p className="mb-1 text-xs font-medium text-slate-400 sm:text-sm">
                مدرس دوره
              </p>
              <h3 className="truncate text-sm font-extrabold text-slate-800 sm:text-base">
                {teacher}
              </h3>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-blue-600">
              <HiCheckBadge className="text-2xl" />
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 sm:text-sm">
                برگزارکننده
              </p>
              <h3 className="text-sm font-extrabold text-slate-800 sm:text-base">
                مکتب‌خونه
              </h3>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm leading-9 text-slate-600 sm:mt-7 sm:text-base sm:leading-10">
          {truncateText(course.description, 100)}
        </p>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <div className="badge border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-100/80 text-sm font-bold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <HiCheckBadge className="shrink-0 text-lg text-blue-500" />
            محبوب کاربران
          </div>

          <div className="badge border border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 text-sm font-bold text-amber-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <HiStar className="shrink-0 text-lg text-amber-500" />
            {rate}
          </div>

          <div className="badge border border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 text-sm font-bold text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <HiUsers className="shrink-0 text-lg text-sky-500" />
            {students.toLocaleString("fa-IR")} دانشجو
          </div>
        </div>
      </div>
    </div>
  );
}
