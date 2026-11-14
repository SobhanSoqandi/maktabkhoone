export default function HeaderStatsCard({ icon: Icon, label, value, unit }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
        <Icon />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-xl font-bold text-gray-900 ">
          {value} {unit && <span className="text-xs font-normal text-gray-500">{unit}</span>}
        </p>
      </div>
    </div>
  );
}
