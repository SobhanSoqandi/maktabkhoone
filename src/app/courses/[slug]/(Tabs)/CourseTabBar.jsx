"use client";

import CourseTabItem from "./CourseTabItem";

export default function CourseTabBar({
  tabs,
  activeTab,
  onChange,
}) {
  return (
    <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">

      <div className="mx-auto container flex overflow-x-auto">

        {tabs.map((tab) => (
          <CourseTabItem
            key={tab.id}
            tab={tab}
            active={activeTab === tab.id}
            onClick={() => onChange(tab.id)}
          />
        ))}

      </div>

    </div>
  );
}