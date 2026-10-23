
import {
  HiOutlinePlayCircle,
  HiOutlinePencilSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentList,
  HiOutlineCalendarDays,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function Content() {
  const includes = [
    // {
    //   id: 1,
    //   icon: <HiOutlinePlayCircle />,
    //   title: "17 ساعت ویدئو",
    // },
    {
      id: 2,
      icon: <HiOutlinePencilSquare />,
      title: " تمرین و پروژه",
    },
    // {
    //   id: 3,
    //   icon: <HiOutlineChatBubbleLeftRight />,
    //   title: "دسترسی به تالار گفتگو",
    // },
    {
      id: 4,
      icon: <HiOutlineCalendarDays />,
      title: "دسترسی مادام‌العمر به محتوای دوره",
    },
    {
      id: 5,
      icon: <HiOutlineAcademicCap />,
      title: "گواهینامه مکتب‌خونه",
    },
    // {
    //   id: 6,
    //   icon: <HiOutlineClipboardDocumentList />,
    //   title: "118 سوال سنجش و یادگیری",
    // },
    {
      id: 7,
      icon: <HiOutlineCalendarDays />,
      title: "10 هفته مهلت ارسال تمرین و پروژه",
    },
    {
      id: 8,
      icon: <HiOutlineDocumentText />,
      title: "1 جلسه متنی",
    },
  ];

  return (
    <section className="group relative my-6 overflow-hidden rounded-[28px] border border-blue-100/80 bg-gradient-to-br from-white via-white to-sky-50/70 p-5 shadow-[0_12px_40px_-24px_rgba(37,99,235,0.22)] transition-shadow duration-300 hover:shadow-[0_18px_48px_-24px_rgba(37,99,235,0.3)] sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative">
        <div className="mb-7 flex items-center gap-3 sm:mb-9">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-100 to-blue-100 text-blue-600 shadow-sm">
            <HiOutlineClipboardDocumentList className="text-2xl" />
          </div>

          <div>
            <h2 className="text-lg font-black text-slate-800 sm:text-xl">
              این دوره شامل
            </h2>
            <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
              امکانات و مزایای دوره آموزشی
            </p>
          </div>

          <div className="mr-auto hidden items-center gap-1.5 rounded-full border border-blue-100 bg-white/80 px-3 py-2 text-xs font-bold text-blue-600 sm:flex">
            <HiOutlineCheckCircle className="text-base" />
            <span>{includes.length} ویژگی</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {includes.map(({ id, icon, title }, index) => (
            <div
              key={id}
              className="group/item relative flex min-h-[84px] items-center gap-3 overflow-hidden rounded-2xl border border-blue-100/70 bg-white/80 p-3.5 shadow-[0_3px_14px_-10px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_10px_25px_-12px_rgba(37,99,235,0.24)] sm:gap-4 sm:p-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-blue-50/0 via-sky-50/0 to-blue-50/0 transition-all duration-300 group-hover/item:from-blue-50/80 group-hover/item:via-sky-50/30" />

              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] border border-blue-100 bg-gradient-to-br from-sky-50 to-blue-100/80 text-blue-600 transition-all duration-300 group-hover/item:scale-105 group-hover/item:border-blue-200 group-hover/item:from-blue-100 group-hover/item:to-sky-100 sm:h-[52px] sm:w-[52px]">
                <span className="text-[25px] transition-transform duration-300 group-hover/item:scale-110">
                  {icon}
                </span>
              </div>

              <div className="relative min-w-0 flex-1">
                <span className="block text-sm font-bold leading-7 text-slate-700 transition-colors duration-300 group-hover/item:text-blue-700 sm:text-[14px]">
                  {title}
                </span>
              </div>

              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-400 transition-all duration-300 group-hover/item:bg-blue-100 group-hover/item:text-blue-600">
                <HiOutlineCheckCircle className="text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
