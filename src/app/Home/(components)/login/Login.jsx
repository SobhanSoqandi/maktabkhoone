"use client";
import { FaBook, FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import checkUser from "@/app/(function)/checkUser";
import Modal from "@/app/(components)/modal";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div>
      {checkUser() ? (
        <div className="flex items-center gap-3">
          <button className="btn btn-primary">
            <FaBook className="w-5 h-5" />
            <span>دوره‌های من</span>
          </button>

          <button className="btn btn-primary">
            <TiShoppingCart className="w-5 h-5" />
          </button>

          <button className="btn btn-primary">
            <FaRegUser className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <Modal>
          <Modal.Open name="login">
            <div className="bg-blue-500 font-bold text-white btn">
              ورود/ثبت نام
            </div>
          </Modal.Open>
          <Modal.Window name="login">
            <div className="flex flex-col gap-2 w-125 h-64">
              <Modal.Close />
              <LoginForm />
            </div>
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}
