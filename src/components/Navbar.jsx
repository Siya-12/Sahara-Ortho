// import { useState } from "react";
// import logo from "../assets/img/logo.jpg";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow relative z-40">
//       {/* Main bar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src={logo}
//             alt="Sahara Ortho Logo"
//             className="h-14 sm:h-16 w-auto object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-10">
//           <ul className="flex gap-8 font-medium text-gray-700">
//             <li className="text-primary border-b-2 border-primary cursor-pointer">
//               Home
//             </li>
//             <li className="cursor-pointer hover:text-primary">About</li>
//             <li className="cursor-pointer hover:text-primary">Products</li>
//             <li className="cursor-pointer hover:text-primary">Certifications</li>
//             <li className="cursor-pointer hover:text-primary">Contact Us</li>
//           </ul>

//           <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition whitespace-nowrap">
//             Make an Appointment
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-2xl text-gray-700 bg-white"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
//           <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
//             <li className="text-primary cursor-pointer">Home</li>
//             <li className="cursor-pointer hover:text-primary">About</li>
//             <li className="cursor-pointer hover:text-primary">Products</li>
//             <li className="cursor-pointer hover:text-primary">Certifications</li>
//             <li className="cursor-pointer hover:text-primary">Contact Us</li>

//             <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition w-fit">
//               Make an Appointment
//             </button>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import BusinessEnquiryModal from "../components/BusinessEnquiryModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-primary font-semibold"
      : "hover:text-black";

  return (
    <>
      <nav className="bg-white shadow relative z-40">
        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Sahara Ortho Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 font-medium text-gray-700">
              <li className={isActive("/")}>
                <Link to="/">Home</Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive("/products")}>
                <Link to="/products">Products</Link>
              </li>
              <li className={isActive("/certifications")}>
                <Link to="/certifications">Certifications</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <button
              onClick={() => setOpenEnquiry(true)}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition whitespace-nowrap"
            >
              Make an Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700 bg-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
              <li>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
              </li>
              <li>
                <Link to="/certifications" onClick={() => setOpen(false)}>Certifications</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              </li>

              <button
                onClick={() => {
                  setOpen(false);
                  setOpenEnquiry(true);
                }}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-500 transition w-fit"
              >
                Make an Appointment
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* ✅ MODAL MUST BE HERE */}
      <BusinessEnquiryModal
        isOpen={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />
    </>
  );
}
