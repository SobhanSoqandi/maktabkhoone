"use client";

import { useState } from "react";
import PopularCoursesHeader from "./PopularCoursesHeader";
import PopularCoursesSlider from "./PopularCoursesSlider";

export default function PopularCourses({ categories }) {
  const [activeCategory, setActiveCategory] = useState("all");

    
  

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <PopularCoursesHeader
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <PopularCoursesSlider activeCategory={activeCategory} />
    </section>
  );
}