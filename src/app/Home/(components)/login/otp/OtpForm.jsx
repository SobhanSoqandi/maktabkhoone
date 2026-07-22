"use client";

import Input from "@/app/(components)/Input";
import OtpTimer from "./OtpTimer";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useForm } from "react-hook-form";
import { useModal } from "@/app/(components)/modal";

export default function OtpForm({ phone, onBack, btn_text, onSuccess, url }) {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutationData(url, "post", "verify-otp");
  const { setActiveModal } = useModal();
  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const body = {
          ...formData,
          phone_number: phone,
          phone_number: phone,
          purpose: "CHANGE_PHONE",
        };

        mutate(
          {
            data: body,
          },
          {
            onSuccess,
          },
        );
      })}
      className="space-y-6"
    >
      <p className="text-gray-500 text-sm text-center">
        کد تایید به شماره
        <br />
        <span className="font-bold">{phone}</span>
        <br />
        ارسال شد.
      </p>

      <Input
        label="کد تایید"
        placeholder="123456"
        register={register}
        registerName="otp_code"
        className="text-center tracking-[8px] input"
      />

      <OtpTimer />

      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700 py-3 rounded-xl w-full text-white"
      >
        {btn_text}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="hover:bg-gray-100 py-3 border rounded-xl w-full"
      >
        تغییر شماره
      </button>
    </form>
  );
}
