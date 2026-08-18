const statusStyles = {
  "in-progress": "bg-rose-50 text-rose-700",
  published: "bg-emerald-50 text-emerald-700",
  draft: "bg-slate-100 text-slate-600",
};

const statusLabels = {
  "in-progress": "در حال تکمیل",
  published: "منتشر شده",
  draft: "پیش‌نویس",
};

export function CourseStatusBadge({ status }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold",
        statusStyles[status],
      ].join(" ")}
    >
      {statusLabels[status]}
    </span>
  );
}
