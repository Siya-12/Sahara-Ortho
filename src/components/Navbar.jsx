import logo from "../assets/img/logo.jpg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LEFT: Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Sahara Ortho Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* RIGHT: Menu + CTA */}
        <div className="ml-auto flex items-center gap-10">

          {/* Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="text-primary border-b-2 border-primary cursor-pointer">
              Home
            </li>
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">Services</li>
            <li className="cursor-pointer hover:text-primary">Certifications</li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
          </ul>

          {/* CTA */}
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition">
            Make an Appointment
          </button>

        </div>
      </div>
    </nav>
  );
}
