import { useState } from "react";
import logo from "../assets/img/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative z-40">
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Sahara Ortho Logo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-medium text-gray-700">
            <li className="text-primary border-b-2 border-primary cursor-pointer">
              Home
            </li>
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">Services</li>
            <li className="cursor-pointer hover:text-primary">Certifications</li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
          </ul>

          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition whitespace-nowrap">
            Make an Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
            <li className="text-primary cursor-pointer">Home</li>
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">Services</li>
            <li className="cursor-pointer hover:text-primary">Certifications</li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>

            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition w-fit">
              Make an Appointment
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
