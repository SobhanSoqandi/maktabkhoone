"use client";

import { FaGift } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import Paymentselector from "./Paymentselector";

export default function CartSummary({ courses }) {
  // const totalPrice = courses.reduce(
  //   (sum, item) => sum + Number(item.course.price),
  //   0,
  // );

  // const totalDiscount = courses.reduce((sum, item) => sum + item.discount, 0);

  // const payablePrice = courses.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-5 border border-gray-200 rounded-3xl">
      <div className="flex gap-2 mb-7 text-2xl">
        <TbInvoice />
        <h1 className="font-black text-xl">صورت حساب</h1>
      </div>

      <div className="space-y-6">
        {/* مبلغ کل */}

        <div className="flex justify-between items-center">
          <span className="text-gray-500">مبلغ کل</span>

          <span className="font-bold">{courses.price} تومان</span>
        </div>

        {/* تخفیف */}

        <div className="flex justify-between items-center">
          <span className="text-gray-500">تخفیف</span>

          <span className="font-bold text-teal-600">
            {courses.total_discount.toLocaleString("fa-IR")} تومان
          </span>
        </div>

        <div className="relative flex items-center w-full max-w-md">
          <FaGift className="right-3 z-10 absolute text-gray-400" />

          <input
            type="text"
            className="pr-10 pl-20 w-full input"
            placeholder="کد تخفیف را وارد کنید"
          />

          <button className="left-1 absolute btn btn-success">اعمال</button>
        </div>

        <hr className="border-gray-200" />

        <Paymentselector />

        <div className="flex justify-between items-center">
          <span className="text-lg">مبلغ قابل پرداخت</span>

          <span className="text-xl">
            {courses.total_price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>

      <button className="mt-8 p-4 w-full btn btn-success">
        ادامه فرایند خرید
      </button>

      <p className="mt-5 text-gray-500 text-xs text-center leading-6">
        با ادامه فرایند خرید، قوانین و مقررات مکتب‌خونه را می‌پذیرم.
      </p>
    </div>
  );
}
