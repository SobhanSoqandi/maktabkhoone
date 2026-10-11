
'use client';

import Link from 'next/link';
import { FaArrowLeft, FaGraduationCap, FaPlay } from 'react-icons/fa';

export default function Hero({ imageSrc, title, subtitle, ctaLabel = 'شروع تدریس و ثبت دوره', onCtaClick }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#071f35]">
      <div className="absolute inset-0 -z-20">
        <img src={imageSrc} alt="" className="h-full w-full object-cover opacity-25" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#071f35] via-[#071f35]/95 to-[#071f35]/55" />
      <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
        <div className="max-w-2xl text-right">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <FaGraduationCap />
            دانش تو، شروع یک مسیر تازه
          </div>

          <h1 className="text-3xl font-black leading-[1.7] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title || 'تجربه‌ات را به یک دوره آموزشی تبدیل کن'}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-9 text-slate-300 sm:text-lg">
            {subtitle || 'دانسته‌ها و تجربه‌های حرفه‌ای‌ات را با دیگران به اشتراک بگذار. دوره‌ات را ثبت کن و مسیر تدریس را شروع کن.'}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/teacher-panel/register"
              onClick={onCtaClick}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-[#071f35] shadow-lg shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              {ctaLabel}
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            </Link>

            <a
              href="#why-teach"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5"
            >
              <FaPlay className="text-xs text-cyan-300" />
              آشنایی با مزایا
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              ثبت دوره به‌صورت آنلاین
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              شروع مسیر تدریس
            </span>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:block">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/10 rotate-2" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/20">
            <img
              src={imageSrc}
              alt="تدریس و تولید محتوای آموزشی"
              className="h-[390px] w-full rounded-xl object-cover"
            />
            <div className="absolute inset-x-2 bottom-2 rounded-b-xl bg-gradient-to-t from-[#071f35] via-[#071f35]/90 to-transparent px-6 pb-6 pt-16">
              <p className="text-sm font-medium text-cyan-300">از تجربه تا آموزش</p>
              <p className="mt-2 text-xl font-bold text-white">اولین دوره‌ات را بساز</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                دانشت می‌تواند نقطه شروع یادگیری دیگران باشد.
              </p>
            </div>
          </div>

          <div className="absolute -right-5 top-10 flex items-center gap-3 rounded-xl border border-white/10 bg-[#102f46] px-4 py-3 shadow-xl">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
              <FaGraduationCap size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">مسیر مدرس شدن</p>
              <p className="mt-1 text-xs text-slate-400">از ثبت دوره شروع کن</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-cyan-300/40 to-transparent" />
    </section>
  );
}
