import StatItem from './StatItem';

export default function StatsBar({ stats }) {
  return (
    <section className="relative z-10 -mt-16 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 rounded-3xl border border-blue-100 bg-white px-4 py-8 shadow-2xl shadow-blue-900/10 md:grid-cols-4 md:divide-x md:divide-x-reverse md:divide-blue-100">
        {stats.map((stat) => <StatItem key={stat.id} {...stat} />)}
      </div>
    </section>
  );
}
