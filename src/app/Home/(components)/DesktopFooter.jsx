import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaCode,
  FaGlobeEurope,
  FaBusinessTime,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

function DesktopFooter() {
  const categories = [
    {
      title: "برنامه‌نویسی",
      icon: <FaCode />,
      links: [
        "برنامه‌نویسی",
        "پایتون",
        "هوش مصنوعی",
        "وردپرس",
        "جاوا اسکریپت",
      ],
    },
    {
      title: "آی تی و نرم‌افزار",
      icon: <HiOutlineComputerDesktop />,
      links: [
        "اکسل",
        "ورد",
        "پاورپوینت",
        "لینوکس",
        "سیسکو",
      ],
    },
    {
      title: "زبان خارجی",
      icon: <FaGlobeEurope />,
      links: [
        "زبان انگلیسی",
        "زبان آلمانی",
        "زبان ترکی استانبولی",
        "آیلتس",
        "گرامر انگلیسی",
      ],
    },
    {
      title: "کسب و کار",
      icon: <FaBusinessTime />,
      links: [
        "سئو",
        "دیجیتال مارکتینگ",
        "Power BI",
        "مدیریت محصول",
        "مدیریت",
      ],
    },
  ];

  const sections = [
    {
      title: "مکتب‌خونه",
      links: [
        "درباره مکتب‌خونه",
        "تماس با مکتب‌خونه",
        "فرصت‌های شغلی",
        "مجله‌ی آنلاین مکتب‌خونه",
      ],
    },
    {
      title: "دانشجویان",
      links: [
        "اشتراک مکتب‌پلاس",
        "سوالات متداول",
        "شرایط استفاده",
        "استعلام گواهینامه",
      ],
    },
    {
      title: "مدرسان",
      links: [
        "تدریس در مکتب‌خونه",
        "راهنمای مدرسان",
        "منتور شوید",
      ],
    },
    {
      title: "سازمان‌ها",
      links: ["سرویس سازمانی", "نمایندگی فروش"],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 ">

      <div className="border-b border-gray-200 px-28">
        <div className="container mx-auto py-16">

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-28">

            {categories.map((category) => (
              <div key={category.title} className="text-start">

                <div className="flex items-center gap-2 mb-7">

                  <span className="text-2xl text-gray-700">
                    {category.icon}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                </div>

                <ul className="space-y-5">
                  {category.links.map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 hover:text-green-600 transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </div>


      <div className="container mx-auto py-16 px-20">
        <div className="grid grid-cols-6 gap-12">

          <div className="col-span-2 flex flex-col ">
            <h3 className="text-xl font-bold mb-5">
              با ما در ارتباط باشید!
            </h3>

            <p className="text-gray-600 mb-8">
              تلفن پشتیبانی: ۰۲۱-۹۱۰۱۳۱۷۱
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                <FaTelegramPlane />,
                <FaYoutube />,
                <FaLinkedinIn />,
                <FaInstagram />,
                <FaXTwitter />,
                <FaFacebookF />,
              ].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center text-xl text-gray-700"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div
              key={section.title}
              className="col-span-1"
            >
              <h3 className="text-lg font-bold mb-7">
                {section.title}
              </h3>

              <ul className="space-y-5">
                {section.links.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 hover:text-green-600 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>


      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-20 flex items-center justify-between">

          <div className="flex gap-6">
            <Image
              src="/images/enamad.jpg"
              alt="enamad"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <p className="text-gray-700 text-lg">
            تمام حقوق این وبسایت برای شرکت ندای دانش همراه ایرانیان
            (مکتب‌خونه) است.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default DesktopFooter;