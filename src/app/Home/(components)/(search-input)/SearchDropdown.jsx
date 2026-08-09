"use client";

import useGet from "@/app/(hooks)/useGet";
import RecentSearches from "./RecentSearches";
import SearchResults from "./SearchResults";
import { recentSearches, searchResults } from "./search-data";

export default function SearchDropdown({ open, search }) {
  const { data: filteredResults } = useGet(
    `course?page=1&page_size=3&search=${search}`,
    [search],
  );
  console.log(filteredResults);
  if (!open) return null;
  return (
    <div className="top-14 right-0 left-0 z-50 absolute bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
      <RecentSearches searches={recentSearches} />

      <SearchResults results={filteredResults?.items ?? []} />
    </div>
  );
}
