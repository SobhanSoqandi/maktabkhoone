"use client";

import {
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";

import LessonItem from "./LessonItem";

export default function ChapterItem({
  chapter,
  isOpen,
  onToggle,
}) {

  

  return (
    <div className="border border-gray-200 shadow rounded-xl">

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 transition hover:bg-gray-50"
      >
        <div className="text-right">

          <h3 className="text-lg font-bold text-gray-900">
            {chapter.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {chapter.lessons.length} جلسه
          </p>

        </div>

        <div className="flex items-center gap-4">

          <span className="text-sm text-gray-500">
            {chapter.duration}
          </span>

          {isOpen ? (
            <HiChevronUp className="text-2xl text-gray-500" />
          ) : (
            <HiChevronDown className="text-2xl text-gray-500" />
          )}

        </div>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50">

          {chapter.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
            />
          ))}

        </div>
      )}

    </div>
  );
}