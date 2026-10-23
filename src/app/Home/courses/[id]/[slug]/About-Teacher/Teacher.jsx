
import { FaRegStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";

import ExpandableText from "@/app/Utils/ExpandableText";

export default function TeacherDescription({ teacher_detail: teacher }) {
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
    <section className="rounded-2xl border border-blue-100 bg-white p-5 sm:p-6">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-extrabold leading-relaxed text-slate-800 sm:text-2xl">
            {/* {teacher.teacher.user.student_profile.name + teacher.teacher.user.student_profile.last_name ?? "none"} */}
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            {teacher.teacher.desc}
          </p>
        </div>

        
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600">
                <Icon className="text-xl" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-slate-500 sm:text-sm">{item.title}</p>
                <h3 className="mt-1 break-words text-sm font-bold text-slate-800 sm:text-base">
                  {item.value}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="mb-3 text-base font-bold text-slate-800">درباره مدرس</h3>
        <div className="text-sm leading-8 text-slate-600 sm:text-base">
          <ExpandableText text={teacher.teacher.bio} maxLength={100} />
        </div>
      </div>
    </section>
  );
}
