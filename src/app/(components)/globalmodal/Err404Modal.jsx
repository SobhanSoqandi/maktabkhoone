"use client";

import { useState } from "react";

import Modal from "../modal";
import LoginForm from "@/app/Home/(components)/login/LoginForm";

export default function Err404Modal() {
  const [activeModal, setActiveModal] = useState("404");

  return (
    <div className="flex flex-col gap-2 p-5 w-[400px]">
      <Modal.Close />
      <LoginForm />
    </div>
  );
}
