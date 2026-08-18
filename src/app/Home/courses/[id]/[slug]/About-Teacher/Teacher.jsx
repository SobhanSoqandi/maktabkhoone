import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";

import ExpandableText from "@/app/Utils/ExpandableText";
import { base_url } from "../../../../../../../data/info";

export default function TeacherDescription({ teacher_detail: teacher }) {
  //   const teacher = {
  //     name: "جادی میرمیرانی",
  //     avatar: "/images/teacher.jpg",
  //     desc: "برنامه‌نویس، مدیر سیستم، آموزشگر...",
  //     courses: 9,
  //     students: 341558,
  //     reviews: 25421,
  //     description: `جادی به معنای حقیقی کلمه، یک گیک و یک هکر است،
  //         البته منظور از هکر، دزدی پسورد و ایمیل مردم نیست! بلکه به
  //          معنی عشق به دانستن و عشق به تحقیق درباره خیلی از چیزهایی
  //         هست که می‌بینم و می‌شنویم. جادی بیشتر از ۲۰ سال است که به
  //         صورت حرفه‌ای برنامه‌نویسی می‌کند و تجربیات زیادی در این زمینه داره`,
  //   };
  console.log(teacher);
  const stats = [
    {
      id: 1,
      title: "تعداد دوره‌ها",
      value: `${teacher.course_count} دوره`,
      icon: IoPlayCircleOutline,
    },
    {
      id: 2,
      title: "دانشجویان",
      value: teacher.student_count.toLocaleString("fa-IR"),
      icon: HiOutlineUsers,
    },
    {
      id: 3,
      title: "نظر و امتیاز",
      value: teacher.rating.toLocaleString("fa-IR"),
      icon: FaRegStar,
    },
  ];

  return (
    <section className="bg-white p-8 border border-gray-200 rounded-3xl">
      <div className="flex md:flex-row flex-col-reverse justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <h2 className="font-black text-3xl">
            {teacher.teacher.firstname + teacher.teacher.lastname}
          </h2>

          <p className="mt-4 text-gray-500 leading-9">{teacher.teacher.desc}</p>
        </div>

        <div className="relative border border-gray-200 rounded-full w-24 h-24 overflow-hidden">
          {/* <Image
            src={base_url + teacher?.teacher?.user?.avatar}
            alt={teacher.teacher.firstname + teacher.teacher.lastname}
            fill
            unoptimized
            className="object-cover"
          /> */}
        </div>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-10">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white hover:shadow-md p-4 border border-gray-200 hover:border-teal-500 rounded-2xl transition"
            >
              <div className="flex justify-center items-center bg-teal-50 rounded-2xl w-10 sm:w-14 h-10 sm:h-14">
                <Icon className="text-teal-600 text-2xl sm:text-3xl" />
              </div>

              <div>
                <p className="mb-1 text-gray-500 text-xs sm:text-sm">
                  {item.title}
                </p>

                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  {item.value}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <ExpandableText text={teacher.teacher.bio} maxLength={100} />
      </div>
    </section>
  );
}
