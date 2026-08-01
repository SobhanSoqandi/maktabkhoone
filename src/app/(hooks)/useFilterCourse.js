import { useSearchParams } from "next/navigation";

export default function useFilterCourse() {
  const searchParams = useSearchParams();

  return {
    level: searchParams.get("level"),
    min_price: searchParams.get("min_price"),
    max_price: searchParams.get("max_price"),
    is_free: searchParams.get("is_free"),
    page: searchParams.get("page") || 1,
  };
}
