"use client";

import { FaGift } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import Paymentselector from "./Paymentselector";

export default function CartSummary({ courses }) {
    const totalPrice = courses.reduce(
        (sum, item) => sum + item.old_price,
        0
    );

    const totalDiscount = courses.reduce(
        (sum, item) => sum + item.discount,
        0
    );

    const payablePrice = courses.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div
            className="
        rounded-3xl
        border border-gray-200
        bg-white
        p-5
      "
        >

            <div className="flex gap-2 text-2xl mb-7" >
                <TbInvoice />
                <h1 className="text-xl font-black">
                    صورت حساب
                </h1>
            </div>

            <div className="space-y-6">

                {/* مبلغ کل */}

                <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                        مبلغ کل
                    </span>

                    <span className="font-bold">
                        {totalPrice.toLocaleString("fa-IR")} تومان
                    </span>

                </div>

                {/* تخفیف */}

                <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                        تخفیف
                    </span>

                    <span className="font-bold text-teal-600">
                        {totalDiscount.toLocaleString("fa-IR")} تومان
                    </span>

                </div>

                <div className="relative flex items-center w-full max-w-md">
                    <FaGift className="absolute right-3 text-gray-400 z-10" />

                    <input
                        type="text"
                        className="w-full pr-10 pl-20 input"
                        placeholder="کد تخفیف را وارد کنید"
                    />

                    <button className="absolute left-1 btn btn-success">
                        اعمال
                    </button>
                </div>

                <hr className="border-gray-200" />

                <Paymentselector />


                <div className="flex items-center justify-between">

                    <span className="text-lg">
                        مبلغ  قابل پرداخت
                    </span>

                    <span className="text-xl ">
                        {payablePrice.toLocaleString("fa-IR")} تومان
                    </span>

                </div>

            </div>

            <button
                className="btn btn-success p-4 mt-8 w-full"
            >
                ادامه فرایند خرید
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-gray-500">
                با ادامه فرایند خرید، قوانین و مقررات مکتب‌خونه را می‌پذیرم.
            </p>
        </div>
    );
}