
"use client";

import { FiCheck } from "react-icons/fi";

function Stepper({ steps = [], current = 1 }) {
    if (!steps.length) return null;

    const safeCurrent = Math.min(Math.max(Number(current) || 1, 1), steps.length);
    const progress = steps.length > 1 ? ((safeCurrent - 1) / (steps.length - 1)) * 100 : 0;

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-white px-4 py-7 shadow-[0_8px_30px_rgba(37,99,235,0.06)] sm:px-7 sm:py-9">
            <div className="relative mx-auto w-full max-w-3xl">
                <div className="absolute left-0 right-0 top-5 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="absolute right-0 top-0 h-full rounded-full bg-gradient-to-l from-blue-700 via-blue-600 to-sky-400 transition-all duration-700 ease-in-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="relative flex items-start justify-between gap-2">
                    {steps.map((label, index) => {
                        const stepNum = index + 1;
                        const done = stepNum < safeCurrent;
                        const active = stepNum === safeCurrent;

                        return (
                            <div key={`${label}-${index}`} className="relative z-10 flex min-w-0 flex-1 flex-col items-center gap-3">
                                <div
                                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                                        done
                                            ? "border-4 border-white bg-blue-600 text-white shadow-[0_0_0_2px_rgba(37,99,235,0.25)]"
                                            : active
                                            ? "border-4 border-white bg-blue-600 text-white shadow-[0_0_0_4px_rgba(59,130,246,0.17),0_5px_18px_rgba(37,99,235,0.3)] scale-110"
                                            : "border-2 border-slate-200 bg-white text-slate-400"
                                    }`}
                                >
                                    {done ? (
                                        <FiCheck className="h-4 w-4 stroke-[3] sm:h-5 sm:w-5" />
                                    ) : (
                                        <span className={`text-sm font-bold sm:text-base ${active ? "text-white" : "text-slate-400"}`}>
                                            {stepNum}
                                        </span>
                                    )}

                                    {active && (
                                        <span className="absolute inset-[-7px] -z-10 animate-pulse rounded-full bg-blue-400/10" />
                                    )}
                                </div>

                                <span
                                    className={`max-w-full text-center text-[11px] leading-5 transition-colors duration-300 sm:text-sm ${
                                        active
                                            ? "font-extrabold text-blue-700"
                                            : done
                                            ? "font-semibold text-blue-600"
                                            : "font-medium text-slate-400"
                                    }`}
                                >
                                    {label}
                                </span>

                                {active && (
                                    <span className="h-1 w-6 rounded-full bg-blue-600 sm:w-8" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Stepper;