function PublishCourseForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-16 flex flex-col items-center justify-center text-center" dir="rtl">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6"
      >
        {/* radiating sparkle lines */}
        <g stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
          <line x1="36" y1="2" x2="36" y2="10" />
          <line x1="36" y1="62" x2="36" y2="70" />
          <line x1="2" y1="36" x2="10" y2="36" />
          <line x1="62" y1="36" x2="70" y2="36" />
          <line x1="12.5" y1="12.5" x2="18" y2="18" />
          <line x1="54" y1="54" x2="59.5" y2="59.5" />
          <line x1="59.5" y1="12.5" x2="54" y2="18" />
          <line x1="18" y1="54" x2="12.5" y2="59.5" />
          <line x1="24" y1="5" x2="27" y2="12" />
          <line x1="45" y1="60" x2="48" y2="67" />
          <line x1="5" y1="48" x2="12" y2="45" />
          <line x1="60" y1="27" x2="67" y2="24" />
        </g>
        {/* circle */}
        <circle cx="36" cy="36" r="20" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2.5" />
        {/* checkmark */}
        <path
          d="M27 36.5L33 42.5L46 29.5"
          stroke="#14b8a6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <h2 className="text-gray-900 text-lg font-medium mb-2">
        اطلاعات شما با موفقیت ثبت شد
      </h2>
      <p className="text-gray-500 text-sm max-w-md leading-7 mb-8">
        برای بهتر دیده شدن پروفایلتان توسط دانشجویان، اطلاعات پروفایل خود را تکمیل کنید
      </p>

      <div className="flex items-center gap-4">
        <a
          href="/courses"
          className="px-6 py-2.5 rounded-lg border border-teal-600 text-teal-600 text-sm font-medium hover:bg-teal-50 transition-colors"
        >
          بازگشت به دوره‌ها
        </a>
        <a
          href="/profile/user-info"
          className="px-6 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          تکمیل اطلاعات پروفایل
        </a>
      </div>
    </div>
  );
}

export default PublishCourseForm;
