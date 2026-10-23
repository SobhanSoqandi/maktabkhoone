'use client';

import Link from 'next/link';
import { FaArrowLeft, FaGraduationCap, FaPlay } from 'react-icons/fa';

export default function Hero({ imageSrc, title, subtitle, ctaLabel = 'شروع تدریس و ثبت دوره', onCtaClick }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-bl from-[#2563eb] via-[#1d4ed8] to-[#0b1f5c] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(147,197,253,.4),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 opacity-[.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-32 pt-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pb-40 lg:pt-24">
        <div className="max-w-xl text-right">
          <h1 className="text-3xl font-black leading-[1.7] sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-6 text-base leading-9 text-blue-100 sm:text-lg">{subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/teacher-panel/register"
              onClick={onCtaClick}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 font-extrabold text-blue-700 shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaLabel}
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <a
              href="#why-teach"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/30 px-6 font-semibold transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaPlay className="text-xs" />
              آشنایی با مزایا
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-white/10" />
          <img src={imageSrc} alt="تدریس و تولید محتوای آموزشی" className="relative h-72 w-full rounded-3xl object-cover shadow-2xl shadow-blue-950/40 sm:h-96" />
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-900 shadow-xl sm:-right-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white">
              <FaGraduationCap size={20} />
            </span>
            <div>
              <p className="text-sm font-extrabold">مسیر مدرس شدن</p>
              <p className="mt-0.5 text-xs text-slate-500">از ثبت درخواست شروع کن</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
