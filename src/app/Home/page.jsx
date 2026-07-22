import Slider from "./(components)/slider/Slider";
import CategoriesCard from "./(components)/CategoriesCard/CategoriesCard";
import { req } from "../(function)/request";
import PopularCourses from "../(components)/courses/PopularCourses";
import CourseFetchData from "../(components)/courses/CourseFetchData";
import NewestCourse from "../(components)/courses/NewestCourse";

export default async function Page() {
  const categories = await req("/categories/");

  return (
    <div>
      <Slider />
      <CategoriesCard categories={categories} />
      <CourseFetchData category={categories} />
      <NewestCourse categories={categories} />
    </div>
  );
}
