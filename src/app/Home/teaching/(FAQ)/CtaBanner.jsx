'use client';

import { FaArrowLeft } from 'react-icons/fa';

export default function CtaBanner({ title, subtitle, ctaLabel, onCtaClick }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-bl from-[#2563eb] via-[#1d4ed8] to-[#0b1f5c] px-6 py-12 text-center shadow-2xl shadow-blue-900/20 sm:px-10 sm:py-16">
      <div className="absolute -left-16 -top-24 -z-10 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
      <h2 className="text-2xl font-black leading-relaxed text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl leading-8 text-blue-100">{subtitle}</p>
      <button
        onClick={onCtaClick}
        className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 font-extrabold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {ctaLabel}
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
      </button>
    </div>
  );
}
