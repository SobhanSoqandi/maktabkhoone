import PaymentCard from "./PaymentCard";
import { payments } from "../payments";

export default function PaymentList() {
  const sorted = [...payments].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-bold text-gray-900">لیست تراکنش‌ها</h2>
      <div className="space-y-3 overflow-y-auto h-[500px]">
        {sorted.map((p) => (
          <PaymentCard key={p.id} payment={p} />
        ))}
      </div>
    </div>
  );
}
