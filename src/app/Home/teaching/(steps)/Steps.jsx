export default function Steps({ title, subtitle, items }) {
  return (
    <section className="bg-blue-50 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-black leading-relaxed text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-8 text-slate-500">{subtitle}</p>
        </div>
        <div className="relative">
          <div className="absolute inset-x-[17%] top-7 hidden h-px bg-blue-200 md:block" />
          <ol className="relative grid gap-12 md:grid-cols-3">
            {items.map(({ id, step, title, description }) => (
              <li key={id} className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-xl font-black text-white ring-8 ring-blue-50">{step}</span>
                <h3 className="mt-6 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-8 text-slate-500">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
