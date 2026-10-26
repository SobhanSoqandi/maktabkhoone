"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ConfirmDelete from "@/app/(components)/ConfirmDelete";
import useMutationData from "@/app/(hooks)/useMutationData";
import { UnitRow, gridClass } from "./UnitRow";
import { UnitsSidebar } from "./UnitsSidebar";

export function UnitsList({ initialUnits }) {
  const basePath = usePathname();
  const queryClient = useQueryClient();

  const [units, setUnits] = useState(initialUnits);
  const [changed, setChanged] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setUnits([...initialUnits].sort((a, b) => a.order_index - b.order_index));
  }, [initialUnits]);

  const { mutate: deleteUnit, isPending } = useMutationData(
    "lesson",
    "delete",
    "delete_lesson",
    "جلسه با موفقیت حذف شد",
    {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["get_units"] }),
      onSettled: () => setDeleteId(null),
    },
  );

  function handleDragEnd({ active, over }) {
    if (!over || active.id === over.id) return;

    setUnits((prev) =>
      arrayMove(
        prev,
        prev.findIndex((u) => u.id === active.id),
        prev.findIndex((u) => u.id === over.id),
      ),
    );
    setChanged(true);
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
                onDelete={setDeleteId}
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

      <UnitsSidebar
        backHref={basePath.replace(/\/[^/]+\/units$/, "")}
        addHref={`${basePath}/edit/new`}
        canSave={changed}
        onSave={handleSave}
      />

      <ConfirmDelete
        open={deleteId !== null}
        loading={isPending}
        onConfirm={() => deleteUnit({ url: `/lesson/${deleteId}` })}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
