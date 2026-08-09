import ActiveLessonPanel from "../player/ActiveLessonPanel";
import ChaptersSidebar from "../sidebar/ChaptersSidebar";

function findChapterTitle(chapters, lessonId) {
  const chapter = chapters.find((chapter) =>
    chapter.lessons.some((lesson) => String(lesson.id) === String(lessonId))
  );
  return chapter?.title ?? "";
}

export default function CoursePlayerLayout({
  courseId,
  slug,
  chapters,
  activeUnitId,
}) {



  const chapterTitle = findChapterTitle(chapters, activeUnitId);

  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-screen bg-white"
    >
      <div className="flex flex-col border-l border-gray-100">
        <ActiveLessonPanel lessonId={activeUnitId} chapterTitle={chapterTitle} />
      </div>

      <ChaptersSidebar
        courseId={courseId}
        slug={slug}
        chapters={chapters}
        activeLessonId={activeUnitId}
      />
    </div>
  );
}
