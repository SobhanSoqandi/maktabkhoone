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
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col gap-6"
        >
          <h2 className="text-lg font-medium text-gray-900">ویرایش اطلاعات قراردادی</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="شماره شبا"
              registerName="shaba_number"
              register={register}
              errors={errors}
              validation={{
                required: "شماره شبا را وارد کنید",
                pattern: { value: /^\d{16}$/, message: "شماره شبا باید ۱۶ رقم باشد" },
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
                pattern: { value: /^\d{10}$/, message: "کد پستی باید ۱۰ رقم باشد" },
              }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
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
              <p className="text-xs text-red-500">{errors.address.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-success self-center px-16">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContractInfoPage;
