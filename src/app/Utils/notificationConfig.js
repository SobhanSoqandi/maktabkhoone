
import {
  FiCheckCircle,
  FiInfo,
  FiAlertCircle,
} from "react-icons/fi"

export const notificationConfig = {
  success: {
    icon: FiCheckCircle,
    iconColor: "text-emerald-600",
    iconBackground: "bg-emerald-50",
  },
  info: {
    icon: FiInfo,
    iconColor: "text-blue-600",
    iconBackground: "bg-blue-50",
  },
  warning: {
    icon: FiAlertCircle,
    iconColor: "text-amber-600",
    iconBackground: "bg-amber-50",
  },
}

export const defaultNotificationConfig = notificationConfig.info
