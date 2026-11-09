

import { useMemo, useState } from "react"
import { mockNotifications } from "../admin/mockNotifications"

export default function useNotifications() {
  const [notifications, setNotifications] = useState(
    () => mockNotifications.map((notification) => ({ ...notification }))
  )

  const unreadCount = useMemo(
    () =>
      notifications.filter((notification) => !notification.isRead).length,
    [notifications]
  )

  const markAsRead = (notificationId) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    )
  }

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
  }
}
