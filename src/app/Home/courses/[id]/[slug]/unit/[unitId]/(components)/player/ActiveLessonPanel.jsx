"use client";

import { useEffect } from "react";

import VideoPlayer from "./VideoPlayer";
import SessionHeader from "./SessionHeader";
import useGet from "@/app/(hooks)/useGet";
import { base_url } from "../../../../../../../../../../data/info";

// ⚠️ این تابع رو با روش واقعی نگهداری توکن توی پروژه‌ت عوض کن
// (همونی که useGet برای ساخت هدر Authorization استفاده می‌کنه)
const getToken = () =>
  typeof window === "undefined" ? "" : localStorage.getItem("access_token") || "";

const placeholderClass =
  "flex items-center justify-center aspect-video bg-gray-50 px-4 text-center text-sm text-gray-500";

function VideoArea({ lesson }) {
  if (lesson.playlist_url) {
    return (
      <VideoPlayer
        key={lesson.id}
        playlistUrl={base_url + lesson.playlist_url}
        title={lesson.title}
        getToken={getToken}
        // watermark={user?.email}   ← ایمیل یا شماره‌ی کاربر لاگین‌شده
      />
    );
  }

  if (lesson.video_status === "processing") {
    return (
      <div role="status" className={placeholderClass}>
        ویدیو در حال آماده‌سازی است. چند دقیقه دیگر دوباره سر بزنید.
      </div>
    );
  }

  if (lesson.video_status === "failed") {
    return (
      <div role="alert" className={`${placeholderClass} text-red-500`}>
        آماده‌سازی ویدیو ناموفق بود. لطفاً با پشتیبانی تماس بگیرید.
      </div>
    );
  }

  return <div className={placeholderClass}>برای این جلسه ویدیویی ثبت نشده است.</div>;
}

export default function ActiveLessonPanel({ lessonId, chapterTitle }) {
  const {
    data: lesson,
    isLoading,
    isError,
    error,
    refetch,
  } = useGet(`lesson/${lessonId}`);

  // تا وقتی ویدیو در حال رمزنگاریه، هر ۴ ثانیه وضعیت رو دوباره بپرس
  const processing = lesson?.video_status === "processing";
  useEffect(() => {
    if (!processing || typeof refetch !== "function") return;
    const timer = setInterval(() => refetch(), 4000);
    return () => clearInterval(timer);
  }, [processing, refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-gray-50 aspect-video text-gray-400 text-sm">
        در حال بارگذاری جلسه...
      </div>
    );
  }

  if (isError) {
    const status = error?.response?.status ?? error?.status;

    if (status === 401) {
      return (
        <div className="p-6 text-red-500 text-center">
          برای دیدن این جلسه وارد حساب کاربری خود شوید.
        </div>
      );
    }
    if (status === 403) {
      return (
        <div className="p-6 text-red-500 text-center">
          برای دیدن این جلسه باید دوره را خریداری کنید.
        </div>
      );
    }
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
      <VideoArea lesson={lesson} />

      <SessionHeader title={lesson.title} chapterTitle={chapterTitle} />

      {/* <SessionTabs /> */}
    </>
  );
}