
"use client"

import { useState } from "react"
import { FiBell } from "react-icons/fi"
import useNotifications from "../../(hooks)/useNotifications"
import NotificationPanel from "./NotificationPanel"

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
  } = useNotifications()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={`اعلان‌ها، ${unreadCount} اعلان خوانده‌نشده`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="relative rounded-2xl bg-slate-100 p-3 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600 active:scale-95"
      >
        <FiBell className="h-5 w-5" />

        {unreadCount > 0 && (
          <>
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-100" />
          </>
        )}
      </button>

      {isOpen && (
        <NotificationPanel
          notifications={notifications}
          unreadCount={unreadCount}
          onRead={markAsRead}
          onReadAll={markAllAsRead}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
