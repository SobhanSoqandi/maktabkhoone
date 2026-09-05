export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="text-slate-900 text-6xl">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="max-w-xs text-slate-600">{description}</p>
    </div>
  );
}
