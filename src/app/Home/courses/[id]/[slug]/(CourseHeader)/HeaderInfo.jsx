import truncateText from "@/app/Utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { HiStar, HiUsers, HiCheckBadge } from "react-icons/hi2";

export default function HeaderInfo({ course, teacher, rate, students }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6 text-gray-500 text-sm">
        <Link href="/" className="hover:text-teal-600">
          خانه
        </Link>

        <span>/</span>

        <Link href="/courses" className="hover:text-teal-600">
          دوره‌ها
        </Link>

        <span>/</span>

        <span className="text-gray-800">{course.title}</span>
      </div>

      <h1 className="font-black text-gray-900 text-3xl sm:text-4xl leading-[70px]">
        {course.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 mt-8">
        <div className="flex items-center gap-3">
          <Image
            src="/images/teacher.jpg"
            width={50}
            alt="teacherProfile"
            height={50}
            className="bg-teal-100 rounded-full w-14 h-14"
          />
          <div>
            <p className="text-gray-500 text-sm">مدرس دوره</p>

            <h3 className="font-bold text-gray-900">{teacher}</h3>
          </div>
        </div>

        <div className="bg-gray-200 w-px h-10" />

        <div>
          <p className="text-gray-500 text-sm">برگزارکننده</p>

          <h3 className="font-bold">مکتب‌خونه</h3>
        </div>
      </div>

      <p className="mt-8 text-gray-600 leading-9">
        {truncateText(course.description, 100)}
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        <div className="bg-blue-100 text-blue-600 badge">
          <HiCheckBadge />
          محبوب کاربران
        </div>

        <div className="bg-orange-100 font-semibold text-orange-700 text-sm badge">
          <HiStar />

          {rate}
        </div>

        <div className="bg-green-100 font-semibold text-green-700 text-sm badge">
          <HiUsers />
          {students.toLocaleString("fa-IR")} دانشجو
        </div>
      </div>
    </div>
  );
}
