"use client";

import { toPersianDate } from "@/app/Utils/date";
import { HiOutlineCheckCircle, HiOutlineXMark } from "react-icons/hi2";

function TransactionRow({ transaction }) {
  return (
    <div className="group flex md:flex-row flex-col md:items-center gap-7 md:gap-5 bg-white shadow-sm hover:shadow-md p-4 sm:p-5 border border-gray-200 hover:border-teal-100 rounded-2xl transition">
      <div className="flex justify-center items-center bg-gray-100 group-hover:bg-teal-50 rounded-xl w-11 h-11 font-bold text-gray-600 group-hover:text-teal-700 text-sm transition shrink-0">
        #{transaction.id}
      </div>

      <h3 className="flex-1 font-bold text-gray-900 truncate">
        {transaction.payment_method}
      </h3>

      <p className="flex-[.5] mt-1 text-gray-500 text-xs">
        {transaction.transaction_id}
      </p>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
        <div
          className={`
            flex items-center justify-between gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold w-22
            ${transaction.status == "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}
          `}
        >
          {transaction.status == "success" ? (
            <HiOutlineCheckCircle className="text-base" />
          ) : (
            <HiOutlineXMark className="text-base" />
          )}
          {transaction.status}
        </div>

        <div className="min-w-[80px] text-gray-600 text-sm">
          <div>{toPersianDate(transaction.created_at)}</div>
          {/* <div className="mt-0.5 text-gray-400 text-xs">{transaction.time}</div> */}
        </div>

        <div className="min-w-[100px] font-black text-gray-900">
          {transaction.amount.toLocaleString("fa-IR")}
          <span className="mr-1 font-medium text-gray-500 text-xs">تومان</span>
        </div>

        <button className="flex-1 w-full sm:w-auto btn btn-primary shrink-0">
          مشاهده رسید
        </button>
      </div>
    </div>
  );
}

export default TransactionRow;
