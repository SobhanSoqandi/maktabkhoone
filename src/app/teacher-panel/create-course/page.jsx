
"use client";

import React, { useState } from "react";
import Input from "@/app/(components)/Input";
import { useForm } from "react-hook-form";
import SelectBox from "@/app/(components)/SelectBox";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useRouter } from "next/navigation";
import { FiBookOpen, FiArrowLeft } from "react-icons/fi";
import Loading from "@/app/(components)/Loading";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState();
  const router = useRouter();

  const { data: db_category, isLoading } = useGet("categories/", "category");

  const { mutate: create } = useMutationData(
    "course/",
    "post",
    "create_course",
    "دوره با موفقیت اضافه شد",
    {
      onSuccess: (res) => {
        console.log(115);
        router.push(`/teacher-panel/courses/${res.data.id}/detail`);
      },
    }
  );

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category_id", category);

    create({ data: formData });
  };

  return (
    <div dir="rtl" className="bg-slate-50 px-4 sm:px-8 py-10 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex justify-center items-center bg-blue-600 shadow-blue-600/20 shadow-lg rounded-2xl w-14 h-14 text-white">
            <FiBookOpen size={27} />
          </div>
          <div>
            <h1 className="font-extrabold text-slate-800 text-xl sm:text-2xl">
              ایجاد دوره جدید
            </h1>
            <p className="mt-2 text-slate-500 text-sm">
              اطلاعات اولیه دوره خود را وارد کنید.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden">
          {isLoading ? (
            <Loading lable="درحال بارگیری . . ." />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="gap-5 space-y-4 grid md:grid-cols-2 p-6 sm:p-10">
                <div>
                  <label className="block mb-3 font-bold text-slate-700 text-sm">
                    عنوان دوره
                  </label>
                  <Input
                    className="input"
                    registerName="title"
                    register={register}
                    placeholder="عنوان دوره را بنویسید..."
                  />
                </div>

                <div >
                  <label className="block mb-3 font-bold text-slate-700 text-sm">
                    دسته‌بندی دوره
                  </label>
                  <SelectBox
                    value={category}
                    onChange={setCategory}
                    options={db_category.map((item) => ({
                      id: item.id,
                      value: item.id,
                      title: item.title,
                    }))}
                    placeholder="انتخاب دسته‌بندی"
                  />
                </div>
              </div>

              <div className="right flex justify-end bg-slate-50/70 p-6 sm:px-10 border-slate-100 border-t">
                <button
                  type="submit"
                  className="w-full md:w-40 btn btn-success"
                >
                  مرحله بعد
                  <FiArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
