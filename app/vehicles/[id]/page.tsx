import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function viewDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const vehicle = vehicles.find(vehicle => vehicle.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* ================= HERO SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Vehicle Image */}
        <div className="relative w-full h-87.5 md:h-112.5 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>

        {/* Basic Vehicle Info */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {vehicle.name}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {vehicle.description ??
              "This premium vehicle is available at Kyra Imports. Contact us for more details."}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Spec label="Brand" value={vehicle.brand} />
            <Spec label="Year" value={vehicle.year} />
            <Spec label="Fuel Type" value={vehicle.fuel} />
            {vehicle.engine && <Spec label="Engine" value={vehicle.engine} />}
            {vehicle.transmission && <Spec label="Transmission" value={vehicle.transmission} />}
            {vehicle.drivetrain && <Spec label="Drivetrain" value={vehicle.drivetrain} />}
            {vehicle.mileage && <Spec label="Mileage" value={vehicle.mileage} />}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="tel:+254724809009"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/+254724809009"
              target="_blank"
              className="border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      {vehicle.features && vehicle.features.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Key Features
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vehicle.features.map((feature, index) => (
              <li
                key={index}
                className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg border border-gray-300 dark:border-gray-800 transition-transform transform hover:scale-105"
              >
                <span className="text-gray-800 dark:text-gray-200">✓ {feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= IMAGE GALLERY ================= */}
      {vehicle.gallery && vehicle.gallery.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {vehicle.gallery.map((img, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Image
                  src={img}
                  alt={`${vehicle.name} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/* ================= SMALL REUSABLE COMPONENT ================= */
function Spec({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg border border-gray-300 dark:border-gray-800 transition-transform transform hover:scale-105">
      <p className="text-gray-500 dark:text-gray-400 text-xs">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  );
}
