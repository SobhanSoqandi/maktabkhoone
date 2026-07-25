import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <article className="bg-white shadow-sm hover:shadow-lg p-8 border border-gray-200 rounded-2xl transition-all hover:-translate-y-1 duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-bold text-gray-900 text-xl">
            {review.user.username || "کاربر"}
          </h3>

          <p className="mt-2 text-gray-500 text-base">
            {new Date(review.created_at).toLocaleDateString("fa-IR")}
          </p>
        </div>

        <div className="flex items-center gap-1 bg-amber-50 px-4 py-2 rounded-full">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-lg ${
                index < review.rating ? "text-amber-400" : "text-gray-300"
              }`}
            />
          ))}

          <span className="mr-2 font-bold text-amber-600 text-lg">
            {review.rating}
          </span>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-9">{review.comment}</p>
    </article>
  );
}
