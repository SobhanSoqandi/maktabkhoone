
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white via-white to-sky-50/60 p-5 shadow-[0_8px_30px_-18px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.3)] sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-100/50 blur-3xl transition-colors duration-300 group-hover:bg-blue-100/70" />

      <div className="relative">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-100 to-blue-100 text-lg font-black text-blue-600 shadow-sm sm:h-14 sm:w-14">
              {(review.user.username || "کاربر").charAt(0)}
            </div>

            <div className="min-w-0 pt-1">
              <h3 className="break-words text-base font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
                {review.user.username || "کاربر"}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {new Date(review.created_at).toLocaleDateString("fa-IR")}
              </p>
            </div>
          </div>

          <div className="flex w-fit max-w-full items-center gap-1.5 rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-2 sm:shrink-0 sm:px-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-sm transition-colors sm:text-base ${
                    index < review.rating ? "text-amber-400" : "text-slate-200"
                  }`}
                />
              ))}
            </div>

            <span className="mr-1 border-r border-blue-200 pr-2 text-sm font-black tabular-nums text-blue-700 sm:text-base">
              {review.rating}
            </span>
          </div>
        </div>

        <div className="mb-4 h-px bg-gradient-to-l from-blue-100 via-sky-100 to-transparent" />

        <p className="break-words text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
          {review.comment}
        </p>
      </div>
    </article>
  );
}
