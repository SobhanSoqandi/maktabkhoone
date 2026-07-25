import Link from "next/link";

export default function CategoriesCard({ categories }) {
  return (
    <section className="mx-auto px-6 py-10 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="pr-3 border-teal-500 border-r-4 font-bold text-2xl">
          دسته‌بندی‌های منتخب
        </h2>
      </div>

      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/categories/${item.slug}`}
            className="group flex flex-col justify-center items-center bg-white hover:shadow-xl p-5 border border-gray-200 hover:border-teal-500 rounded-2xl transition-all hover:-translate-y-2 duration-300"
          >
            <div className="flex justify-center items-center rounded-2xl w-20 h-20 text-4xl group-hover:scale-120 transition-all duration-300">
              <span>📚</span>
            </div>

            <h3 className="text-gray-600 group-hover:text-teal-600 text-sm text-center transition-colors">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
