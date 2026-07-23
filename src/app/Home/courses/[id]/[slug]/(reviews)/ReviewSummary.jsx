import { FaStar } from "react-icons/fa";

export default function ReviewSummary({ response }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-black text-2xl">دیدگاه کاربران</h2>

      <span className="mt-6 font-black text-4xl sm:text-5xl leading-none">
        {response.summary.rate}
      </span>

      <p className="mt-3 text-gray-500">
        بر اساس امتیاز {response.summary.total.toLocaleString("fa-IR")} دانشجو
      </p>

      <div className="space-y-5 mt-10">
        {response.summary.rates.map((item) => (
          <div key={item.star} className="flex items-center gap-4">
            <div className="flex items-center gap-1 w-8 font-bold text-amber-500">
              <span>{item.star}</span>

              <FaStar />
            </div>

            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-teal-500 rounded-full h-full"
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
