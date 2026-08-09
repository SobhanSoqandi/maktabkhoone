"use client";

import VideoPlayer from "./VideoPlayer";
import SessionHeader from "./SessionHeader";
import SessionTabs from "./SessionTabs";
import useLessonDetail from "@/app/(hooks)/useLessonDetail";

export default function ActiveLessonPanel({
  lessonId,
  chapterTitle,
}) {
  const {
    lesson,
    downloadUrl,
    isLoading,
    isError,
    error,
  } = useLessonDetail(lessonId);


  
  

  if (isLoading) {
    return (
      <div className="flex aspect-video items-center justify-center bg-gray-50 text-sm text-gray-400">
        در حال بارگذاری جلسه...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">
        {error?.message || "خطایی در دریافت اطلاعات رخ داده است"}
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="p-6 text-center text-gray-400">
        اطلاعات جلسه یافت نشد.
      </div>
    );
  }

  return (
    <>
      <VideoPlayer
        videoUrl={lesson.video_url}
        title={lesson.title}
      />

      <SessionHeader
        title={lesson.title}
        chapterTitle={chapterTitle}
      />

      <SessionTabs downloadUrl={downloadUrl} />
    </>
  );
}