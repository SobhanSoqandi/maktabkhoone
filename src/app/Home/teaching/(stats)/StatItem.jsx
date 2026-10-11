export default function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3 text-center text-white">
      <span className="text-3xl font-black tracking-tight text-cyan-300 sm:text-4xl">{value}</span>
      <span className="text-sm font-medium text-slate-300 sm:text-base">{label}</span>
    </div>
  );
}
