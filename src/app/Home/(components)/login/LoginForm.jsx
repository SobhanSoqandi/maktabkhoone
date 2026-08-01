"use client";
import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";

import useMutationData from "@/app/(hooks)/useMutationData";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Otp from "./otp/Otp";
import { useAuth } from "@/context/AuthContext";
import useGlobalModal from "@/app/(components)/globalmodal/useGlobalModal";
import { closeGlobalModal } from "@/lib/modalEmitter";
import { loginContext } from "@/context/LoginContext";

export default function LoginForm() {
  const { setIsLogin, isLogin } = useContext(loginContext);
  const [form, setForm] = useState("login");
  const { setUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutationData(
    "auth/login",
    "post",
    "login_toast",
    "با موفقیت وارد شدید",
    {
      onSuccess: (response) => {
        localStorage.setItem("access_token", response.data.data.access_token);
        localStorage.setItem("refresh_token", response.data.data.refresh_token);
        setUser({
          id: response.data.data.id,
          username: response.data.data.userName,
          phone_number: response.data.data.phone_number,
          role: response.data.data.role,
        });
        setActiveModal(null);
        closeGlobalModal();
        setIsLogin(true);
      },
    },
  );
  const { setActiveModal } = useModal();
  return (
    <>
      {form == "login" ? (
        <div className="flex flex-col items-center gap-8 mt-3">
          <h2 className="font-bold text-xl">ورود | ثبت نام</h2>
          <form
            className="flex flex-col gap-5 w-[90%]"
            onSubmit={handleSubmit((data) => {
              mutate({
                data: data,
              });
            })}
          >
            <Input
              label={"نام کاربری"}
              placeholder="نام کاربری خود را وارد کنید"
              registerName={"user_name"}
              register={register}
              className="input"
            />

            <Input
              label={"رمز عبور"}
              type="password"
              placeholder="رمز عبور خود را وارد کنید "
              registerName={"password"}
              register={register}
              className="input"
            />
            <button
              type="submit"
              className="justify-center p-3 btn btn-success"
            >
              تایید
            </button>
          </form>
          <div className="flex justify-between items-center gap-4 w-[90%]">
            <div className="justify-center shadow border border-gray-200 w-full text-gray-600 btn">
              ثبت نام
            </div>

            <div
              onClick={() => setForm("otp")}
              className="w-full btn btn-success"
            >
              ورود با شماره همراه
            </div>
          </div>
        </div>
      ) : form == "otp" ? (
        <Otp setIsLogin={setIsLogin} />
      ) : (
        <div>ops</div>
      )}
    </>
  );
}
