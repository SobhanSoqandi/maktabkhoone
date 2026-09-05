import StatItem from './StatItem';

export default function StatsBar({ stats }) {
  return (
    <div className="bg-teal-600 px-8 py-12 md:px-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
}
