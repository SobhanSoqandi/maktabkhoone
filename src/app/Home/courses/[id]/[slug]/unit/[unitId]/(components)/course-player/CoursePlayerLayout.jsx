import ActiveLessonPanel from "../player/ActiveLessonPanel";
import ChaptersSidebar from "../sidebar/ChaptersSidebar";

function findChapterTitle(chapters = [], lessonId) {
  const chapter = chapters.find((chapter) =>
    chapter.lessons.some((lesson) => String(lesson.id) === String(lessonId)),
  );

  return chapter?.title ?? "";
}

export default function CoursePlayerLayout({
  courseId,
  slug,
  chapters = [],
  activeUnitId,
}) {
  const chapterTitle = findChapterTitle(chapters, activeUnitId);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="flex gap-6 mx-auto max-w-[1400px]">
        <main className="flex-1">
          <div className="bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden">
            <div className="px-6 py-5 border-b">
              <span className="text-gray-500 text-sm">در حال مشاهده</span>

              <h1 className="mt-1 font-bold text-gray-800 text-xl">
                {chapterTitle || "یک جلسه را انتخاب کنید"}
              </h1>
            </div>

            <div className="p-5">
              <ActiveLessonPanel
                lessonId={activeUnitId}
                chapterTitle={chapterTitle}
              />
            </div>
          </div>
        </main>

        {/* Chapters Section - Left */}
        <aside className="w-[350px] shrink-0">
          <div className="top-6 sticky bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden">
            <div className="px-6 py-5 border-b">
              <h2 className="font-bold text-gray-800 text-lg">
                سرفصل‌های دوره
              </h2>

              <p className="mt-1 text-gray-500 text-sm">
                {chapters.length} فصل آموزشی
              </p>
            </div>

            <div className="p-3 max-h-[calc(100vh-180px)] overflow-y-auto">
              <ChaptersSidebar
                courseId={courseId}
                slug={slug}
                chapters={chapters}
                activeLessonId={activeUnitId}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
