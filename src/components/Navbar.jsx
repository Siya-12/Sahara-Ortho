export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            S
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            SAHARA <span className="text-primary">ORTHO</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="text-primary border-b-2 border-primary">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Certifications</li>
          <li>Contact Us</li>
        </ul>

        {/* CTA */}
        <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary">
          Make an Appointment
        </button>

      </div>
    </nav>
  )
}
