import Link from "next/link";
import { LuShoppingBag } from "react-icons/lu";

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-sm px-6 border border-gray-100 rounded-2xl min-h-[400px] text-center">
      <div className="flex justify-center items-center bg-gray-100 mb-5 rounded-full w-20 h-20">
        <LuShoppingBag className="w-10 h-10 text-gray-400" />
      </div>

      <h2 className="mb-2 font-bold text-gray-800 text-xl">
        سبد خرید شما خالی است
      </h2>

      <p className="mb-6 max-w-md text-gray-500 text-sm leading-6">
        هنوز هیچ دوره‌ای به سبد خرید اضافه نکرده‌اید. دوره موردنظر خود را پیدا
        کنید و به سبد خرید اضافه کنید.
      </p>

      <Link
        href="/Home/courses"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium text-white text-sm transition"
      >
        مشاهده دوره‌ها
      </Link>
    </div>
  );
}
