
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaCode,
  FaGlobeEurope,
  FaBusinessTime,
  FaArrowLeft,
  FaHeadset,
  FaArrowUp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

const categories = [
  { title: 'برنامه‌نویسی', icon: FaCode, links: ['برنامه‌نویسی', 'پایتون', 'هوش مصنوعی', 'وردپرس', 'جاوا اسکریپت'] },
  { title: 'آی‌تی و نرم‌افزار', icon: HiOutlineComputerDesktop, links: ['اکسل', 'ورد', 'پاورپوینت', 'لینوکس', 'سیسکو'] },
  { title: 'زبان‌های خارجی', icon: FaGlobeEurope, links: ['زبان انگلیسی', 'زبان آلمانی', 'زبان ترکی استانبولی', 'آیلتس', 'گرامر انگلیسی'] },
  { title: 'کسب‌وکار', icon: FaBusinessTime, links: ['سئو', 'دیجیتال مارکتینگ', 'Power BI', 'مدیریت محصول', 'مدیریت'] },
];

const sections = [
  { title: 'مکتب‌خونه', links: ['درباره مکتب‌خونه', 'تماس با مکتب‌خونه', 'فرصت‌های شغلی', 'مجله آنلاین مکتب‌خونه'] },
  { title: 'دانشجویان', links: ['اشتراک مکتب‌پلاس', 'سؤالات متداول', 'شرایط استفاده', 'استعلام گواهینامه'] },
  { title: 'مدرسان', links: ['تدریس در مکتب‌خونه', 'راهنمای مدرسان', 'منتور شوید'] },
  { title: 'سازمان‌ها', links: ['سرویس سازمانی', 'نمایندگی فروش'] },
];

const socials = [
  { icon: FaInstagram, label: 'اینستاگرام', href: 'https://www.instagram.com/maktabkhooneh/' },
  { icon: FaTelegramPlane, label: 'تلگرام', href: 'https://t.me/maktabkhooneh' },
  { icon: FaLinkedinIn, label: 'لینکدین', href: 'https://www.linkedin.com/' },
  { icon: FaYoutube, label: 'یوتیوب', href: 'https://www.youtube.com/' },
  { icon: FaXTwitter, label: 'ایکس', href: 'https://x.com/' },
  { icon: FaFacebookF, label: 'فیسبوک', href: 'https://www.facebook.com/' },
];

function FooterLink({ children, href = '#' }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex text-sm leading-7 text-slate-500 transition-colors duration-200 hover:text-blue-600"
      >
        {children}
      </Link>
    </li>
  );
}

export default function DesktopFooter() {
  return (
    <footer dir="rtl" className="relative overflow-hidden border-t border-blue-100 bg-white text-slate-800">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-100/70 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-slate-200 py-10 sm:py-12 lg:grid-cols-[1.2fr_2fr] lg:items-center lg:gap-16 lg:py-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              آینده از یادگیری شروع می‌شود
            </span>

            <h2 className="mt-5 text-2xl font-black leading-relaxed text-slate-900 sm:text-3xl">
              قدم بعدی تو، <span className="text-blue-600">یک مهارت تازه</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-8 text-slate-500">
              یاد بگیر، رشد کن و مسیر حرفه‌ای خودت را با آموزش‌های کاربردی مکتب‌خونه بساز.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 shadow-sm shadow-blue-100/50 sm:p-7">
            <div className="pointer-events-none absolute -left-8 -top-12 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaHeadset size={18} />
                  <span className="text-sm font-extrabold">همراه شما هستیم</span>
                </div>

                <p className="mt-2 text-lg font-extrabold text-slate-900">
                  سؤالی داری؟ با ما صحبت کن.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  تیم پشتیبانی مکتب‌خونه در کنار شماست.
                </p>
              </div>

              <a
                href="tel:02191013171"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/25"
              >
                ۰۲۱-۹۱۰۱۳۱۷۱
                <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 border-b border-slate-200 py-10 sm:gap-y-10 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:py-14">
          {categories.map(({ title, icon: Icon, links }) => (
            <div key={title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-lg text-blue-600 transition duration-300 group-hover:bg-blue-100">
                  <Icon />
                </span>
                <h3 className="font-extrabold text-slate-800">{title}</h3>
              </div>

              <ul className="space-y-2">
                {links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-9 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-6 lg:gap-8 lg:py-14">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-lg shadow-blue-600/20">
                م
              </span>

              <span className="text-2xl font-black tracking-tight text-slate-900">
                مکتب‌خونه
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-8 text-slate-500">
              فضایی برای یادگیری، کشف استعدادها و ساختن آینده‌ای حرفه‌ای‌تر.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-extrabold text-slate-800">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
              <Image
                src="/images/enamad.jpg"
                alt="نماد اعتماد الکترونیکی"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-extrabold text-slate-800">
                یادگیری با اطمینان
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                مکتب‌خونه، همراه مسیر رشد شما
              </p>
            </div>
          </div>

          <p className="text-xs leading-7 text-slate-500 sm:max-w-md sm:text-left">
            تمام حقوق این وب‌سایت متعلق به شرکت ندای دانش همراه ایرانیان (مکتب‌خونه) است.
          </p>

          <a
            href="#"
            aria-label="بازگشت به بالای صفحه"
            className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-xl border border-slate-200 bg-white text-blue-600 transition duration-300 hover:border-blue-200 hover:bg-blue-50 sm:self-auto"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
