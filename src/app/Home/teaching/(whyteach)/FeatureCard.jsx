export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 text-right transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/30">
        <Icon />
      </div>
      <h3 className="mt-7 text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-3 leading-8 text-slate-500">{description}</p>
    </article>
  );
}
