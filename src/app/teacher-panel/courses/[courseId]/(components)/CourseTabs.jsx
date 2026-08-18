"use client";

const tabs = [
  { id: "info", label: "اطلاعات دوره" },
  { id: "sessions", label: "فصل‌ها" },
];

export function CourseTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex bg-teal-600 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={[
            "flex-1 px-4 py-4 text-sm font-semibold transition-colors sm:flex-none sm:px-10",
            activeTab === tab.id
              ? "bg-teal-800 text-white"
              : "text-white/80 hover:bg-teal-800",
          ].join(" ")}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
