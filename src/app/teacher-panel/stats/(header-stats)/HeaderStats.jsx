import { FiDollarSign, FiUsers, FiCreditCard } from "react-icons/fi";
import HeaderStatsCard from "./HeaderStatsCard";
import { payments } from "../payments";
import { toman } from "@/app/Utils/toPersianNumbers";

export default function HeaderStats() {
  const total = payments.reduce((sum, p) => sum + p.amount, 0);
  const students = new Set(payments.map((p) => p.student)).size;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <HeaderStatsCard icon={FiDollarSign} label="مجموع درآمد" value={toman(total)} unit="تومان" />
      <HeaderStatsCard icon={FiUsers} label="تعداد دانشجوها" value={toman(students)} />
      <HeaderStatsCard icon={FiCreditCard} label="تعداد تراکنش‌ها" value={toman(payments.length)} />
    </div>
  );
}
