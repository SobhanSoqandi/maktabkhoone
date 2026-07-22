import { req } from "@/app/(function)/request";
import CategoriesCard from "./CategoriesCard";

export default async function CategoriesCardFetch() {
  const categories = await req("/categories");

  return <CategoriesCard categories={categories} />;
}