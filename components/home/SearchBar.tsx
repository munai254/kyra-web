// 3 Search & Filter Bar
//components/SearchBar.tsx
"use client";

import { useRouter } from "next/navigation";

export function SearchBar() {
  const router = useRouter();

  const handleSearch = () => {
    // Example: navigate to vehicle listing page
    router.push("/vehicles");
  };

  return (
    <div className="bg-black shadow-lg p-6 rounded -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="border p-2 rounded">
          <option>Price Range</option>
          <option>Below 1M</option>
          <option>1M - 3M</option>
        </select>

        <select className="border p-2 rounded">
          <option>Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded px-4"
        >
          Search
        </button>
      </div>
    </div>
  );
}
