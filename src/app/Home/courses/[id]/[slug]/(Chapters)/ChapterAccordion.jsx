"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiChevronDown } from "react-icons/hi2";

import LessonItem from "./LessonItem";

export default function ChapterAccordion({ chapters }) {
  const [openChapter, setOpenChapter] = useState(1);

  const toggleChapter = (id) => {
    setOpenChapter((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rounded-xl border border-gray-200 ">

      {chapters.map((chapter) => {
        const opened = openChapter === chapter.id;

        return (
          <div key={chapter.id}>

            <button
              onClick={() => toggleChapter(chapter.id)}
              className="flex w-full items-center justify-between px-8 py-5 transition-colors hover:bg-gray-50 "
            >
              <div className="flex items-center gap-x-4" >

                <h3 className="text-lg font-bold text-gray-900">
                  {chapter.title}
                </h3>

                <p className=" text-sm text-gray-500">
                  {chapter.lessons.length} جلسه
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-sm text-gray-500">
                  {chapter.duration}
                </span>

                <motion.div
                  animate={{
                    rotate: opened ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <HiChevronDown className="text-2xl text-gray-500" />
                </motion.div>

              </div>
            </button>

            <AnimatePresence initial={false}>
              {opened && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden border-t border-gray-100 bg-gray-50"
                >
                  {chapter.lessons.map((lesson) => (
                    <LessonItem
                      key={lesson.id}
                      lesson={lesson}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        );
      })}
    </div>
  );
}