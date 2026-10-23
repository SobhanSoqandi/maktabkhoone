
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
    <div dir="rtl" className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <FiBookOpen size={27} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 sm:text-2xl">
              ایجاد دوره جدید
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              اطلاعات اولیه دوره خود را وارد کنید.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {isLoading ? (
            <Loading lable="درحال بارگیری . . ." />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 p-6 sm:p-10 grid  md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
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
                  <label className="mb-3 block text-sm font-bold text-slate-700">
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

              <div className="flex justify-end border-t border-slate-100 bg-slate-50/70 p-6 sm:px-10 right">
                <button
                  type="submit"
                  className="btn btn-success w-full md:w-40"
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
