import { fdate, toman } from "@/app/Utils/toPersianNumbers";
import { FiUser, FiBook, FiCalendar } from "react-icons/fi";

export default function PaymentCard({ payment }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 p-4">
      <div className="space-y-1.5 text-sm">
        <p className="flex items-center gap-2 font-medium text-gray-900">
          <FiUser className="text-gray-400" /> {payment.student}
        </p>
        <p className="flex items-center gap-2 text-gray-500">
          <FiBook className="text-gray-400" /> {payment.course}
        </p>
        <p className="flex items-center gap-2 text-gray-500">
          <FiCalendar className="text-gray-400" /> {fdate(payment.date)}
        </p>
      </div>
      <p className="font-bold text-emerald-600">{toman(payment.amount)} تومان</p>
    </div>
  );
}
