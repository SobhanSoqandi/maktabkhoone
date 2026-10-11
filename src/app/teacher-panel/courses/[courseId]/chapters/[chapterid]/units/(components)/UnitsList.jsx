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
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { UnitRow, gridClass } from "./UnitRow";

const addButtonClass =
  "flex items-center justify-between rounded border border-slate-400 px-4 py-3 text-slate-700 hover:bg-slate-50";

export function UnitsList({ initialUnits }) {
  // …/chapters/2/units
  const basePath = usePathname();
  // …/chapters
  const chaptersPath = basePath.replace(/\/[^/]+\/units$/, "");

  const [units, setUnits] = useState(initialUnits);
  const [changed, setChanged] = useState(false);

  function handleDragEnd({ active, over }) {
    if (!over || active.id === over.id) return;

    const from = units.findIndex((u) => u.id === active.id);
    const to = units.findIndex((u) => u.id === over.id);
    setUnits(arrayMove(units, from, to));
    setChanged(true);
  }

  function handleDelete(id) {
    if (!confirm("این جلسه حذف شود؟")) return;
    setUnits(units.filter((u) => u.id !== id));
  }

  function handleSave() {
    console.log(units.map((u) => u.id));
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
          <span>ویرایش جلسه</span>
          <span>حذف</span>
        </div>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={units.map((u) => u.id)}
            strategy={verticalListSortingStrategy}
          >
            {units.map((unit, index) => (
              <UnitRow
                key={unit.id}
                unit={unit}
                index={index}
                basePath={basePath}
                onDelete={handleDelete}
              />
            ))}
          </SortableContext>
        </DndContext>

        {units.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-500">
            هنوز جلسه‌ای اضافه نشده است.
          </p>
        )}

        <p className="mt-8 text-sm text-slate-700">
          با گرفتن و کشیدن جلسه‌ها می‌توانید ترتیب آن‌ها را تغییر دهید.
        </p>
      </section>

      <aside className="flex w-full flex-col gap-4 lg:min-h-[400px] lg:w-64 lg:justify-between">
        <div className="flex flex-col gap-4">
          <Link
            href={chaptersPath}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <FiArrowRight size={16} />
            <span>بازگشت به لیست فصل‌ها</span>
          </Link>

          <Link href={`${basePath}/edit/lecture`} className={addButtonClass}>
            <span>جلسه‌ی ویدئویی</span>
            <FiPlus size={18} />
          </Link>

          <Link href={`${basePath}/edit/text`} className={addButtonClass}>
            <span>جلسه متنی</span>
            <FiPlus size={18} />
          </Link>
        </div>

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
