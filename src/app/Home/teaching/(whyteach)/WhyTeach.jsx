import FeatureCard from './FeatureCard';

export default function WhyTeach({ title, subtitle, features }) {
  return (
    <section id="why-teach" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-black leading-relaxed text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-8 text-slate-500">{subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => <FeatureCard key={feature.id} {...feature} />)}
        </div>
      </div>
    </section>
  );
}
