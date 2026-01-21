import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function VehicleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    notFound(); // shows 404 instead of blank page
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{vehicle.id}</h1>

      <Image
        src={vehicle.image}
        alt={vehicle.name}
        width={800}
        height={500}
        className="rounded-lg mt-4"
      />

      <p className="mt-4">{vehicle.name}</p>
    </div>
  );
}
