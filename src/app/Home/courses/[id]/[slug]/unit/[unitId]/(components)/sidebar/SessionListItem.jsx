import Link from "next/link";

function formatDuration(minutes) {
  if (!minutes) return "۰ دقیقه";
  return `${minutes} دقیقه`;
}

export default function SessionListItem({ courseId, slug, lesson, isActive }) {
  return (
    <Link
      href={`/Home/courses/${courseId}/${slug}/unit/${lesson.id}`}
      className={`flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${
        isActive
          ? "bg-teal-50 text-teal-700 font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <span>{lesson.title}</span>
      <span className="text-xs text-gray-400">{formatDuration(lesson.duration)}</span>
    </Link>
  );
}
