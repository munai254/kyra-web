"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-500">
          KYRA MOTORS
        </h1>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/vehicles">Vehicles</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col gap-4 px-6 py-4 text-lg">
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

