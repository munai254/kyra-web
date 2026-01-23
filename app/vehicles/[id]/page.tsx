// app/vehicles/[id]/page.tsx
import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function viewDetailsPage({ params }: {params : Promise<{id: string}>}) {
  // asynchronous access of `params.id`.
  const { id } = await params;
  
  // If vehicle does not exist, show 404 page
  const vehicle = vehicles.find(vehicle => vehicle.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Vehicle Image */}
        <div className="relative w-full h-87.5 md:h-112.5">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            priority
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Basic Vehicle Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            {vehicle.name}
          </h1>

          <p className="text-gray-300 mb-6">
            {vehicle.description ??
              "This premium vehicle is available at Kyra Imports. Contact us for more details."}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Spec label="Brand" value={vehicle.brand} />
            <Spec label="Year" value={vehicle.year} />
            <Spec label="Fuel Type" value={vehicle.fuel} />
            {vehicle.engine && <Spec label="Engine" value={vehicle.engine} />}
            {vehicle.transmission && (
              <Spec label="Transmission" value={vehicle.transmission} />
            )}
            {vehicle.drivetrain && (
              <Spec label="Drivetrain" value={vehicle.drivetrain} />
            )}
            {vehicle.mileage && (
              <Spec label="Mileage" value={vehicle.mileage} />
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="tel:+254700000000"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      {vehicle.features && vehicle.features.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">
            Key Features
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300">
            {vehicle.features.map((feature, index) => (
              <li
                key={index}
                className="bg-gray-900 p-3 rounded-lg border border-gray-800"
              >
                ✓ {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= IMAGE GALLERY ================= */}
      {vehicle.gallery && vehicle.gallery.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {vehicle.gallery.map((img, index) => (
              <div key={index} className="relative h-48">
                <Image
                  src={img}
                  alt={`${vehicle.name} image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/* ================= SMALL REUSABLE COMPONENT =================
   This keeps the page clean and readable */
function Spec({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

