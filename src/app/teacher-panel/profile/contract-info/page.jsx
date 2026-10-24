"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";

const CURRENT_CONTRACT_INFO = {
  shaba_number: "1234567890123456",
  postal_code: "1234567890",
  address: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
};

function ContractInfoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: CURRENT_CONTRACT_INFO });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div dir="rtl" className="bg-gray-50 p-6 md:p-10 min-h-screen">
      <div className="mx-auto max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 bg-white shadow-sm p-6 md:p-10 rounded-2xl"
        >
          <h2 className="font-medium text-gray-900 text-lg">
            ویرایش اطلاعات قراردادی
          </h2>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <Input
              label="شماره شبا"
              registerName="shaba_number"
              register={register}
              errors={errors}
              validation={{
                required: "شماره شبا را وارد کنید",
                pattern: {
                  value: /^\d{16}$/,
                  message: "شماره شبا باید ۱۶ رقم باشد",
                },
              }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />

            <Input
              label="کد پستی"
              registerName="postal_code"
              register={register}
              errors={errors}
              validation={{
                required: "کد پستی را وارد کنید",
                pattern: {
                  value: /^\d{10}$/,
                  message: "کد پستی باید ۱۰ رقم باشد",
                },
              }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700 text-sm">
              آدرس <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              {...register("address", { required: "آدرس را وارد کنید" })}
              className={`input resize-none ${
                errors.address ? "ring-1 ring-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
          </div>

          <button type="submit" className="self-center px-16 btn btn-success">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContractInfoPage;
