'use client';

import { FaArrowLeft } from 'react-icons/fa';

export default function CtaBanner({ title, subtitle, ctaLabel, onCtaClick }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#08243a] via-[#0b3850] to-[#087e8b] px-6 py-10 text-center shadow-xl shadow-cyan-950/10 sm:px-10 sm:py-14">
      <div className="absolute -left-12 -top-20 -z-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 -z-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <span className="text-sm font-bold text-cyan-200">آماده‌ای شروع کنی؟</span>
      <h2 className="mt-3 text-2xl font-black leading-relaxed text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 leading-8 text-slate-200">{subtitle}</p>
      <button onClick={onCtaClick} className="group mt-7 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-extrabold text-[#08243a] transition hover:-translate-y-1 hover:bg-cyan-50">
        {ctaLabel}
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
      </button>
    </div>
  );
}
