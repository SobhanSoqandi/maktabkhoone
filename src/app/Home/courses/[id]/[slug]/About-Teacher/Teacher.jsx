


import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";

import ExpandableText from "@/app/Utils/ExpandableText";

export default function TeacherDescription() {

    const teacher = {
        name: "جادی میرمیرانی",
        avatar: "/images/teacher.jpg",
        desc: "برنامه‌نویس، مدیر سیستم، آموزشگر...",
        courses: 9,
        students: 341558,
        reviews: 25421,
        description: `جادی به معنای حقیقی کلمه، یک گیک و یک هکر است، 
        البته منظور از هکر، دزدی پسورد و ایمیل مردم نیست! بلکه به
         معنی عشق به دانستن و عشق به تحقیق درباره خیلی از چیزهایی
        هست که می‌بینم و می‌شنویم. جادی بیشتر از ۲۰ سال است که به 
        صورت حرفه‌ای برنامه‌نویسی می‌کند و تجربیات زیادی در این زمینه داره`,
    };

    const stats = [
        {
            id: 1,
            title: "تعداد دوره‌ها",
            value: `${teacher.courses} دوره`,
            icon: IoPlayCircleOutline,
        },
        {
            id: 2,
            title: "دانشجویان",
            value: teacher.students.toLocaleString("fa-IR"),
            icon: HiOutlineUsers,
        },
        {
            id: 3,
            title: "نظر و امتیاز",
            value: teacher.reviews.toLocaleString("fa-IR"),
            icon: FaRegStar,
        },
    ];


    return (
        <section className="rounded-3xl border border-gray-200 bg-white p-8">

            <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">

                <div className="flex-1">

                    <h2 className="text-3xl font-black">
                        {teacher.name}
                    </h2>

                    <p className="mt-4 leading-9 text-gray-500">
                        {teacher.desc}
                    </p>

                </div>

                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-200">

                    <Image
                        src={teacher.avatar}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                    />

                </div>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-teal-500 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 sm:h-14 sm:w-14">
                                <Icon className="text-2xl text-teal-600 sm:text-3xl" />
                            </div>

                            <div>
                                <p className="mb-1 text-xs text-gray-500 sm:text-sm">
                                    {item.title}
                                </p>

                                <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                                    {item.value}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Description */}
            <div className="mt-10">

                <ExpandableText
                    text={teacher.description}
                    maxLength={100}
                />

            </div>

        </section>
    );
}
