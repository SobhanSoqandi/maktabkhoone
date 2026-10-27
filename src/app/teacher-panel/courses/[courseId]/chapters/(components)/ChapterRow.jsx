"use client";

import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMenu } from "react-icons/fi";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useQueryClient } from "@tanstack/react-query";

export const gridClass =
  "grid grid-cols-[72px_1fr_130px_130px_90px] items-center gap-2 px-4";

export function ChapterRow({ chapter, index, basePath, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: chapter.id });

  const queryClient = useQueryClient();

  const { mutate: delete_chapter, isPending: deleting } = useMutationData(
    `section/id?section_id=${chapter.id}`,
    "delete",
    "delete_chapter",
    "فصل با موفقیت حذف شد ",
  );
  const style = { transform: CSS.Transform.toString(transform), transition };
  function handleDelete(id) {
    console.log(12);
    if (!confirm("این فصل حذف شود؟")) return;
    delete_chapter(
      {},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["get_chapters"] });
        },
      },
    );
    // setChapters((prev) => prev.filter((c) => c.id !== id));
  }

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
        onClick={() => handleDelete()}
        className="btn btn-success"
      >
        حذف
      </button>
    </div>
  );
}
