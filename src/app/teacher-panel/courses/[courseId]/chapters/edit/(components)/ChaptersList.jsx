"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FiPlus } from "react-icons/fi";
import { ChapterRow, gridClass } from "./ChapterRow";

export function ChaptersList({ initialChapters }) {

  const basePath = usePathname();

  const [chapters, setChapters] = useState(initialChapters);
  const [changed, setChanged] = useState(false);

  function handleDragEnd({ active, over }) {
    if (!over || active.id === over.id) return;

    const from = chapters.findIndex((c) => c.id === active.id);
    const to = chapters.findIndex((c) => c.id === over.id);
    setChapters(arrayMove(chapters, from, to));
    setChanged(true);
  }

  function handleDelete(id) {
    if (!confirm("این فصل حذف شود؟")) return;
    setChapters(chapters.filter((c) => c.id !== id));
  }

  function handleSave() {
    console.log(chapters.map((c) => c.id));
    setChanged(false);
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <section className="min-w-0 flex-1">
        <div
          className={`${gridClass} bg-slate-600 py-3 text-sm font-bold text-white`}
        >
          <span>ردیف</span>
          <span>عنوان</span>
          <span>ویرایش جزئیات</span>
          <span>ویرایش جلسات</span>
          <span>حذف</span>
        </div>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={chapters.map((c) => c.id)}
            strategy={verticalListSortingStrategy}
          >
            {chapters.map((chapter, index) => (
              <ChapterRow
                key={chapter.id}
                chapter={chapter}
                index={index}
                basePath={basePath}
                onDelete={handleDelete}
              />
            ))}
          </SortableContext>
        </DndContext>

        {chapters.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-500">
            هنوز فصلی اضافه نشده است.
          </p>
        )}

        <p className="mt-8 text-sm text-slate-700">
          با گرفتن و کشیدن فصل‌ها می‌توانید ترتیب آن‌ها را تغییر دهید.
        </p>
      </section>

      <aside className="flex w-full flex-col gap-4 lg:min-h-[400px] lg:w-64 lg:justify-between">
        <Link
          href={`${basePath}/edit`}
          className="flex items-center justify-between rounded border border-slate-400 px-4 py-3 text-slate-700 hover:bg-slate-50"
        >
          <span>افزودن فصل</span>
          <FiPlus size={18} />
        </Link>

        <button
          type="button"
          onClick={handleSave}
          disabled={!changed}
          className="rounded bg-slate-600 px-4 py-4 text-lg text-white hover:bg-slate-500 disabled:opacity-50"
        >
          ذخیره تغییرات
        </button>
      </aside>
    </div>
  );
}
