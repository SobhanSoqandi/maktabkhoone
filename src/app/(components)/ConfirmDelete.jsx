"use client";

export default function ConfirmDelete({
  open,
  title = "آیا از حذف مطمئن هستید؟",
  loading = false,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div
      onClick={onCancel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div
        role="alertdialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
      >
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded bg-red-600 py-2.5 text-white hover:bg-red-500 disabled:opacity-50"
          >
            حذف
          </button>

          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded border border-slate-300 py-2.5 text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}
