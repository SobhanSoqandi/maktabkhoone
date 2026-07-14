import React from "react";
import Slider from "./(components)/slider/Slider";
import CategoriesCardFetch from "./(components)/(CategoriesCard)/CategoriesCardFetch";
import CoursesGrid from "../(cources)/CourcesGrid";

function page() {
  return (
    <div>
      <Slider />
      <CoursesGrid />
      <CategoriesCardFetch />
    </div>
  );
}

export default page;
