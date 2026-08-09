import SessionListItem from "./SessionListItem";

function formatDuration(totalMinutes) {
  if (!totalMinutes) return "۰ دقیقه";

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours} ساعت و ${minutes} دقیقه`;
  }

  return `${minutes} دقیقه`;
}

export default function ChapterAccordionItem({
  courseId,
  slug,
  chapter,
  isOpen,
  activeLessonId,
  onToggle,
}) {
  const lessonsCount = chapter.lessons.length;
  const totalDuration = chapter.lessons.reduce(
    (sum, lesson) => sum + (lesson.duration || 0),
    0
  );

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-right"
      >
        <div>
          <p className="text-sm font-medium text-gray-900">{chapter.title}</p>
          <p className="text-xs text-gray-400 mt-1">
            {lessonsCount} جلسه • {formatDuration(totalDuration)}
          </p>
        </div>

        <i
          className={`ti ti-chevron-down shrink-0 mt-1 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="pb-2">
          {chapter.lessons.map((lesson) => (
            <SessionListItem
              key={lesson.id}
              courseId={courseId}
              slug={slug}
              lesson={lesson}
              isActive={String(lesson.id) === String(activeLessonId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
