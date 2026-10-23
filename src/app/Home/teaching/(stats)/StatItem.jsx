export default function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3 text-center">
      <span className="text-3xl font-black text-blue-700 sm:text-4xl">{value}</span>
      <span className="text-sm font-medium text-slate-500 sm:text-base">{label}</span>
    </div>
  );
}
