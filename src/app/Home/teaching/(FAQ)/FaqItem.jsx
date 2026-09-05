'use client'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 "
      >
        <FaChevronDown
          className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
        <span className="text-lg font-medium text-slate-900">{question}</span>
      </button>
      {isOpen && <div className="px-6 pb-5 text-slate-600 text-right">{answer}</div>}
    </div>
  );
}
