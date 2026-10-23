"use client";

import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { HiOutlineCheckCircle, HiOutlineXMark, HiOutlineDocumentText } from "react-icons/hi2";

function TransactionRow({ transaction }) {
  const isSuccess = transaction.status == "success";

  return (
    <div className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-5 md:flex-row md:items-center md:gap-6">
      <div className="flex items-center gap-4 md:flex-1">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-black text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
          {toPersianNumbers(transaction.id)}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-extrabold text-slate-900">{transaction.payment_method}</h3>
          <p dir="ltr" className="mt-1 truncate text-right text-xs text-slate-400">
            {transaction.transaction_id}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-100 pt-4 md:flex-nowrap md:gap-x-8 md:border-0 md:pt-0">
        <div
          className={`flex w-24 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
            isSuccess ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
          }`}
        >
          {isSuccess ? <HiOutlineCheckCircle className="text-base" /> : <HiOutlineXMark className="text-base" />}
          {transaction.status}
        </div>

        <div className="min-w-[80px] text-sm font-medium text-slate-500">{toPersianDate(transaction.created_at)}</div>

        <div className="min-w-[110px] font-black text-slate-900">
          {toPersianNumbers(transaction.amount)}
          <span className="mr-1 text-xs font-medium text-slate-400">تومان</span>
        </div>

        <button className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto">
          <HiOutlineDocumentText className="text-lg" />
          مشاهده رسید
        </button>
      </div>
    </div>
  );
}

export default TransactionRow;
