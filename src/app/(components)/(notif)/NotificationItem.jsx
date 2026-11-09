
import { defaultNotificationConfig, notificationConfig } from "../../Utils/notificationConfig"

export default function NotificationItem({ notification, onRead }) {
  const config =
    notificationConfig[notification.type] ?? defaultNotificationConfig

  const NotificationIcon = config.icon

  return (
    <button
      type="button"
      onClick={() => onRead(notification.id)}
      aria-label={`${notification.title}، ${
        notification.isRead ? "خوانده شده" : "خوانده نشده"
      }`}
      className={`flex w-full gap-3 border-b border-slate-100 px-4 py-4 text-right transition last:border-b-0 hover:bg-slate-50 ${
        notification.isRead ? "bg-white" : "bg-blue-50/40"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.iconBackground} ${config.iconColor}`}
      >
        <NotificationIcon className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-slate-800">
            {notification.title}
          </span>

          {!notification.isRead && (
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
          )}
        </span>

        <span className="mt-1 block text-xs leading-6 text-slate-500">
          {notification.message}
        </span>

        <span className="mt-2 block text-[11px] text-slate-400">
          {notification.createdAt}
        </span>
      </span>
    </button>
  )
}
