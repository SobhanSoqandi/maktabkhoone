import { req } from "@/app/(function)/request";
import Categories from "./Categories";

export default async function CategoriresFetch() {
  const result = await req("/categories/");
  return <Categories categories={result} />;
}
