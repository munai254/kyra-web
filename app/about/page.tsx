"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      
      {/* Page Heading */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Kyra Imports
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Kyra Imports is a trusted vehicle import company dedicated to helping
          clients find reliable, premium, and affordable vehicles from
          international markets.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To simplify vehicle importing by offering transparent pricing,
            trusted sourcing, and seamless delivery — ensuring every customer
            drives away satisfied.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Trusted global suppliers</li>
            <li>✔ Competitive pricing</li>
            <li>✔ Quality inspection guaranteed</li>
            <li>✔ Customer-first service</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Ride?
        </h2>
        <p className="text-gray-400 mb-8">
          Browse our available vehicles or get in touch with our team today.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={() => router.push("/vehicles")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md font-semibold transition"
          >
            Browse Vehicles
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-md font-semibold transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
