"use client";

import { useEffect, useRef, useState } from "react";

import CourseTabBar from "./CourseTabBar";
import { tabs } from "./tabs";

export default function CourseTabs({ sections }) {
  const [activeTab, setActiveTab] = useState(sections[0]?.id);

  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 600;

      let current = sections[0]?.id;

      sections.forEach((section) => {
        const el = sectionsRef.current[section.id];

        if (!el) return;

        if (scrollPosition >= el.offsetTop) {
          current = section.id;
        }
      });

      setActiveTab(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const el = sectionsRef.current[id];

    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 400,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CourseTabBar
        tabs={tabs}
        activeTab={activeTab}
        onChange={scrollToSection}
      />

      <div className="space-y-24">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionsRef.current[section.id] = el)}
          >
            {section.component}
          </section>
        ))}
      </div>
    </>
  );
}