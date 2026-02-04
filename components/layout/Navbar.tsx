"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex justify-between items-center">

        {/* LOGO */}
       
        <div className="relative items-ce bg-white-500 h-15 w-15 md:h-12 md:w-12 overflow-hidden rounded-full transition-transform duration-300 hover:scale-200">
        <Image
          src="/kyra-imports-logo.svg"
          alt="Kyra Motors Logo"
          fill
          priority
          className="object-contain"
        />
          </div>


        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/vehicles">Vehicles</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

            
        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col gap-3 px-4 py-4 text-base">
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/vehicles">Vehicles</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
 