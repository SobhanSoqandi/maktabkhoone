import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { FiCalendar, FiClock, FiEdit2, FiEye, FiFileText, FiImage, FiTag, FiTrash2, FiUser, FiCheckCircle } from "react-icons/fi";

const levels = { beginner: "مبتدی", intermediate: "متوسط", advanced: "پیشرفته" };

const statuses = {
  published: {
    label: "منتشر شده",
    Icon: FiCheckCircle,
    pill: "bg-[#34c759]/15 text-[#248a3d]",
    banner: "from-emerald-100 via-teal-50 to-sky-100",
    ring: "ring-[#34c759]/30",
  },
  draft: {
    label: "پیش‌نویس",
    Icon: FiFileText,
    pill: "bg-[#8e8e93]/15 text-[#636366]",
    banner: "from-slate-100 via-zinc-50 to-blue-100",
    ring: "ring-black/5",
  },
};

export default function CourseCard({ course }) {
  const s = statuses[course.status] || statuses.draft;
  const price = course.is_free || Number(course.price) === 0 ? "رایگان" : `${Number(course.price).toLocaleString("fa-IR")} تومان`;

  const meta = [
    { Icon: FiTag, label: "سطح", value: levels[course.course_level] },
    { Icon: FiClock, label: "مدت", value: `${course.course_hour.toLocaleString("fa-IR")} ساعت` },
    { Icon: FiUser, label: "مدرس", value: toPersianNumbers(course.teacher_id) },
    { Icon: FiCalendar, label: "تاریخ ایجاد", value: toPersianDate(course.created_at) },
  ];

  const actions = [
    { Icon: FiEye, label: "مشاهده", style: "bg-[#007aff]/10 text-[#007aff] hover:bg-[#007aff]/15" },
    { Icon: FiEdit2, label: "ویرایش", style: "bg-[#ff9f0a]/10 text-[#c93400] hover:bg-[#ff9f0a]/15" },
    { Icon: FiTrash2, label: "حذف", style: "bg-[#ff3b30]/10 text-[#ff3b30] hover:bg-[#ff3b30]/15" },
  ];

  return (
    <article
      dir="rtl"
      className={`group overflow-hidden rounded-[28px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.05)] ring-1 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] ${s.ring}`}
    >
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${s.banner}`}>
        {course.banner ? (
          <img src={course.banner} alt={course.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-[26px] bg-white/60 text-slate-400 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <FiImage size={34} />
            </span>
          </div>
        )}
        <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold backdrop-blur-xl ${s.pill}`}>
          <s.Icon size={14} />
          {s.label}
        </span>
        <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#1d1d1f] shadow-sm backdrop-blur-xl">
          {price}
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-[#1d1d1f]">{course.title}</h3>
          <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-[#6e6e73]">
            {course.description || "توضیحاتی برای این دوره ثبت نشده است."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-3xl bg-[#f5f5f7] p-5">
          {meta.map(({ Icon, label, value }) => (
            <div key={label} className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-sm">
                <Icon size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] text-[#86868b]">{label}</p>
                <p className="truncate text-sm font-semibold text-[#1d1d1f]">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {actions.map(({ Icon, label, style }) => (
            <button
              key={label}
              type="button"
              className={`flex flex-1 items-center justify-center gap-2 rounded-2xl shadow cursor-pointer py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${style}`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}