"use client";

import SearchResultItem from "./SearchResultItem";

export default function SearchResults({ results }) {
  return (
    <div className="p-5">
      <h3 className="mb-4 font-bold text-gray-800">نتایج جستجو</h3>

      {results.length === 0 ? (
        <div className="py-8 text-gray-400 text-center">نتیجه‌ای یافت نشد.</div>
      ) : (
        <div className="space-y-2 overflow-y-auto">
          {results.map((course) => (
            <SearchResultItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
