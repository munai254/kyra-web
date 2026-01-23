// components/vehicles/VehicleCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: Props) {
  return (
    <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                        rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-500
                        transform hover:-translate-y-2 hover:scale-105 overflow-hidden">

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative w-full h-56 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-t-xl overflow-hidden">
        <div className="relative w-[90%] h-[90%] rounded-xl overflow-hidden 
                        shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
                        transition-shadow duration-500">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4 text-gray-900 dark:text-gray-100 flex flex-col">
        <h3 className="font-bold text-xl mb-2">{vehicle.name}</h3>

        {/* ================= VEHICLE SPECS ================= */}
       {/* <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex justify-between">
          <span>{vehicle.year}</span>
          <span>{vehicle.fuel}</span>
        </div>*/}

        {/* ================= VIEW DETAILS BUTTON ================= */}
        <Link
          href={`/vehicles/${vehicle.id}`}
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-white 
                     rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300
                     transform hover:scale-105 text-center"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
