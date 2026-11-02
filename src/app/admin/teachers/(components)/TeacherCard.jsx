import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { FiAward, FiCalendar, FiCheckCircle, FiCreditCard, FiEdit2, FiEye, FiHash, FiTrash2, FiUser } from "react-icons/fi";

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-fuchsia-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-orange-400 to-rose-500",
];

const actions = [
  { Icon: FiEye, label: "مشاهده", style: "bg-[#007aff]/10 text-[#007aff] hover:bg-[#007aff]/15" },
  { Icon: FiEdit2, label: "ویرایش", style: "bg-[#ff9f0a]/10 text-[#c93400] hover:bg-[#ff9f0a]/15" },
  { Icon: FiTrash2, label: "حذف", style: "bg-[#ff3b30]/10 text-[#ff3b30] hover:bg-[#ff3b30]/15" },
];

export default function TeacherCard({ teacher }) {
  const meta = [
    { Icon: FiCalendar, label: "تاریخ تولد", value: toPersianDate(teacher.birth_date) },
    { Icon: FiCreditCard, label: "کد ملی", value: toPersianNumbers(teacher.national_code) },
    { Icon: FiUser, label: "شناسه کاربر", value: toPersianNumbers(teacher.user_id) },
    { Icon: FiHash, label: "شناسه مدرس", value: toPersianNumbers(teacher.id) },
  ];

  return (
    <article
      dir="rtl"
      className="group overflow-hidden rounded-[28px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.05)] ring-1 ring-[#34c759]/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-sky-100">
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#34c759]/15 px-3.5 py-2 text-xs font-semibold text-[#248a3d] backdrop-blur-xl">
          <FiCheckCircle size={14} />
          مدرس فعال
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
