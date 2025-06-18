"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <nav className="bg-black text-white font-serif h-[60px] w-full px-10 flex items-center justify-between mx-auto 2xl:w-[1500px]">
        <div>
          <h1 className="text-[32px] text-yellow-300">Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li className="hover:text-yellow-300 hover:underline text-[18px]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 hover:underline text-[18px]">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-yellow-300 hover:underline text-[18px]">
            <Link href="/projects">projects</Link>
          </li>
          <li className="hover:text-yellow-300 hover:underline text-[18px]">
            <Link href="/Skills">Skills</Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-400 px-5 py-4 text-black">
          <ul className="flex flex-col gap-3">
            <li className="bg-black/10 px-4 py-2 rounded-md shadow-md transition hover:text-yellow-300">
              <Link href="/">Home</Link>
            </li>
            <li className="bg-black/10 px-4 py-2 rounded-md shadow-md transition hover:text-yellow-300">
              <Link href="/About">About</Link>
            </li>
            <li className="bg-black/10 px-4 py-2 rounded-md shadow-md transition hover:text-yellow-300">
              <Link href="/projects">projects</Link>
            </li>
            <li className="bg-black/10 px-4 py-2 rounded-md shadow-md transition hover:text-yellow-300">
              <Link href="/Skills">Skills</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
