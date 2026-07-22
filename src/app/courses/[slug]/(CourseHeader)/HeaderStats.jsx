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
    {
      id: 5,
      icon: HiDocumentText,
      title: "فایل ضمیمه",
      value: `${course.files_count ?? 38} فایل`,
    },
    {
      id: 6,
      icon: HiCheckBadge,
      title: "گواهینامه",
      value: course.certificate ? "دارد" : "ندارد",
    },
  ];

  return (
    <div className="mt-10 grid gap-5 grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-teal-500 hover:shadow-md"
          >
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-teal-50">
              <Icon className="text-2xl sm:text-3xl text-teal-600" />
            </div>

            <div>
              <p className="mb-1 text-xs sm:text-sm text-gray-500">
                {item.title}
              </p>

              <h3 className="font-bold text-sm sm:text-base text-gray-900">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}