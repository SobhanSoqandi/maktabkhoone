
"use client"

import { FiBell, FiCheck, FiX } from "react-icons/fi"
import NotificationItem from "@/app/(components)/(notif)/NotificationItem"

export default function NotificationPanel({
  notifications,
  unreadCount,
  onRead,
  onReadAll,
  onClose,
}) {
  return (
    <section
      role="dialog"
      aria-label="مرکز اعلان‌ها"
      className="absolute left-0 top-full z-50 mt-3 w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800">اعلان‌ها</h2>

          <p className="mt-1 text-xs text-slate-500">
            {unreadCount > 0
              ? `${unreadCount} اعلان خوانده‌نشده`
              : "همه اعلان‌ها خوانده شده‌اند"}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={onReadAll}
              aria-label="خواندن همه اعلان‌ها"
              title="خواندن همه"
              className="rounded-xl p-2 text-blue-600 transition hover:bg-blue-50"
            >
              <FiCheck className="h-4 w-4" />
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن اعلان‌ها"
            className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-h-[360px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-10 text-center">
            <FiBell className="mx-auto h-8 w-8 text-slate-300" />

            <p className="mt-3 text-sm font-medium text-slate-600">
              اعلانی وجود ندارد
            </p>

            <p className="mt-1 text-xs text-slate-400">
              اعلان‌های جدید در این بخش نمایش داده می‌شوند.
            </p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onRead={onRead}
            />
          ))
        )}
      </div>

      <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-3">
        <p className="text-center text-[11px] text-slate-400">
          اعلان‌های این بخش آزمایشی هستند.
        </p>
      </div>
    </section>
  )
}
