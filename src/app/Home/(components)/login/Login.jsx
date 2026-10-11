"use client";

import { FaBook, FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Modal from "@/app/(components)/modal";
import LoginForm from "./LoginForm";
import { useContext, useEffect, useRef, useState } from "react";
import UserMenu from "./UserMenu";
import { loginContext } from "@/context/LoginContext";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { isLogin } = useContext(loginContext);

  const { user } = useAuth();
  console.log(user);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    setIsUserMenuOpen(false);
  }, [isLogin]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function toggleUserMenu(event) {
    event.stopPropagation();
    setIsUserMenuOpen((prev) => !prev);
  }

  return (
    <>
      {user?.role_id ? (
        <Link
          href="/teacher-panel/courses"
          className="flex items-center gap-2 font-bold text-teal-700 hover:text-teal-900 text-sm transition-colors"
        >
          پنل مدرس
        </Link>
      ) : (
        <Link
          href="/Teacher-Registration"
          className="flex items-center gap-2 font-semibold text-slate-600 hover:text-teal-700 text-sm transition-colors"
        >
          تدریس کنید
        </Link>
      )}
      <div>
        {isLogin ? (
          <div className="flex items-center gap-3">
            <button type="button" className="btn btn-primary">
              <FaBook className="w-5 h-5" />
              <span>دوره‌های من</span>
            </button>

            <Link href="/cart" className="btn btn-primary">
              <TiShoppingCart className="w-5 h-5" />
            </Link>

            <div ref={menuRef} className="relative">
              <button
                type="button"
                onClick={toggleUserMenu}
                className="btn btn-primary"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="menu"
              >
                <FaRegUser className="w-5 h-5" />
              </button>

              {isUserMenuOpen && (
                <div className="top-full left-0 z-50 absolute bg-white slide-in-from-top-2 shadow-2xl mt-3 border border-gray-200 rounded-2xl w-64 overflow-hidden animate-in duration-200 fade-in">
                  <UserMenu />
                </div>
              )}
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
    </>
  );
}
