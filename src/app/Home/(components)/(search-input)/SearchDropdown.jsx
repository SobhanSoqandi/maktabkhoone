"use client";

import RecentSearches from "./RecentSearches";
import SearchResults from "./SearchResults";
import { recentSearches, searchResults } from "./search-data";

export default function SearchDropdown({
  open,
  search,
}) {
  if (!open) return null;

  const filteredResults = searchResults.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
        absolute
        top-14
        left-0
        right-0
        z-50
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-xl
      "
    >
      <RecentSearches
        searches={recentSearches}
      />

      <SearchResults
        results={filteredResults}
      />
    </div>
  );
}