import truncateText from "@/app/Utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import {
    HiStar,
    HiUsers,
    HiCheckBadge,
} from "react-icons/hi2";

export default function HeaderInfo({ course }) {
    return (
        <div>

       

            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">

                <Link
                    href="/"
                    className="hover:text-teal-600"
                >
                    خانه
                </Link>

                <span>/</span>

                <Link
                    href="/courses"
                    className="hover:text-teal-600"
                >
                    دوره‌ها
                </Link>

                <span>/</span>

                <span className="text-gray-800">
                    {course.title}
                </span>

            </div>

            {/* Title */}

            <h1 className="text-3xl sm:text-4xl font-black leading-[70px] text-gray-900">

                {course.title}

            </h1>

            {/* teacher */}

            <div className="mt-8 flex flex-wrap items-center gap-6">

                <div className="flex items-center gap-3">

                    
                    <Image
                        src="/images/teacher.jpg"
                        width={50}
                        height={50}
                        className="h-14 w-14 rounded-full bg-teal-100"
                    />
                    <div>

                        <p className="text-sm text-gray-500">
                            مدرس دوره
                        </p>

                        <h3 className="font-bold text-gray-900">

                            {course.teacher}

                        </h3>

                    </div>

                </div>

                <div className="h-10 w-px bg-gray-200" />

                <div>

                    <p className="text-sm text-gray-500">
                        برگزارکننده
                    </p>

                    <h3 className="font-bold">
                        مکتب‌خونه
                    </h3>

                </div>

            </div>

            {/* Description */}

            <p className="mt-8 leading-9 text-gray-600">

                {truncateText(course.description  , 100)}

            </p>

            {/* Tags */}

            <div className="mt-8 flex flex-wrap gap-3">

                <div className="badge bg-blue-100 text-blue-600">

                    <HiCheckBadge />

                    محبوب کاربران

                </div>

                <div className="badge bg-orange-100 text-sm font-semibold text-orange-700">

                    <HiStar />

                    {course.rate}

                </div>

                <div className="badge bg-green-100 text-sm font-semibold text-green-700">

                    <HiUsers />

                    {(course.students ?? 1200).toLocaleString("fa-IR")} دانشجو

                </div>

            </div>

        </div>
    );
}