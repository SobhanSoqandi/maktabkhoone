export default function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-white">
      <span className="text-3xl font-extrabold md:text-4xl">{value}</span>
      <span className="text-lg">{label}</span>
    </div>
  );
}
