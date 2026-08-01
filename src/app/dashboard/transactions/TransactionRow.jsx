"use client";

import { HiOutlineCheckCircle, HiOutlineXMark } from "react-icons/hi2";

function TransactionRow({ transaction }) {
  const success = transaction.status === "موفق";

  return (
    <div
      className="
        group flex flex-col gap-4 rounded-2xl border border-gray-200
        bg-white p-4 shadow-sm transition
        hover:border-teal-100 hover:shadow-md
        md:flex-row md:items-center md:gap-5 sm:p-5
      "
    >
     
      <div
        className="
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl bg-gray-100 text-sm font-bold text-gray-600
          transition group-hover:bg-teal-50 group-hover:text-teal-700
        "
      >
        {transaction.id}
      </div>

      
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-bold text-gray-900">
          {transaction.title}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {transaction.transactionId}
        </p>
      </div>

     
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:flex-nowrap sm:gap-x-8">
        {/* وضعیت */}
        <div
          className={`
            flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold
            ${success ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}
          `}
        >
          {success ? (
            <HiOutlineCheckCircle className="text-base" />
          ) : (
            <HiOutlineXMark className="text-base" />
          )}
          {transaction.status}
        </div>

        {/* تاریخ */}
        <div className="min-w-[80px] text-sm text-gray-600">
          <div>{transaction.date}</div>
          <div className="mt-0.5 text-xs text-gray-400">{transaction.time}</div>
        </div>

        {/* مبلغ */}
        <div className="min-w-[100px] font-black text-gray-900">
          {transaction.price.toLocaleString("fa-IR")}
          <span className="mr-1 text-xs font-medium text-gray-500">تومان</span>
        </div>

        {/* دکمه رسید */}
        <button
          className="btn btn-primary shrink-0 w-full sm:w-auto  "
        >
          مشاهده رسید
        </button>
      </div>
    </div>
  );
}

export default TransactionRow;