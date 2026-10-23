
"use client";

import Input from "@/app/(components)/Input";
import OtpTimer from "./OtpTimer";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useForm } from "react-hook-form";
import {
  HiArrowRight,
  HiCheckCircle,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

export default function OtpForm({
  phone,
  onBack,
  btn_text,
  onSuccess,
  url,
}) {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutationData(url, "post", "verify-otp");

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const body = {
          ...formData,
          phone_number: phone,
          purpose: "CHANGE_PHONE",
        };

        mutate({ data: body }, { onSuccess });
      })}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50 to-indigo-50 p-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
          <HiDevicePhoneMobile className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-extrabold text-gray-900">
            تأیید شماره موبایل
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            کد تأیید ارسال‌شده به
          </p>
          <p dir="ltr" className="mt-1 text-sm font-bold text-blue-700 text-right">
            {phone}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-700">
          کد تأیید
        </label>

        <div dir="ltr">
          <Input
            label=""
            placeholder="------"
            register={register}
            registerName="otp_code"
            className="input w-full text-center text-xl font-extrabold tracking-[0.6em] placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 px-3 py-2.5">
        <OtpTimer />
      </div>

      <div className="space-y-2.5 pt-1">
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          <HiCheckCircle className="h-5 w-5" />
          {btn_text}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <HiArrowRight className="h-4 w-4" />
          تغییر شماره موبایل
        </button>
      </div>
    </form>
  );
}
