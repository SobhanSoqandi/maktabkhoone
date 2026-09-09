"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import Input from "@/app/(components)/Input";
import { FileField } from "./FileField";
import { courseLevels } from "./course-levels";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";
import Image from "next/image";
import { base_url } from "../../../../../../data/info";

const inputClassName =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-400 disabled:opacity-50";

const labelClassName = "text-base font-medium text-slate-900";

function SelectField({
  id,
  label,
  register,
  errors,
  validation,
  options,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      <div className="relative w-full">
        <select
          id={id}
          {...register(id, validation)}
          disabled={disabled}
          className={`${inputClassName} appearance-none pl-10 ${
            errors[id] ? "border-red-500" : ""
          }`}
        >
          <option value="">انتخاب کنید</option>

          {options.map((option) => (
            <option key={option.id} value={String(option.id)}>
              {option.label}
            </option>
          ))}
        </select>

        <FiChevronDown
          size={16}
          className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {errors[id] && (
        <p className="text-red-500 text-sm">{errors[id].message}</p>
      )}
    </div>
  );
}

export function CourseForm({ course_id }) {
  const { data: courseData, isLoading: courseLoading } = useGet(
    `course/${course_id}`,
    [course_id, "course_detail"],
  );

  const { data: categoryData, isLoading: categoryLoading } = useGet(
    "categories/",
    ["category"],
  );

  const { mutate: update_data, isPending: isUpdating } = useMutationData(
    `course/${course_id}`,
    "put",
    "update_course_data",
    "با موفقیت اطلاعات آپدیت شد",
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      faTitle: "",
      description: "",
      categoryId: "",
      teacherId: "",
      courseLevel: "",
      prerequisites: "",
      price: "",
      isFree: false,
      courseHour: "",
      bannerFile: null,
      trailerFile: null,
    },
  });

  useEffect(() => {
    if (!courseData?.course) return;

    const course = courseData.course;

    reset({
      title: course.title ?? "",
      description: course.description ?? "",
      category_id: String(course.category_id ?? ""),
      teacher_id: course.teacher_id ?? "",
      course_level: course.course_level ?? "",
      prerequisites: course.prerequisites ?? "",
      price: course.price ?? "",
      is_free: course.is_free ?? false,
      course_hour: course.course_hour ?? "",
      bannerFile: null,
      trailerFile: null,
    });
  }, [courseData, reset]);

  const isFree = watch("isFree");

  const categories = Array.isArray(categoryData)
    ? categoryData.map((category) => ({
        id: category.id,
        label: category.title,
      }))
    : [];

  function onSubmit(values) {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("category_id", values.category_id);
    formData.append("course_level", values.course_level);
    formData.append("prerequisites", values.prerequisites || "");
    formData.append("price", values.price || "");
    formData.append("is_free", String(values.is_free));
    formData.append("course_hour", values.course_hour || "");

    if (values.banner_file?.[0]) {
      formData.append("banner_file", values.banner_file[0]);
    }

    if (values.trailer_file?.[0]) {
      formData.append("trailer_file", values.trailer_file[0]);
    }

    update_data({
      data: formData,
    });
  }

  if (courseLoading || categoryLoading) {
    return (
      <div className="py-16 text-slate-400 text-sm text-center">
        در حال دریافت اطلاعات دوره...
      </div>
    );
  }

  if (!courseData?.course) {
    return (
      <div className="py-16 text-slate-400 text-sm text-center">
        اطلاعات دوره پیدا نشد
      </div>
    );
  }

  const course = courseData.course;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <input type="hidden" {...register("teacherId")} />

      <Input
        label="عنوان فارسی دوره"
        registerName="title"
        register={register}
        errors={errors}
        validation={{
          required: "عنوان فارسی دوره الزامی است",
        }}
        className={inputClassName}
        lableClassName={labelClassName}
      />

      <Input
        label="توضیحات دوره"
        registerName="description"
        register={register}
        errors={errors}
        validation={{
          required: "توضیحات دوره الزامی است",
        }}
        className={inputClassName}
        lableClassName={labelClassName}
      />

      <SelectField
        id="category_id"
        label="دسته‌بندی محتوایی"
        register={register}
        errors={errors}
        validation={{
          required: "دسته‌بندی محتوایی الزامی است",
        }}
        options={categories}
      />

      <div className="gap-8 grid sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <FileField
            label="بنر دوره"
            registerName="banner_file"
            register={register}
            errors={errors}
          />

          {course.banner && (
            <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              <p className="px-3 py-2 text-slate-500 text-sm">بنر فعلی دوره</p>

              <Image
                src={base_url + course.banner}
                alt={course.title}
                width={800}
                height={300}
                unoptimized
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <FileField
            label="تریلر دوره"
            registerName="trailer_file"
            register={register}
            errors={errors}
          />

          {course.trailer_url && (
            <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              <p className="px-3 py-2 text-slate-500 text-sm">تیزر فعلی دوره</p>

              <video
                src={base_url + course.trailer_url}
                controls
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <SelectField
        id="course_level"
        label="سطح دوره"
        register={register}
        errors={errors}
        validation={{
          required: "سطح دوره الزامی است",
        }}
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
          id="is_free"
          type="checkbox"
          {...register("isFree")}
          className="border-slate-300 rounded w-4 h-4"
        />

        <label htmlFor="is_free" className={labelClassName}>
          دوره رایگان است
        </label>
      </div>

      <div className="gap-8 grid sm:grid-cols-2">
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
          registerName="course_hour"
          type="number"
          register={register}
          errors={errors}
          className={inputClassName}
          lableClassName={labelClassName}
        />
      </div>

      <button
        type="submit"
        disabled={isUpdating}
        className="bg-teal-600 hover:bg-teal-500 disabled:opacity-50 w-fit min-w-40 text-white btn btn-primary"
      >
        {isUpdating ? "در حال ذخیره..." : "ذخیره"}
      </button>
    </form>
  );
}
