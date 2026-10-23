
import { FaStar } from "react-icons/fa";

export default function ReviewSummary({ response }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-blue-100/80 bg-gradient-to-br from-white via-white to-sky-50/70 p-5 shadow-[0_12px_40px_-24px_rgba(37,99,235,0.22)] sm:p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-100 to-blue-100 text-blue-600 shadow-sm">
            <FaStar className="text-xl" />
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-800 sm:text-2xl">
              دیدگاه کاربران
            </h2>
            <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
              امتیاز و میزان رضایت دانشجویان
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-[24px] border border-blue-100/80 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/80 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-blue-700 sm:text-6xl">
                  {response.summary.rate}
                </span>
                <span className="text-sm font-bold text-blue-300">
                  از ۵
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-sm sm:text-base" />
                ))}
              </div>

              <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                بر اساس امتیاز{" "}
                <span className="font-extrabold text-slate-700">
                  {response.summary.total.toLocaleString("fa-IR")}
                </span>{" "}
                دانشجو
              </p>
            </div>

          </div>
        </div>

        <div className="mt-7">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-sm font-extrabold text-slate-700">
              توزیع امتیازها
            </h3>
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
              ۵ ستاره
            </span>
          </div>

          <div className="space-y-5">
            {response.summary.rates.map((item) => (
              <div key={item.star} className="group flex items-center gap-3 sm:gap-4">
                <div className="flex w-10 shrink-0 items-center gap-1.5 text-sm font-extrabold text-slate-600">
                  <span>{item.star}</span>
                  <FaStar className="text-xs text-amber-400" />
                </div>

                <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-blue-50 ring-1 ring-inset ring-blue-100/70">
                  <div
                    className="relative h-full rounded-full bg-gradient-to-l from-blue-500 via-blue-400 to-sky-300 transition-all duration-700 ease-out group-hover:brightness-105"
                    style={{
                      width: `${item.percent}%`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent" />
                  </div>
                </div>

                <span className="w-12 shrink-0 text-left text-xs font-bold tabular-nums text-slate-500 transition-colors group-hover:text-blue-600">
                  {item.percent.toLocaleString("fa-IR")}٪
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
