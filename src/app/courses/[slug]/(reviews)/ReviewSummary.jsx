import { FaStar } from "react-icons/fa";

export default function ReviewSummary({ reviews }) {
  return (
    <div className="flex flex-col">

      <h2 className="text-2xl font-black">
        دیدگاه کاربران
      </h2>

      <span className="mt-6 text-4xl sm:text-5xl font-black leading-none">
        {reviews.rate}
      </span>

      <p className="mt-3 text-gray-500">
        بر اساس امتیاز {reviews.students.toLocaleString("fa-IR")} دانشجو
      </p>

      <div className="mt-10 space-y-5">

        {reviews.rates.map((item) => (
          <div
            key={item.star}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-1 text-amber-500 font-bold w-8">

              <span>{item.star}</span>

              <FaStar />

            </div>

            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">

              <div
                className="h-full rounded-full bg-teal-500"
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