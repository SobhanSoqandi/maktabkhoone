function Stepper({ steps, current }) {
  const progress = ((current - 1) / (steps.length - 1)) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <div className="relative flex justify-between">
        <div className="absolute top-5 right-0 left-0 h-0.5 bg-gray-200">
          <div
            className="absolute top-0 right-0 h-0.5 bg-teal-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((label, i) => {
          const stepNum = i + 1;
          const done = stepNum < current;
          const active = stepNum === current;

          return (
            <div key={label} className="relative z-10 flex flex-col items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  done
                    ? "bg-teal-600 text-white"
                    : active
                    ? "bg-teal-600 text-white ring-4 ring-teal-100 scale-110 shadow-lg shadow-teal-600/20"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
                }`}
              >
                {done ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-sm whitespace-nowrap ${
                  active ? "text-teal-700 font-semibold" : done ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;
