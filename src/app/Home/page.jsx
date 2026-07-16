import Slider from "./(components)/slider/Slider";
import CategoriesCard from "./(components)/(CategoriesCard)/CategoriesCard";
import PopularCourses from "../(cources)/PopularCourses";
import { req } from "../(function)/request";

export default async function Page() {
  const categories = await req("/categories/");

  return (
    <div>
      <Slider />

      <PopularCourses categories={categories} />

      <CategoriesCard categories={categories} />
    </div>
  );
}