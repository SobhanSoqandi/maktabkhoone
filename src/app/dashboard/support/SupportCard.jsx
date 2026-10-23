
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhone,
} from "react-icons/hi2";

export default function SupportCard({
  title,
  description,
  value,
  icon = "chat",
}) {
  const Icon =
    icon === "phone"
      ? HiOutlinePhone
      : HiOutlineChatBubbleLeftRight;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 sm:p-6">
      <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-blue-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4 sm:items-center sm:gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
            <Icon className="text-2xl" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              {description}
            </p>
          </div>
        </div>

        <div className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50 to-sky-50 px-5 py-3 transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-100 group-hover:to-sky-100 md:w-auto md:max-w-[45%]">
          <span className="break-all text-center text-sm font-extrabold leading-6 text-blue-700 sm:text-base">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
