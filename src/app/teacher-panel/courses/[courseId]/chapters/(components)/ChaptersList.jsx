"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FiPlus } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import useMutationData from "@/app/(hooks)/useMutationData";
import { ChapterRow, gridClass } from "./ChapterRow";

const sortByOrder = (list) =>
  [...(list ?? [])].sort((a, b) => a.order_index - b.order_index);

export function ChaptersList({ initialChapters }) {
  const basePath = usePathname();
  const client = useQueryClient();

  const [chapters, setChapters] = useState(() => sortByOrder(initialChapters));
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChapters(sortByOrder(initialChapters));
    setChanged(false);
  }, [initialChapters]);

  const { mutate: update_index, isPending: saving } = useMutationData(
    "section/update_list_order",
    "post",
    "update_sections_order",
    "با موفقیت تغییر کرد ",
    {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["get_chapters"] });
      },
    },
  );

  function handleDragEnd({ active, over }) {
    if (!over || active.id === over.id) return;

    const from = chapters.findIndex((c) => c.id === active.id);
    const to = chapters.findIndex((c) => c.id === over.id);
    if (from === -1 || to === -1) return;

    const reordered = arrayMove(chapters, from, to).map((chapter, index) => ({
      ...chapter,
      order_index: index,
    }));

    setChapters(reordered);
    setChanged(true);
  }

  function handleSave() {
    const payload = chapters.map((chapter) => ({
      id: chapter.id,
      order_index: chapter.order_index,
    }));

    update_index({ data: payload }, { onSuccess: () => setChanged(false) });
  }

  return (
    <div className="flex lg:flex-row flex-col lg:items-start gap-8">
      <section className="flex-1 min-w-0">
        <div
          className={`${gridClass} bg-slate-600 py-3 text-sm font-bold text-white`}
        >
          <span>ردیف</span>
          <span>عنوان</span>
          <span>ویرایش جزئیات</span>
          <span>ویرایش جلسات</span>
          <span>حذف</span>
        </div>

        <DndContext
          id="chapters-dnd"
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
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
              />
            ))}
          </SortableContext>
        </DndContext>

        {chapters.length === 0 && (
          <p className="py-10 text-slate-500 text-sm text-center">
            هنوز فصلی اضافه نشده است.
          </p>
        )}

        <p className="mt-8 text-slate-700 text-sm">
          با گرفتن و کشیدن فصل‌ها می‌توانید ترتیب آن‌ها را تغییر دهید.
        </p>
      </section>

      <aside className="flex flex-col lg:justify-between gap-4 w-full lg:w-64 lg:min-h-[400px]">
        <Link
          href={`${basePath}/edit`}
          className="flex justify-between items-center hover:bg-slate-50 px-4 py-3 border border-slate-400 rounded text-slate-700"
        >
          <span>افزودن فصل</span>
          <FiPlus size={18} />
        </Link>

        <button
          type="button"
          onClick={handleSave}
          disabled={!changed || saving}
          className="bg-slate-600 hover:bg-slate-500 disabled:opacity-50 px-4 py-4 rounded text-white text-lg"
        >
          {saving ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>
      </aside>
    </div>
  );
}
