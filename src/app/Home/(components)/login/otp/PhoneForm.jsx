"use client";

import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useForm } from "react-hook-form";

export default function PhoneForm({ setIsSent, setPhone }) {
  const { mutate } = useMutationData("auth/send-otp", "post", "otp-login");
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        mutate(
          {
            data: data,
          },
          {
            onSuccess: () => {
              setIsSent(true);
              setPhone(data.phone_number);
            },
          },
        );
      })}
      className="space-y-6"
    >
      <Input
        label="شماره همراه"
        placeholder="09xxxxxxxxx"
        register={register}
        registerName="phone_number"
        className="input"
      />

      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700 py-3 rounded-xl w-full font-bold text-white transition"
      >
        ارسال کد
      </button>
    </form>
  );
}
