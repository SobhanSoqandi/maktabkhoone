export default function ChapterSummary({
  chapterCount,
  lessonCount,
  totalMinutes,
}) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <div className="mb-10">
      <h2 className="mb-5 text-3xl font-black">
        سرفصل‌های دوره
      </h2>

      <div className="flex items-center gap-3 text-gray-500">
        <span>{chapterCount} فصل</span>

        <span>•</span>

        <span>{lessonCount} جلسه</span>

        <span>•</span>

        <span>
          {hours} ساعت
          {minutes > 0 && ` و ${minutes} دقیقه`}
        </span>
      </div>
    </div>
  );
}