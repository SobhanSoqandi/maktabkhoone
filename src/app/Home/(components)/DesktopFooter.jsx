
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTelegramPlane, FaLinkedinIn, FaYoutube, FaFacebookF, FaCode, FaGlobeEurope, FaBusinessTime, FaArrowLeft, FaHeadset, FaArrowUp } from 'react-icons/fa';
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
      <Link href={href} className="inline-flex text-sm leading-7 text-slate-400 transition-colors duration-200 hover:text-cyan-300">
        {children}
      </Link>
    </li>
  );
}

export default function DesktopFooter() {
  return (
    <footer dir="rtl" className="relative overflow-hidden bg-[#071b2d] text-white">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[1.2fr_2fr] lg:items-center lg:gap-16 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              آینده از یادگیری شروع می‌شود
            </span>
            <h2 className="mt-5 text-2xl font-black leading-relaxed sm:text-3xl">
              قدم بعدی تو، <span className="text-cyan-300">یک مهارت تازه</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-8 text-slate-400">
              یاد بگیر، رشد کن و مسیر حرفه‌ای خودت را با آموزش‌های کاربردی مکتب‌خونه بساز.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <div className="pointer-events-none absolute -left-8 -top-12 h-40 w-40 rounded-full bg-cyan-300/[0.08] blur-3xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <FaHeadset size={18} />
                  <span className="text-sm font-bold">همراه شما هستیم</span>
                </div>
                <p className="mt-2 text-lg font-bold">سؤالی داری؟ با ما صحبت کن.</p>
                <p className="mt-2 text-sm text-slate-400">تیم پشتیبانی مکتب‌خونه در کنار شماست.</p>
              </div>
              <a href="tel:02191013171" className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-300 px-5 py-3.5 font-bold text-[#071b2d] transition hover:bg-cyan-200">
                ۰۲۱-۹۱۰۱۳۱۷۱
                <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-14">
          {categories.map(({ title, icon: Icon, links }) => (
            <div key={title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.07] text-lg text-cyan-300">
                  <Icon />
                </span>
                <h3 className="font-bold text-white">{title}</h3>
              </div>
              <ul className="space-y-2">
                {links.map((link) => <FooterLink key={link}>{link}</FooterLink>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 lg:py-14">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-2xl font-black text-[#071b2d]">م</span>
              <span className="text-2xl font-black tracking-tight">مکتب‌خونه</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-8 text-slate-400">
              فضایی برای یادگیری، کشف استعدادها و ساختن آینده‌ای حرفه‌ای‌تر.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-bold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => <FooterLink key={link}>{link}</FooterLink>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white p-1.5">
              <Image src="/images/enamad.jpg" alt="نماد اعتماد الکترونیکی" width={100} height={100} className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">یادگیری با اطمینان</p>
              <p className="mt-1 text-xs leading-6 text-slate-400">مکتب‌خونه، همراه مسیر رشد شما</p>
            </div>
          </div>

          <p className="text-xs leading-7 text-slate-400 sm:max-w-md sm:text-left">
            تمام حقوق این وب‌سایت متعلق به شرکت ندای دانش همراه ایرانیان (مکتب‌خونه) است.
          </p>

          <a href="#" aria-label="بازگشت به بالای صفحه" className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-xl border border-white/10 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300 sm:self-auto">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
