export default function CtaBanner({ title, subtitle, ctaLabel, onCtaClick }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
      <p className="text-lg text-slate-600">{subtitle}</p>
      <button
        onClick={onCtaClick}
        className="rounded-lg bg-teal-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-700"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
