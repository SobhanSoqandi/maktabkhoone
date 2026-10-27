"use client";

import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMenu } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import useMutationData from "@/app/(hooks)/useMutationData";

export const gridClass =
  "grid grid-cols-[72px_1fr_130px_130px_90px] items-center gap-2 px-4";

export function ChapterRow({ chapter, index, basePath, onDelete }) {
  const queryClient = useQueryClient();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: chapter.id });

  const { mutate: delete_chapter, isPending: deleting } = useMutationData(
    `/section/id?section_id=${chapter.id}`,
    "delete",
    "delete_chapter",
    "فصل با موفقیت حذف شد ",
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: isDragging ? "relative" : undefined,
    zIndex: isDragging ? 10 : undefined,
  };

  function handleDelete() {
    // console.log(!confirm("این فصل حذف شود؟"));
    // if (!confirm("این فصل حذف شود؟")) return;

    delete_chapter(
      {},
      {
        onSuccess: () => {
          onDelete(chapter.id);
          queryClient.invalidateQueries({ queryKey: ["get_chapters"] });
        },
      },
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${gridClass} border border-slate-200 bg-slate-50 py-5 text-sm text-slate-700 ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span>{(index + 1).toLocaleString("fa-IR")}</span>
        <button
          type="button"
          aria-label="جابجایی فصل"
          className="text-slate-500 touch-none cursor-grab"
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
        onClick={handleDelete}
        disabled={deleting}
        className="bg-teal-600 hover:bg-teal-500 disabled:opacity-50 px-5 py-2 rounded w-fit text-white"
      >
        {deleting ? "..." : "حذف"}
      </button>
    </div>
  );
}
