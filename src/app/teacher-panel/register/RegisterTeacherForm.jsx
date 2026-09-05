"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input"; 
function RegisterTeacherForm({ onNext, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => onNext(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="نام"
          registerName="first_name"
          register={register}
          errors={errors}
          validation={{ required: "نام را وارد کنید" }}
          className="input"
          lableClassName="text-sm font-medium text-gray-700"
        />
        <Input
          label="نام خانوادگی"
          registerName="last_name"
          register={register}
          errors={errors}
          validation={{ required: "نام خانوادگی را وارد کنید" }}
          className="input"
          lableClassName="text-sm font-medium text-gray-700"
        />
        <Input
          label="کد ملی"
          registerName="national_code"
          register={register}
          errors={errors}
          validation={{
            required: "کد ملی را وارد کنید",
            pattern: { value: /^\d{10}$/, message: "کد ملی باید ۱۰ رقم باشد" },
          }}
          className="input"
          lableClassName="text-sm font-medium text-gray-700"
        />
        
        <Input
          label="شماره همراه"
          registerName="mobile"
          register={register}
          errors={errors}
          validation={{
            required: "شماره همراه را وارد کنید",
            pattern: { value: /^09\d{9}$/, message: "شماره همراه معتبر نیست" },
          }}
          className="input"
          lableClassName="text-sm font-medium text-gray-700"
        />
        <Input
          label="تاریخ تولد"
          registerName="birth_date"
          register={register}
          errors={errors}
          validation={{ required: "تاریخ تولد را وارد کنید" }}
          placeholder="۱۳۷۵/۰۱/۰۱"
          className="input"
          lableClassName="text-sm font-medium text-gray-700"
        />
      </div>

      <button type="submit" className="btn btn-success self-start px-10">
        ادامه
      </button>
    </form>
  );
}

export default RegisterTeacherForm;
