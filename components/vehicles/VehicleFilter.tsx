"use client";
import { useState } from "react";

type FilterValues = {
  brand: string;
  fuel: string;
  price: string;
};

type Props = {
  onFilterChange: (filters: FilterValues) => void;
};

export function VehicleFilter({ onFilterChange }: Props) {
  // Track the selected values
  const [filters, setFilters] = useState<FilterValues>({
    brand: "",
    fuel: "",
    price: "",
  });

  // Handle any select change
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;

    // Update state
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    // Trigger callback
    onFilterChange(updatedFilters);
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Brand Filter */}
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">ALL BRANDS</option>
          <option value="Toyota">Toyota</option>
          <option value="Nissan">Nissan</option>
          <option value="BMW">BMW</option>
        </select>

        {/* Fuel Filter */}
        <select
          name="fuel"
          value={filters.fuel}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">ALL FUEL TYPES</option>
          <option value="Petrol">PETROL</option>
          <option value="Diesel">DIESEL</option>
        </select>

        {/* Price Filter */}
        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">ALL PRICES</option>
          <option value="1000000">BELOW 1M</option>
          <option value="3000000">BELOW 3M</option>
          <option value="5000000">BELOW 5M</option>
        </select>
      </div>
    </div>
  );
}

