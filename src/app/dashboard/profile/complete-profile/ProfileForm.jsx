"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@/app/(components)/Input";
import AvatarUploader from "./AvatarUploader";

import useMutationData from "@/app/(hooks)/useMutationData";

export default function ProfileForm({ user }) {

    const [avatarPreview, setAvatarPreview] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    const { mutate, isPending } = useMutationData(
        "user/profile",
        "put",
        "profile"
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: user.username,
            email: user.email,
            phone_number: user.phone_number,
            password: "",
        },
    });

    const onSubmit = (data) => {
        const payload = {
            avatar,
            username: data.username,
            phone_number: data.phone_number,
            password: data.password,
            email: data.email,
        };

        console.log(payload);

        mutate(
            {
                data: payload,
            },
            {
                onSuccess: () => {
                    console.log("پروفایل بروزرسانی شد.");
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-gray-200 bg-white p-4"
        >
            <h1 className="mb-10 text-3xl font-black">
                پروفایل
            </h1>

            <div className="mb-10 flex justify-center">
                <AvatarUploader
                    preview={avatarPreview}
                    setPreview={setAvatarPreview}
                    setFile={setAvatarFile}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <Input
                    label="نام کاربری"
                    placeholder="نام کاربری"
                    register={register}
                    registerName="username"
                    errors={errors}
                    validation={{
                        required: "نام کاربری الزامی است",
                    }}
                    className="input"
                />

                <Input
                    label="ایمیل"
                    placeholder="example@gmail.com"
                    type="email"
                    register={register}
                    registerName="email"
                    errors={errors}
                    validation={{
                        required: "ایمیل الزامی است",
                    }}
                    className="input"
                />

                <Input
                    label="شماره تلفن"
                    placeholder="0912xxxxxxx"
                    register={register}
                    registerName="phone_number"
                    errors={errors}
                    validation={{
                        required: "شماره تلفن الزامی است",
                    }}
                    className="input"
                />

                <Input
                    label="رمز عبور جدید"
                    placeholder="در صورت نیاز وارد کنید"
                    type="password"
                    register={register}
                    registerName="password"
                    errors={errors}
                    className="input"
                />
                <button
                type="submit"
                disabled={isPending}
                className="btn btn-success mt-10 w-full"
            >
                {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </button>

            </div>

            
        </form>
    );
}