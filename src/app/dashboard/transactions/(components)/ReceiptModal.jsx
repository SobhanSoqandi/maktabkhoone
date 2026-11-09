
"use client";

import { toPersianDate } from "@/app/Utils/date";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import {
  FiCheckCircle,
  FiXCircle,
  FiFileText,
  FiPrinter,
} from "react-icons/fi";

export default function ReceiptModal({ transaction }) {
  const isSuccess = transaction.status === "success";
  const paymentDate = transaction.created_at
    ? new Date(transaction.created_at)
    : null;

  const formattedDate = paymentDate
    ? toPersianDate(transaction.created_at)
    : "-";

  const formattedTime = paymentDate
    ? toPersianNumbers(
        paymentDate.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    : "-";

  const price = Number(transaction.amount || 0);

  return (
    <div className="max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white">
      <div className="flex flex-col items-center border-b border-dashed border-slate-200 bg-slate-50 px-5 py-4">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl ${
            isSuccess
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isSuccess ? (
            <FiCheckCircle className="text-2xl" />
          ) : (
            <FiXCircle className="text-2xl" />
          )}
        </div>

        <h2 className="mt-2 text-lg font-black text-slate-900">
          رسید تراکنش
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          جزئیات پرداخت
        </p>

        <div
          className={`mt-2 rounded-full px-3 py-1 text-xs font-bold ${
            isSuccess
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isSuccess ? "پرداخت موفق" : "پرداخت ناموفق"}
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">
          <p className="text-xs font-medium text-blue-600">
            مبلغ تراکنش
          </p>

          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="text-2xl font-black text-blue-900">
              {toPersianNumbers(price.toLocaleString("en-US"))}
            </span>

            <span className="text-xs font-bold text-blue-600">
              تومان
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="shrink-0 text-slate-500">روش پرداخت</span>
            <span className="text-left font-bold text-slate-800">
              {transaction.payment_method || "-"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="shrink-0 text-slate-500">شماره تراکنش</span>
            <span dir="ltr" className="truncate font-bold text-slate-800">
              {transaction.transaction_id || "-"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-slate-500">شماره سفارش</span>
            <span className="font-bold text-slate-800">
              {toPersianNumbers(transaction.id)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-slate-500">تاریخ پرداخت</span>
            <span className="font-bold text-slate-800">
              {formattedDate}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-slate-500">ساعت پرداخت</span>
            <span className="font-bold text-slate-800">
              {formattedTime}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-slate-500">وضعیت</span>
            <span
              className={`font-bold ${
                isSuccess ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {isSuccess ? "موفق" : "ناموفق"}
            </span>
          </div>
        </div>

        <div className="border-t border-dashed border-slate-200 pt-3">
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <FiFileText className="shrink-0 text-sm" />
            این رسید صرفاً جهت نمایش جزئیات تراکنش است.
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <FiPrinter className="text-base" />
          چاپ رسید
        </button>
      </div>
    </div>
  );
}
