import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/data/vehicles"; // ✅ reuse shared type

type Props = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: Props) {
  return (
    <article className="bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/40 transition overflow-hidden">
      
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative w-full h-52 flex items-center justify-center bg-black">
        <div className="relative w-[90%] h-[90%] rounded-lg overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.5)]">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false} // keep cards lightweight
          />
          <p className="text-gray-400 text-sm mt-2 line-clamp-2"> {vehicle.description}
</p>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4 text-white">
        <h3 className="font-bold text-lg">{vehicle.name}</h3>

       { /*<div className="text-sm text-gray-400 mt-2 flex justify-between">
          <span>{vehicle.year}</span>
          <span>{vehicle.fuel}</span>
        </div>*/}

        {/* View Details → Dynamic route */}
        <Link
          href={`/vehicles/${vehicle.id}`}
          className="inline-block mt-4 text-blue-400 font-medium hover:text-blue-300 hover:underline"
        >
           Details 
        </Link>
      </div>
    </article>
  );
}



