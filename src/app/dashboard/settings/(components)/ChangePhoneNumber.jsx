import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import OtpForm from "@/app/Home/(components)/login/otp/OtpForm";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
    <>
      <div className="bg-white shadow-sm p-6 border rounded-xl">
        {!verify ? (
          <>
            <div className="mb-5">
              <h2 className="font-semibold text-gray-800 text-lg">
                تغییر شماره همراه
              </h2>

              <p className="mt-1 text-gray-500 text-sm">
                برای تغییر شماره همراه، شماره جدید خود را وارد کنید.
              </p>
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
              className="space-y-4"
            >
              <Input
                registerName={"phone_number"}
                register={register}
                defaultValue={phone_in}
                label="شماره همراه"
                className="px-4 py-3 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition"
              />

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 py-3 rounded-lg w-full font-medium text-white text-sm active:scale-[0.98] transition"
              >
                ارسال کد تایید
              </button>
            </form>
          </>
        ) : (
          <div className="w-80">
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
    </>
  );
}
