import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { FiCalendar, FiCheck, FiCheckCircle, FiClock, FiImage, FiTag, FiUser, FiX, FiXCircle } from "react-icons/fi";

const levels = { beginner: "مبتدی", intermediate: "متوسط", advanced: "پیشرفته" };

const statusKey = { draft: "pending", pending: "pending", published: "approved", approved: "approved", rejected: "rejected" };

const statuses = {
  pending: {
    label: "در انتظار تأیید",
    Icon: FiClock,
    pill: "bg-[#ff9f0a]/15 text-[#c93400]",
    banner: "from-amber-100 via-orange-50 to-rose-100",
    ring: "ring-[#ff9f0a]/30",
  },
  approved: {
    label: "تأیید شده",
    Icon: FiCheckCircle,
    pill: "bg-[#34c759]/15 text-[#248a3d]",
    banner: "from-emerald-100 via-teal-50 to-sky-100",
    ring: "ring-[#34c759]/30",
    title: "دوره تأیید شد",
    desc: "این دوره در لیست دوره‌ها قرار گرفته است.",
    panel: "bg-[#34c759]/10 text-[#248a3d]",
  },
  rejected: {
    label: "رد شده",
    Icon: FiXCircle,
    pill: "bg-[#ff3b30]/15 text-[#d70015]",
    banner: "from-rose-100 via-red-50 to-slate-100",
    ring: "ring-[#ff3b30]/30",
    title: "درخواست رد شد",
    desc: "این دوره تأیید نشده و منتشر نمی‌شود.",
    panel: "bg-[#ff3b30]/10 text-[#d70015]",
  },
};

export default function RequestCard({ course }) {
  const key = statusKey[course.status] || "pending";
  const s = statuses[key];
  const price = course.is_free || Number(course.price) === 0 ? "رایگان" : `${Number(course.price).toLocaleString("fa-IR")} تومان`;

  const meta = [
    { Icon: FiTag, label: "سطح", value: levels[course.course_level] },
    { Icon: FiClock, label: "مدت", value: `${course.course_hour.toLocaleString("fa-IR")} ساعت` },
    { Icon: FiUser, label: "مدرس", value: toPersianNumbers(course.teacher_id) },
    { Icon: FiCalendar, label: "تاریخ ثبت", value: toPersianDate(course.created_at) },
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

        {key === "pending" ? (
          <div className="flex gap-3">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-[17px] cursor-pointer hover:bg-[#00beab] bg-[#00b19f] py-3 text-sm font-semibold text-white"
            >
              <FiCheck size={18} />
              تأیید
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-[17px] cursor-pointer hover:bg-[#ff3b30]/20 bg-[#ff3b30]/10 py-3 text-sm font-semibold text-[#ff3b30]"
            >
              <FiX size={18} />
              رد
            </button>
          </div>
        ) : (
          <div className={`flex items-center gap-3 rounded-2xl p-4 ${s.panel}`}>
            <s.Icon size={26} className="shrink-0" />
            <div>
              <p className="text-sm font-bold">{s.title}</p>
              <p className="mt-0.5 text-xs opacity-80">{s.desc}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}