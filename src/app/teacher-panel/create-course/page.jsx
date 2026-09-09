"use client";

import React, { useState } from "react";
import InputContainer from "./copmonent/InputContainer";
import Input from "@/app/(components)/Input";
import { useForm } from "react-hook-form";
import SelectBox from "@/app/(components)/SelectBox";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useRouter } from "next/navigation";

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
        router.push(`/teacher-panel/courses/${res.data.id}`);
      },
    },
  );

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category_id", category);

    create({
      data: formData,
    });
  };

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-20">
          <InputContainer
            title="برای دوره آموزشی خود عنوان انتخاب کنید"
            subtitle="نامی که برای دوره خود در نظر دارید را بنویسید. می‌توانید این نام را بعدا تغییر دهید."
          >
            <Input
              className="bg-white input"
              registerName="title"
              register={register}
              placeholder="نام دوره ی خود را انتخاب کنید"
            />
          </InputContainer>

          <InputContainer
            title="دسته‌بندی محتوایی دوره خود را انتخاب کنید"
            subtitle="در صورت ابهام در انتخاب دسته‌بندی لطفا با پشتیبانی تماس برقرار کنید."
          >
            <SelectBox
              value={category}
              onChange={setCategory}
              options={db_category.map((item) => ({
                id: item.id,
                value: item.id,
                title: item.title,
              }))}
              placeholder="دسته‌بندی"
            />
          </InputContainer>

          <div className="flex justify-end items-end ml-0 px-5 w-full text-left">
            <button
              type="submit"
              className="bg-green-700 w-[250px] text-white btn"
            >
              مرحله ی بعد
            </button>
          </div>
        </form>
      )}
    </>
  );
}
