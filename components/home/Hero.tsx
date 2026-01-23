//2 HERO SECTION (High Conversion Area)
// components /Hero.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Hero() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      className="relative h-[90vh] w-full flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-car.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-6 md:mx-20 text-white">
        
        {/* Brand welcome */}
        <p
          className={`uppercase tracking-widest text-sm md:text-base text-blue-400 mb-4
          opacity-0 translate-y-6 transition-all duration-1000
          ${animate ? "opacity-100 translate-y-0" : ""}`}
        >
          Welcome to Kyra Imports
        </p>

        {/* Captivating main heading */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight
          opacity-0 translate-y-6 transition-all duration-1000 delay-200
          ${animate ? "opacity-100 translate-y-0" : ""}`}
        >
          Drive the Car
          <span className="block text-blue-400 mt-2">
            You’ve Always Dreamed Of
          </span>
        </h1>

        {/* Supporting value statement */}
        <p
          className={`mt-6 max-w-2xl text-base md:text-lg text-gray-200 leading-relaxed
          opacity-0 translate-y-6 transition-all duration-1000 delay-400
          ${animate ? "opacity-100 translate-y-0" : ""}`}
        >
          We help you find premium, reliable, and affordable vehicles 
          handpicked from trusted dealers worldwide and delivered with confidence.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/vehicles")}
          className={`mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md
          font-semibold text-white text-lg transition-all
          opacity-0 translate-y-6 duration-1000 delay-600
          ${animate ? "opacity-100 translate-y-0" : ""}`}
        >
         Available Vehicles
        </button>
      </div>
    </section>
  );
}



