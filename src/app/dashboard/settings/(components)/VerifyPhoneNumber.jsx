import OtpForm from "@/app/Home/(components)/login/otp/OtpForm";
import OtpHeader from "@/app/Home/(components)/login/otp/OtpHeader";
import PhoneForm from "@/app/Home/(components)/login/otp/PhoneForm";
import { useState } from "react";

export default function VerifyPhoneNumber() {
  const [isSent, setIsSent] = useState(false);
  
  return (
    <div className="flex flex-col gap-8 px-8 py-6">
      <OtpHeader />

      {!isSent ? (
        <PhoneForm setIsSent={setIsSent} setPhone={setPhone} />
      ) : (
        <OtpForm
          phone={phone}
          onBack={() => setIsSent(false)}
          onSuccess={() => {
            setActiveModal(null);
            setislogin(true);
          }}
        />
      )}
    </div>
  );
}
