"use client";

import { useState } from "react";
import Stepper from "./Stepper";
import RegisterTeacherForm from "./RegisterTeacherForm";
import ContractInfoForm from "./ContractInfoForm";
import PublishCourseForm from "./PublishCourseForm";

const STEPS = ["احراز هویت", "اطلاعات قراردادی", "آماده انتشار دوره"];

function Page() {
  const [step, setStep] = useState(1);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <Stepper steps={STEPS} current={step} />

        {step === 1 && <RegisterTeacherForm onNext={() => setStep(2)} />}
        {step === 2 && <ContractInfoForm onNext={() => setStep(3)} />}
        {step === 3 && <PublishCourseForm />}
      </div>
    </div>
  );
}

export default Page;
