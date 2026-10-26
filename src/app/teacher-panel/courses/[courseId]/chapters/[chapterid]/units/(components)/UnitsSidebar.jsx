import Link from "next/link";
import { FiArrowRight, FiPlus } from "react-icons/fi";

export function UnitsSidebar({ backHref, addHref, canSave, onSave }) {
  return (
    <aside className="flex w-full flex-col gap-4 lg:min-h-[400px] lg:w-64 lg:justify-between">
      <div className="flex flex-col gap-4">
        <Link
          href={backHref}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <FiArrowRight size={16} />
          <span>بازگشت به لیست فصل‌ها</span>
        </Link>

        <Link
          href={addHref}
          className="flex items-center justify-between rounded border border-slate-400 px-4 py-3 text-slate-700 hover:bg-slate-50"
        >
          <span>افزودن جلسه‌ی ویدئویی</span>
          <FiPlus size={18} />
        </Link>
      </div>

      <button
        type="button"
        onClick={onSave}
        disabled={!canSave}
        className="rounded bg-slate-600 px-4 py-4 text-lg text-white hover:bg-slate-500 disabled:opacity-50"
      >
        ذخیره تغییرات
      </button>
    </aside>
  );
}
