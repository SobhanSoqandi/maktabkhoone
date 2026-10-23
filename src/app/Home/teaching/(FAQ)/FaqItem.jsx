'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`rounded-2xl border transition-colors ${isOpen ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-200'}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-5 rounded-2xl px-5 py-5 text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:px-6"
      >
        <span className="font-bold leading-7 text-slate-800">{question}</span>
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          <FaChevronDown className="text-xs" />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-8 text-slate-600 sm:px-6">{answer}</p>
        </div>
      </div>
    </article>
  );
}
