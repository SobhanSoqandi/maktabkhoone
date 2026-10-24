"use client";

import { HiOutlineShieldCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

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
    <div className="bg-white rounded-3xl w-[90vw] max-w-lg overflow-hidden">
      <div className="flex items-center gap-4 bg-blue-50/60 px-8 py-7 border-slate-100 border-b">
        <div className="place-items-center grid bg-blue-600 shadow-blue-600/30 shadow-lg rounded-2xl w-14 h-14 text-white shrink-0">
          <HiOutlineShieldCheck size={28} />
        </div>

        <div>
          <h2 className="font-extrabold text-slate-900 text-xl">
            تغییر رمز عبور
          </h2>
          <p className="mt-1 text-slate-500 text-sm leading-6">
            برای افزایش امنیت حساب، رمز عبور جدید انتخاب کنید.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-8">
        <div>
          <Input
            label="رمز عبور فعلی"
            type="password"
            register={register}
            registerName="pre_pass"
            className={inputClass}
          />

          <p className="mt-2 px-1 text-slate-500 text-xs leading-5">
            اگر تا الان رمز عبور تنظیم نکرده‌اید، این فیلد را خالی بگذارید.
          </p>
        </div>

        <Input
          label="رمز عبور جدید"
          type="password"
          register={register}
          registerName="new_pass"
          className={inputClass}
        />

        <Input
          label="تکرار رمز عبور جدید"
          type="password"
          register={register}
          registerName="confirm_password"
          className={inputClass}
          validation={{
            validate: (value) =>
              value === newPassword || "رمزهای عبور با هم مطابقت ندارند",
          }}
        />

        {errors.confirm_password && (
          <p className="bg-red-50 px-4 py-3 rounded-xl font-medium text-red-600 text-sm">
            {errors.confirm_password.message}
          </p>
        )}

        <button
          disabled={isPending}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 shadow-blue-600/30 shadow-lg py-3.5 rounded-xl w-full font-bold text-white active:scale-[0.98] transition"
        >
          {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>
      </form>
    </div>
  );
}
