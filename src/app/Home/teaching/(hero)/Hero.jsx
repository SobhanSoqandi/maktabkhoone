export default function Hero({ imageSrc, title, subtitle, ctaLabel, onCtaClick }) {
  return (
    <div className="relative flex h-[420px] items-center overflow-hidden">
      <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/70 to-white" /> */}
      <div className="relative flex w-full flex-col items-end gap-6 px-8 text-right md:px-20">
        <h1 className="max-w-xl text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
        <p className="text-lg text-slate-700">{subtitle}</p>
        <button
          onClick={onCtaClick}
          className="rounded-lg bg-teal-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-700"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
