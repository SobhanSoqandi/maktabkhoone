import Link from "next/link";
import { FaCode, FaRobot, FaBrain } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


const ICONS = {
  programing: [FaCode, "#2563EB"],
  python: [SiPython, "#3776AB"],
  "c-sharp": [TbBrandCSharp, "#512BD4"],
  ai: [FaRobot, "#7C3AED"],
  machine_learning: [FaBrain, "#EC4899"],
};

export default function CategoriesCard({ categories }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center gap-3">
        <div className="h-7 w-1.5 rounded-full bg-blue-500 my-8" />

        <h2 className="text-2xl font-bold text-gray-900">
           دسته بندی های منتخب
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
        {categories.map((item) => {
          const [Icon, color] = ICONS[item.slug] || [];

          return (
            <Link
              key={item.id}
              href={`/categories/${item.slug}`}
              className="group flex p-5 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className=" flex h-20 w-20 items-center justify-center text-4xl rounded-2xl transition-all duration-300 group-hover:scale-120 ">
                {Icon ? <Icon style={{ color }} /> : <span>📚</span>}
              </div>

              <h3 className="text-center text-sm text-gray-600 transition-colors group-hover:text-blue-600">
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}