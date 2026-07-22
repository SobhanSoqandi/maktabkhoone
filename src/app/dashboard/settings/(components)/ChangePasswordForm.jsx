"use client";

import { HiOutlineShieldCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutationData(
    "auth/change-password",
    "post",
    "change-password",
  );

  const newPassword = watch("new_pass");

  function onSubmit(data) {
    mutate({
      data: {
        pre_pass: data.pre_pass,
        new_pass: data.new_pass,
      },
    });
  }

  return (
    <div className="bg-white rounded-2xl w-[500px] overflow-hidden">
      <div className="px-8 py-6 rounded-none text-teal-600">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-white/20 w-12 h-12">
            <HiOutlineShieldCheck size={28} />
          </div>

          <div>
            <h2 className="font-bold text-xl">تغییر رمز عبور</h2>

            <p className="mt-1 text-teal-950 text-sm">
              برای افزایش امنیت حساب، رمز عبور جدید انتخاب کنید.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-8">
        <Input
          label="رمز عبور فعلی"
          type="password"
          register={register}
          registerName="pre_pass"
          className="input"
        />

        <Input
          label="رمز عبور جدید"
          type="password"
          register={register}
          registerName="new_pass"
          className="input"
        />

        <Input
          label="تکرار رمز عبور جدید"
          type="password"
          register={register}
          registerName="confirm_password"
          className="input"
          validation={{
            validate: (value) =>
              value === newPassword || "رمزهای عبور با هم مطابقت ندارند",
          }}
        />

        {errors.confirm_password && (
          <p className="text-red-500 text-sm">
            {errors.confirm_password.message}
          </p>
        )}

        <div className="flex justify-end gap-3 mt-8">
          {/* <button
            type="button"
            className="hover:bg-gray-100 px-6 py-3 border border-gray-300 rounded-xl font-medium transition"
          ></button> */}

          <button
            disabled={isPending}
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 disabled:opacity-60 px-8 py-3 rounded-xl font-semibold text-white transition"
          >
            {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </div>
      </form>
    </div>
  );
}
