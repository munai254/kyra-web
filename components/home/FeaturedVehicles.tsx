// 4 Featured Vehicles Section
// Highlight best-selling cars

//components/FeaturedVehicls.tsx
import VehicleCard from "@/components/vehicles/vehicleCard";
import { vehicles } from "@/data/vehicles"

export function FeaturedVehicles() {
  return (
    <section className="p - 10">
      <h2 className="text -3x1 font-bold text-center mb-8">
        Featured Vehicles
      </h2>
      <div className="grid grid -cols-1 md:grid-cols -3 gap -6">
        {vehicles.slice(0,3).map((vehicle) =>{
          return (
            <VehicleCard key={vehicle.id}
              vehicle={vehicle} />
          );
        })}
      </div>
    </section>
  )
}
