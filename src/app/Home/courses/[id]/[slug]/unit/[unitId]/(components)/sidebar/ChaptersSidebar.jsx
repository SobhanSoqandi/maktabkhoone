"use client";

import { useState } from "react";
import ChapterAccordionItem from "./ChapterAccordionItem";

export default function ChaptersSidebar({
  courseId,
  slug,
  chapters,
  activeLessonId,
}) {
  const initialOpenChapter = chapters.find((chapter) =>
    chapter.lessons.some(
      (lesson) => String(lesson.id) === String(activeLessonId)
    )
  );

  console.log("sidbear chapters :" , chapters );
  

  const [openChapterId, setOpenChapterId] = useState(initialOpenChapter?.id);

  return (
    <aside className="border-r border-gray-100 overflow-y-auto max-h-screen">
      {
        chapters.length <= 0 ? " سر فصلی وجود ندارد " : ""
      }
      {chapters.map((chapter) => (
        <ChapterAccordionItem
          key={chapter.id}
          courseId={courseId}
          slug={slug}
          chapter={chapter}
          isOpen={openChapterId === chapter.id}
          activeLessonId={activeLessonId}
          onToggle={() =>
            setOpenChapterId((prev) => (prev === chapter.id ? null : chapter.id))
          }
        />
      ))}
    </aside>
  );
}
