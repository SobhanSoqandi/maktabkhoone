import StatItem from './StatItem';

export default function StatsBar({ stats }) {
  return (
    <section className="relative overflow-hidden bg-[#08243a] px-5 py-14 sm:px-8 lg:px-12">
      <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-x-reverse md:divide-white/10">
        {stats.map((stat) => <StatItem key={stat.id} {...stat} />)}
      </div>
    </section>
  );
}
