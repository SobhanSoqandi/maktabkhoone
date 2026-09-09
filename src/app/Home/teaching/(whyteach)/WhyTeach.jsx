import FeatureCard from './FeatureCard';

export default function WhyTeach({ title, features }) {
  return (
    <div className="px-8 py-20 text-center md:px-20">
      <h2 className="mb-16 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
}
