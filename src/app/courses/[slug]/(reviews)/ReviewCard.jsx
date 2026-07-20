import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md">

      <div className="mb-6 flex items-start justify-between">

        <div>

          <h3 className="text-base sm:text-lg font-bold text-gray-900">
            {review.user}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {review.created_at}
          </p>

        </div>

         <div className="badge bg-amber-100 px-3">

          <FaStar className="text-amber-500" />

          <span className="font-bold text-amber-600">
            {review.rate}
          </span>

        </div>

      </div>

      <p className="flex-1 text-sm sm:text-base leading-10 text-gray-700">
        {review.comment}
      </p>

    </article>
  );
}