import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { FiAward, FiCalendar, FiCheck, FiCheckCircle, FiClock, FiCreditCard, FiHash, FiUser, FiX, FiXCircle } from "react-icons/fi";

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-fuchsia-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-orange-400 to-rose-500",
];

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
    title: "مدرس تأیید شد",
    desc: "این فرد در لیست مدرسین قرار گرفته است.",
    panel: "bg-[#34c759]/10 text-[#248a3d]",
  },
  rejected: {
    label: "رد شده",
    Icon: FiXCircle,
    pill: "bg-[#ff3b30]/15 text-[#d70015]",
    banner: "from-rose-100 via-red-50 to-slate-100",
    ring: "ring-[#ff3b30]/30",
    title: "درخواست رد شد",
    desc: "این درخواست تأیید نشده و فرد مدرس نمی‌شود.",
    panel: "bg-[#ff3b30]/10 text-[#d70015]",
  },
};

export default function TeacherRequestCard({ teacher }) {
  const key = statuses[teacher.status] ? teacher.status : "pending";
  const s = statuses[key];

  const meta = [
    { Icon: FiCalendar, label: "تاریخ تولد", value: toPersianDate(teacher.birth_date) },
    { Icon: FiCreditCard, label: "کد ملی", value: toPersianNumbers(teacher.national_code) },
    { Icon: FiUser, label: "شناسه کاربر", value: toPersianNumbers(teacher.user_id) },
    { Icon: FiHash, label: "شناسه درخواست", value: toPersianNumbers(teacher.id) },
  ];

  return (
    <article
      dir="rtl"
      className={`group overflow-hidden rounded-[28px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.05)] ring-1 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] ${s.ring}`}
    >
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${s.banner}`}>
        <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold backdrop-blur-xl ${s.pill}`}>
          <s.Icon size={14} />
          {s.label}
        </span>
        <span
          className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br text-3xl font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] ring-4 ring-white transition-transform duration-500 group-hover:scale-105 ${gradients[teacher.id % gradients.length]}`}
        >
          {teacher.firstname[0]}
          {teacher.lastname[0]}
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
            {teacher.firstname} {teacher.lastname}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-xs font-semibold text-[#1d1d1f]">
            <FiAward size={14} />
            {teacher.education}
          </span>
          <p className="mt-3 line-clamp-3 min-h-18 text-sm leading-6 text-[#6e6e73]">
            {teacher.bio || "بیوگرافی ثبت نشده است."}
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
