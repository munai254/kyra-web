// app/vehicles/page.tsx
import VehicleCard from "@/components/vehicles/vehicleCard";
import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Available Vehicles
      </h1>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
