"use client";

import { useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import Input from "@/app/(components)/Input";
import { FileField } from "./FileField";
import { contentCategories } from "./course-categories";
import { courseLevels } from "./course-levels";

const inputClassName =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-400 disabled:opacity-50";
const labelClassName = "text-base font-medium text-slate-900";

function SelectField({ id, label, register, errors, validation, options }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={id}
          {...register(id, validation)}
          className={`${inputClassName} appearance-none pl-10 ${
            errors[id] ? "border-red-500" : ""
          }`}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <FiChevronDown
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
      {errors[id] && <p className="text-sm text-red-500">{errors[id].message}</p>}
    </div>
  );
}

export function CourseForm({ course }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      faTitle: course.faTitle,
      description: course.description,
      categoryId: course.categoryId,
      teacherId: course.teacherId,
      courseLevel: course.courseLevel,
      prerequisites: course.prerequisites,
      price: course.price,
      isFree: course.isFree,
      courseHour: course.courseHour,
    },
  });

  const isFree = watch("isFree");

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <input type="hidden" {...register("teacherId")} />

      <Input
        label="عنوان فارسی دوره"
        registerName="faTitle"
        register={register}
        errors={errors}
        validation={{ required: "عنوان فارسی دوره الزامی است" }}
        className={inputClassName}
        lableClassName={labelClassName}
      />

      <div className="flex w-full flex-col gap-2">
        <Input
          label="توضیحات دوره"
          registerName="description"
          register={register}
          errors={errors}
          validation={{ required: "توضیحات دوره الزامی است" }}
          className={inputClassName}
          lableClassName={labelClassName}
        />
     
      </div>

      <SelectField
        id="categoryId"
        label="دسته‌بندی محتوایی"
        register={register}
        errors={errors}
        validation={{ required: "دسته‌بندی محتوایی الزامی است" }}
        options={contentCategories}
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <FileField
          label="بنر دوره"
          registerName="bannerFile"
          register={register}
          errors={errors}
          validation={{ required: "بنر دوره الزامی است" }}
        />
        <FileField
          label="تریلر دوره"
          registerName="trailerFile"
          register={register}
          errors={errors}
          validation={{ required: "تریلر دوره الزامی است" }}
        />
      </div>

      <SelectField
        id="courseLevel"
        label="سطح دوره"
        register={register}
        errors={errors}
        validation={{ required: "سطح دوره الزامی است" }}
        options={courseLevels}
      />

      <Input
        label="پیش‌نیازهای دوره"
        registerName="prerequisites"
        register={register}
        errors={errors}
        className={inputClassName}
        lableClassName={labelClassName}
      />

      <div className="flex items-center gap-3">
        <input
          id="isFree"
          type="checkbox"
          {...register("isFree")}
          className="h-4 w-4 rounded border-slate-300"
        />
        <label htmlFor="isFree" className={labelClassName}>
          دوره رایگان است
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Input
          label="قیمت دوره (تومان)"
          registerName="price"
          type="number"
          register={register}
          errors={errors}
          disabled={isFree}
          className={inputClassName}
          lableClassName={labelClassName}
        />

        <Input
          label="مدت زمان دوره (ساعت)"
          registerName="courseHour"
          type="number"
          register={register}
          errors={errors}
          className={inputClassName}
          lableClassName={labelClassName}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-fit min-w-40 bg-teal-600 hover:bg-teal-500 text-white"
      >
        ذخیره
      </button>
    </form>
  );
}
