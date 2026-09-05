"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";

// TODO: این دیتای دستیه، بعداً با فراخوانی GET از بک‌اند جایگزین می‌شه
const CURRENT_PROFILE = {
  first_name: "علی",
  last_name: "رضایی",
  national_code: "1234567890",
  mobile: "09121234567",
  birth_date: "۱۳۷۵/۰۱/۰۱",
  is_verified: false,
};

function VerificationBadge({ verified }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        verified ? "bg-teal-50 text-teal-700" : "bg-amber-50 text-amber-700"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          verified ? "bg-teal-600" : "bg-amber-500"
        }`}
      />
      {verified ? "هویت تایید شده" : "در انتظار تایید"}
    </span>
  );
}

function ProfileInfoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: CURRENT_PROFILE });

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 md:p-10">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col gap-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">ویرایش اطلاعات هویتی</h2>
            <VerificationBadge verified={CURRENT_PROFILE.is_verified} />
          </div>

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
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfoPage;
