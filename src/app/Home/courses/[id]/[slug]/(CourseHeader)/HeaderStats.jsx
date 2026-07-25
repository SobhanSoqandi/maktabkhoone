import {
  HiAcademicCap,
  HiClock,
  HiLanguage,
  HiCalendarDays,
  HiDocumentText,
  HiCheckBadge,
} from "react-icons/hi2";

export default function HeaderStats({ course }) {
  const items = [
    {
      id: 1,
      icon: HiAcademicCap,
      title: "سطح دوره",
      value: course.course_level ?? "مقدماتی",
    },
    {
      id: 2,
      icon: HiClock,
      title: "مدت دوره",
      value: `${course.course_hour ?? 24} ساعت`,
    },
    {
      id: 3,
      icon: HiLanguage,
      title: "زبان",
      value: course.language ?? "فارسی",
    },
    {
      id: 4,
      icon: HiCalendarDays,
      title: "آخرین بروزرسانی",
      value: course.updated_at ?? "۱۴۰۵/۰۴/۱۲",
    },
    // {
    //   id: 5,
    //   icon: HiDocumentText,
    //   title: "فایل ضمیمه",
    //   value: `${course.files_count ?? 38} فایل`,
    // },
    {
      id: 6,
      icon: HiCheckBadge,
      title: "گواهینامه",
      value: course.certificate ? "دارد" : "ندارد",
    },
  ];

  return (
    <div className="gap-5 grid grid-cols-2 xl:grid-cols-3 mt-10">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-white hover:shadow-md p-4 border border-gray-200 hover:border-teal-500 rounded-2xl transition"
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
  );
}
