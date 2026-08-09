"use client";
import { FaBook, FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import checkUser from "@/app/(function)/checkUser";
import Modal from "@/app/(components)/modal";
import LoginForm from "./LoginForm";
import { useContext, useState } from "react";
import UserMenu from "./UserMenu";
import { loginContext } from "@/context/LoginContext";
import Link from "next/link";

export default function Login() {
  const { isLogin } = useContext(loginContext);
  return (
    <div>
      {isLogin ? (
        <div className="flex items-center gap-3">
          <button className="btn btn-primary">
            <FaBook className="w-5 h-5" />
            <span>دوره‌های من</span>
          </button>

          <Link href={"/cart"} className="btn btn-primary">
            <TiShoppingCart className="w-5 h-5" />
          </Link>

          <div className="group relative">
            <button className="btn btn-primary">
              <FaRegUser className="w-5 h-5" />
            </button>
            <div className="invisible group-hover:visible top-full left-0 z-50 absolute bg-white opacity-0 group-hover:opacity-100 shadow-2xl mt-3 border border-gray-200 rounded-2xl w-64 overflow-hidden scale-95 group-hover:scale-100 transition-all translate-y-3 group-hover:translate-y-0 duration-300 ease-out">
              <UserMenu />
            </div>
          </div>
        </div>
      ) : (
        <Modal>
          <Modal.Open name="login">
            <div className="btn btn-success">ورود | ثبت نام</div>
          </Modal.Open>
          <Modal.Window name="login">
            <div className="flex flex-col gap-2 p-5 w-[400px]">
              <Modal.Close />
              <LoginForm />
            </div>
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}
