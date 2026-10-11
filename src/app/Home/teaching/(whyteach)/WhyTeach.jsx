import FeatureCard from './FeatureCard';

export default function WhyTeach({ eyebrow, title, subtitle, features }) {
  return (
    <section id="why-teach" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">{eyebrow}</span>
          <h2 className="mt-5 text-3xl font-black leading-relaxed text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-8 text-slate-500">{subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => <FeatureCard key={feature.id} {...feature} />)}
        </div>
      </div>
    </section>
  );
}
