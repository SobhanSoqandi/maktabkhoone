import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import OtpForm from "@/app/Home/(components)/login/otp/OtpForm";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

export default function ChangePhoneNumber({ phone_in }) {
  const [verify, setverify] = useState(false);
  const { setActiveModal } = useModal();
  const { mutate: sendOtp } = useMutationData(
    "auth/send-otp",
    "post",
    "otp-login",
  );
  const { loadUser, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [phone, setPhone] = useState(phone_in);

  return (
    <div className="w-[90vw] max-w-md overflow-hidden rounded-3xl bg-white">
      {!verify ? (
        <>
          <div className="flex items-center gap-4 border-b border-slate-100 bg-blue-50/60 px-8 py-7">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <HiOutlineDevicePhoneMobile size={28} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900">تغییر شماره همراه</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                برای تغییر شماره همراه، شماره جدید خود را وارد کنید.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              sendOtp(
                {
                  data: { ...data, purpose: "CHANGE_PHONE" },
                },
                {
                  onSuccess: () => {
                    setPhone(data.phone_number);
                    setverify(true);
                  },
                },
              );
            })}
            className="space-y-5 p-8"
          >
            <Input
              registerName={"phone_number"}
              register={register}
              defaultValue={phone_in}
              label="شماره همراه"
              className={inputClass}
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 active:scale-[0.98]"
            >
              ارسال کد تایید
            </button>
          </form>
        </>
      ) : (
        <div className="mx-auto w-full max-w-sm p-8">
          <OtpForm
            onBack={() => setverify(false)}
            url={"auth/change-phone/request"}
            btn_text={"تایید شماره "}
            phone={phone}
            onSuccess={(res) => {
              console.log(res);
              setActiveModal(null);
              setUser((prev) => ({
                ...prev,
                phone_number: res.data.phone_number,
              }));
            }}
          />
        </div>
      )}
    </div>
  );
}
