"use client";

import { useState } from "react";
import OtpHeader from "./OtpHeader";
import PhoneForm from "./PhoneForm";
import OtpForm from "./OtpForm";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/app/(components)/modal";

export default function Otp({ setislogin }) {
  const [isSent, setIsSent] = useState(false);
  const [phone, setPhone] = useState("");
  const { setActiveModal } = useModal();
  const { setUser } = useAuth();
  return (
    <div className="flex flex-col gap-8">
      <OtpHeader />

      {!isSent ? (
        <PhoneForm setIsSent={setIsSent} setPhone={setPhone} />
      ) : (
        <OtpForm
          phone={phone}
          url={"auth/verify-otp"}
          btn_text={"ورود"}
          onBack={() => setIsSent(false)}
          onSuccess={(response) => {
            setActiveModal(null);
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
            setUser({
              id: response.data.id,
              username: response.data.userName,
              phone_number: response.data.phone_number,
              role: response.data.role,
            });
            setislogin(true);
          }}
        />
      )}
    </div>
  );
}
