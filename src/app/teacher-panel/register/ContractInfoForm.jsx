"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";


const CONTRACT_TEXT = `: زیر ساخت کسب‌وکار متعلق به مکتب‌خونه به نشانی 
`;

function ContractInfoForm({ onNext }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const agreed = watch("agree");

  const onSubmit = (data) => onNext(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


<Input
          label=" شماره شبا "
          registerName="postal_code"
          register={register}
          errors={errors}
          validation={{
            required: " شماره شبا را وارد کنید",
            pattern: { value: /^\d{16}$/, message: "شماره شبا  باید 16 رقم باشد" },
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
          className={`input resize-none ${errors.address ? "ring-1 ring-red-500" : ""}`}
        />
        {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">قرارداد</label>
        <div className="max-h-48 overflow-y-auto rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm leading-7 text-gray-600 whitespace-pre-line">
          {CONTRACT_TEXT}
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          {...register("agree", { required: true })}
          className="w-4 h-4 rounded accent-teal-600"
        />
        قرارداد را مطالعه کرده‌ام و شرایط آن را می‌پذیرم
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className={`btn self-center px-16 transition ${agreed ? "btn-success" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
      >
        ادامه
      </button>
    </form>
  );
}

export default ContractInfoForm;
