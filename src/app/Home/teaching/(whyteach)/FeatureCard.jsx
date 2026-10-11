export default function FeatureCard({ icon: Icon, title, description, number }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 text-right shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8">
      <span className="absolute left-6 top-5 text-5xl font-black tracking-tight text-slate-100 transition group-hover:text-cyan-50">{number}</span>
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-2xl text-cyan-700 transition group-hover:bg-cyan-500 group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mt-7 text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-3 leading-8 text-slate-500">{description}</p>
      <div className="mt-7 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />
    </article>
  );
}
