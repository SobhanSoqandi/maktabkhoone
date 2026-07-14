import Link from "next/link";

export default function CategoriesCard({ categories }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="border-r-4 border-teal-500 pr-3 text-2xl font-bold">
          دسته‌بندی‌های منتخب
        </h2>
      </div>

     <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
        {categories.map((item) => (
         <Link
  key={item.id}
  href={`/categories/${item.slug}`}
  className="group flex p-5 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-teal-500 hover:shadow-xl"
>
  <div className=" flex h-20 w-20 items-center justify-center text-4xl rounded-2xl transition-all duration-300 group-hover:scale-120 ">
    <span >📚</span>
  </div>

  <h3 className="text-center text-sm text-gray-600 transition-colors group-hover:text-teal-600">
    {item.title}
  </h3>

</Link>
        ))}
      </div>
    </section>
  );
}