"use client";

import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMenu } from "react-icons/fi";

export const gridClass =
  "grid grid-cols-[72px_1fr_130px_130px_90px] items-center gap-2 px-4";

export function ChapterRow({ chapter, index, basePath, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: chapter.id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${gridClass} border border-slate-200 bg-slate-50 py-5 text-sm text-slate-700`}
    >
      <div className="flex items-center gap-3">
        <span>{(index + 1).toLocaleString("fa-IR")}</span>
        <button
          type="button"
          className="cursor-grab touch-none text-slate-500"
          {...attributes}
          {...listeners}
        >
          <FiMenu size={16} />
        </button>
      </div>

      <span className="truncate">{chapter.title}</span>

      <Link
        href={`${basePath}/edit?chapterId=${chapter.id}`}
        className="text-cyan-600 hover:underline"
      >
        ویرایش جزئیات
      </Link>

      <Link
        href={`${basePath}/${chapter.id}/units`}
        className="text-cyan-600 hover:underline"
      >
        ویرایش جلسات
      </Link>

      <button
        type="button"
        onClick={() => onDelete(chapter.id)}
        className="w-fit rounded bg-teal-600 px-5 py-2 text-white hover:bg-teal-500"
      >
        حذف
      </button>
    </div>
  );
}
