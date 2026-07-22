import { req } from "@/app/(function)/request";
import React from "react";
import PopularCourses from "./PopularCourses";

export default async function CourseFetchData({ category }) {
  //   const courses = await req("/course", {
  //     page: 1,
  //     page_size: 7,
  //     sort: "popular",
  //   });
  return <PopularCourses categories={category} />;
}
