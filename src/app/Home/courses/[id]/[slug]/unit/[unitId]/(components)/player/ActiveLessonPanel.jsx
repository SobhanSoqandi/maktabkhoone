"use client";

import VideoPlayer from "./VideoPlayer";
import SessionHeader from "./SessionHeader";
import SessionTabs from "./SessionTabs";
import useLessonDetail from "@/app/(hooks)/useLessonDetail";
import useGet from "@/app/(hooks)/useGet";
import { base_url } from "../../../../../../../../../../data/info";

export default function ActiveLessonPanel({ lessonId, chapterTitle }) {
  const {
    data: lesson,
    isLoading,
    isError,
    error,
  } = useGet(`lesson/${lessonId}`);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-gray-50 aspect-video text-gray-400 text-sm">
        در حال بارگذاری جلسه...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500 text-center">
        {error?.message || "خطایی در دریافت اطلاعات رخ داده است"}
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="p-6 text-gray-400 text-center">
        اطلاعات جلسه یافت نشد.
      </div>
    );
  }

  return (
    <>
      <VideoPlayer
        videoUrl={base_url + lesson.video_url}
        title={lesson.title}
      />

      <SessionHeader title={lesson.title} chapterTitle={chapterTitle} />

      {/* <SessionTabs downloadUrl={downloadUrl} /> */}
    </>
  );
}
