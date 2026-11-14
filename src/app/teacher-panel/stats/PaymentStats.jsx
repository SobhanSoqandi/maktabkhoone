import HeaderStats from "./(header-stats)/HeaderStats";
import ChartStats from "./(chart-stats)/ChartStats";
import PaymentList from "./(payment-stats-list)/PaymentList";

export default function PaymentStats() {
  return (
    <div className="space-y-6" dir="rtl">
      <HeaderStats />
      <ChartStats />
      <PaymentList />
    </div>
  );
}
