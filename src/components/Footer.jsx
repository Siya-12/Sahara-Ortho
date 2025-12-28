// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Phone,
//   Mail,
// } from "lucide-react";
// import logo from "../assets/img/logo.jpg";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
      
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand Info */}
//         <div>
//           <img
//             src={logo}
//             alt="Sahara Ortho"
//             className="h-14 mb-4 bg-white p-2 rounded"
//           />

//           <p className="text-sm leading-relaxed text-red-50">
//             Sahara Ortho is a trusted manufacturer of premium orthopaedic
//             rehabilitation and surgical products, committed to quality,
//             innovation, and patient care.
//           </p>

//           <div className="mt-4 space-y-2 text-sm">
//             <p className="flex items-center gap-2">
//               <Phone size={16} /> +91 87002 81458
//             </p>
//             <p className="flex items-center gap-2">
//               <Mail size={16} /> saharaortho68@gmail.com
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-5">
//          <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
//          <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho?igsh=bm84c3B1eTB6d3kw" />
//          <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
//          <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137?si=K7ABBO0l_SSclJ7U" />
//          </div>

//          </div>

//         {/* Our Products */}
//         <FooterColumn title="Our Products">
//           <FooterLink text="Ortho Rehab Products" />
//           <FooterLink text="Orthopaedic Supports" />
//           <FooterLink text="Surgical Products" />
//           <FooterLink text="Post-Operative Aids" />
//         </FooterColumn>

//         {/* Quick Links */}
//         <FooterColumn title="Quick Links">
//           <FooterLink text="Home" />
//           <FooterLink text="About Us" />
//           <FooterLink text="Certifications" />
//           <FooterLink text="Contact Us" />
//           <FooterLink text="Privacy Policy" />
//           <FooterLink text="Terms & Conditions" />
//         </FooterColumn>

//         {/* Address */}
//         <div>
//           <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
//             Office Address
//           </h4>
//           <p className="text-sm text-red-50 leading-relaxed">
//             Sahara Ortho <br />
//             FF Office, Industrial Area <br />
//             New Delhi – India
//           </p>

//           <h4 className="font-semibold text-lg mt-6 mb-3 border-b border-red-200 pb-2">
//             Factory Address
//           </h4>
//           <p className="text-sm text-red-50 leading-relaxed">
//             Manufacturing Unit <br />
//             Industrial Zone <br />
//             India
//           </p>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-red-300">
//         <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-center text-red-100">
//           © 2025 Sahara Ortho. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* Reusable Components */
// function FooterColumn({ title, children }) {
//   return (
//     <div>
//       <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
//         {title}
//       </h4>
//       <ul className="space-y-2 text-sm">{children}</ul>
//     </div>
//   );
// }

// function FooterLink({ text }) {
//   return (
//     <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
//       {text}
//     </li>
//   );
// }

// function SocialIcon({ Icon, link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition"
//     >
//       <Icon size={18} />
//     </a>
//   );
// }


// // import {
// //   Facebook,
// //   Instagram,
// //   Linkedin,
// //   Youtube,
// //   Phone,
// //   Mail,
// // } from "lucide-react";
// // import logo from "../assets/img/logo.jpg";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
      
// //       {/* Main Footer */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

// //           {/* Brand Info */}
// //           <div className="text-center sm:text-left">
// //             <img
// //               src={logo}
// //               alt="Sahara Ortho"
// //               className="h-14 mx-auto sm:mx-0 mb-4 bg-white p-2 rounded"
// //             />

// //             <p className="text-sm leading-relaxed text-red-50 max-w-sm mx-auto sm:mx-0">
// //               Sahara Ortho is a trusted manufacturer of premium orthopaedic
// //               rehabilitation and surgical products, committed to quality,
// //               innovation, and patient care.
// //             </p>

// //             <div className="mt-4 space-y-2 text-sm">
// //               <p className="flex items-center justify-center sm:justify-start gap-2">
// //                 <Phone size={16} /> +91 87002 81458
// //               </p>
// //               <p className="flex items-center justify-center sm:justify-start gap-2 break-all">
// //                 <Mail size={16} /> saharaortho68@gmail.com
// //               </p>
// //             </div>

// //             {/* Social Icons */}
// //             <div className="flex justify-center sm:justify-start gap-4 mt-5">
// //               <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
// //               <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho?igsh=bm84c3B1eTB6d3kw" />
// //               <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
// //               <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
// //             </div>
// //           </div>

// //           {/* Our Products */}
// //           <FooterColumn title="Our Products">
// //             <FooterLink text="Ortho Rehab Products" />
// //             <FooterLink text="Orthopaedic Supports" />
// //             <FooterLink text="Surgical Products" />
// //             <FooterLink text="Post-Operative Aids" />
// //           </FooterColumn>

// //           {/* Quick Links */}
// //           <FooterColumn title="Quick Links">
// //             <FooterLink text="Home" />
// //             <FooterLink text="About Us" />
// //             <FooterLink text="Certifications" />
// //             <FooterLink text="Contact Us" />
// //             <FooterLink text="Privacy Policy" />
// //             <FooterLink text="Terms & Conditions" />
// //           </FooterColumn>

// //           {/* Address */}
// //           <div className="text-center sm:text-left">
// //             <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
// //               Company Address
// //             </h4>
// //             <p className="text-sm text-red-50 leading-relaxed">
// //               Sahara Ortho <br />
// //               FF Office, Industrial Area <br />
// //               New Delhi – India
// //             </p>

// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="border-t border-red-300">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-xs sm:text-sm text-center text-red-100">
// //           © 2025 Sahara Ortho. All Rights Reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // /* ---------- Reusable Components ---------- */

// // function FooterColumn({ title, children }) {
// //   return (
// //     <div className="text-center sm:text-left">
// //       <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
// //         {title}
// //       </h4>
// //       <ul className="space-y-2 text-sm">{children}</ul>
// //     </div>
// //   );
// // }

// // function FooterLink({ text }) {
// //   return (
// //     <li className="cursor-pointer hover:text-white hover:translate-x-1 transition">
// //       {text}
// //     </li>
// //   );
// // }

// // function SocialIcon({ Icon, link }) {
// //   return (
// //     <a
// //       href={link}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition"
// //     >
// //       <Icon size={18} />
// //     </a>
// //   );
// // }


// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Phone,
//   Mail,
//   ChevronDown,
// } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/img/logo.jpg";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

//         {/* Brand (Always Visible) */}
//         <div className="text-center max-w-md mx-auto">
//           <img
//             src={logo}
//             alt="Sahara Ortho"
//             className="h-12 mx-auto mb-3 bg-white p-2 rounded"
//           />

//           <p className="text-sm text-red-50 line-clamp-2">
//             Trusted manufacturer of premium orthopaedic rehabilitation &
//             surgical products.
//           </p>

//           <div className="mt-4 space-y-2 text-sm">
//             <p className="flex items-center justify-center gap-2">
//               <Phone size={15} /> +91 87002 81458
//             </p>
//             <p className="flex items-center justify-center gap-2 break-all">
//               <Mail size={15} /> saharaortho68@gmail.com
//             </p>
//           </div>

//           <div className="flex justify-center gap-4 mt-4">
//             <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
//             <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho" />
//             <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
//             <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
//           </div>
//         </div>

//         {/* Mobile Accordions */}
//         <div className="mt-8 space-y-4 md:hidden">
//           <Accordion title="Our Products" className="text-black">
//             <p>Ortho Rehab Products</p>
//             <p>Orthopaedic Supports</p>
//             <p>Surgical Products</p>
//             <p>Post-Operative Aids</p>
//           </Accordion>

//           <Accordion title="Quick Links">
//             <p>Home</p>
//             <p>About Us</p>
//             <p>Certifications</p>
//             <p>Contact Us</p>
//             <p>Privacy Policy</p>
//             <p>Terms & Conditions</p>
//           </Accordion>

//           <Accordion title="Company Address">
//             <p>
//               Sahara Ortho <br />
//               FF Office, Industrial Area <br />
//               New Delhi – India
//             </p>
//           </Accordion>
//         </div>

//         {/* Desktop Footer */}
//         <div className="hidden md:grid grid-cols-4 gap-10 mt-12">
//           <FooterColumn title="Our Products">
//             <FooterLink text="Ortho Rehab Products" />
//             <FooterLink text="Orthopaedic Supports" />
//             <FooterLink text="Surgical Products" />
//             <FooterLink text="Post-Operative Aids" />
//           </FooterColumn>

//           <FooterColumn title="Quick Links">
//             <FooterLink text="Home" />
//             <FooterLink text="About Us" />
//             <FooterLink text="Certifications" />
//             <FooterLink text="Contact Us" />
//             <FooterLink text="Privacy Policy" />
//             <FooterLink text="Terms & Conditions" />
//           </FooterColumn>

//           <FooterColumn title="Company Address">
//             <p className="text-sm">
//               Sahara Ortho <br />
//               FF Office, Industrial Area <br />
//               New Delhi – India
//             </p>
//           </FooterColumn>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-red-300 text-center text-xs py-3">
//         © 2025 Sahara Ortho. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// /* ---------- Accordion ---------- */
// function Accordion({ title, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border border-white/30 rounded-lg bg-primary">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-800"
//       >
//         {title}
//         <ChevronDown
//           size={16}
//           className={`transition ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div className="px-4 pb-4 text-sm space-y-2 text-red-50">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------- Reusable ---------- */
// function FooterColumn({ title, children }) {
//   return (
//     <div>
//       <h4 className="font-semibold mb-4 border-b border-red-200 pb-2">
//         {title}
//       </h4>
//       <div className="space-y-2 text-sm">{children}</div>
//     </div>
//   );
// }

// function FooterLink({ text }) {
//   return <p className="hover:text-white cursor-pointer">{text}</p>;
// }

// function SocialIcon({ Icon, link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="p-2 rounded-full bg-white text-blue-600"
//     >
//       <Icon size={16} />
//     </a>
//   );
// }













import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import logo from "../assets/img/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden max-w-md mx-auto px-4 py-10">

        {/* Brand */}
        <div className="text-center">
          <img
            src={logo}
            alt="Sahara Ortho"
            className="h-12 mx-auto mb-3 bg-white p-2 rounded"
          />

          <p className="text-sm text-red-50 line-clamp-2">
            Trusted manufacturer of premium orthopaedic rehabilitation &
            surgical products.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex justify-center items-center gap-2">
              <Phone size={14} /> +91 87002 81458
            </p>
            <p className="flex justify-center items-center gap-2 break-all">
              <Mail size={14} /> saharaortho68@gmail.com
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
            <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho" />
            <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
            <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-8 space-y-4">
          <Accordion title="Our Products">
               <p>Ortho Rehab Products</p>
            <p>Orthopaedic Supports</p>
            <p>Surgical Products</p>
            <p>Post-Operative Aids</p>
           
          </Accordion>

          <Accordion title="Quick Links">
            <p>Home</p>
            <p>About Us</p>
            <p>Certifications</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </Accordion>

          <Accordion title="Company Address">
            <p>
              Unit No.113, First Floor,<br />Wegmans Prinston Plaza,<br />Plot
No.CSC, Block-H,<br />Sector-18, Rohini,<br />North West
Delhi-110089
            </p>
          </Accordion>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER (UNCHANGED) ================= */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <img
              src={logo}
              alt="Sahara Ortho"
              className="h-14 mb-4 bg-white p-2 rounded"
            />

            <p className="text-sm leading-relaxed text-red-50">
              Sahara Ortho is a trusted manufacturer of premium orthopaedic
              rehabilitation and surgical products, committed to quality,
              innovation, and patient care.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 87002 81458
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> saharaortho68@gmail.com
              </p>
            </div>

            <div className="flex gap-4 mt-5">
              <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
              <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho" />
              <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
              <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137" />
            </div>
          </div>

          {/* Products */}
          <FooterColumn title="Our Products">
            <FooterLink text="Ortho Rehab Products" />
            <FooterLink text="Orthopaedic Supports" />
            <FooterLink text="Surgical Products" />
            <FooterLink text="Post-Operative Aids" />
          </FooterColumn>

          {/* Links */}
          <FooterColumn title="Quick Links">
            <FooterLink text="Home" />
            <FooterLink text="About Us" />
            <FooterLink text="Certifications" />
            <FooterLink text="Contact Us" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms & Conditions" />
          </FooterColumn>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
              Office Address
            </h4>
            <p className="text-sm text-red-50 leading-relaxed">
             Unit No.113, First Floor,<br />Wegmans Prinston Plaza,<br />Plot
No.CSC, Block-H,<br />Sector-18, Rohini,<br />North West
Delhi-110089
            </p>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-300 text-center text-xs py-3">
        © 2025 Sahara Ortho. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/30 rounded-lg bg-primary text-white">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-800"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 text-sm space-y-2 text-white">
          {children}
        </div>
      )}
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4 border-b border-red-200 pb-2">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ text }) {
  return (
    <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
      {text}
    </li>
  );
}

function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition"
    >
      <Icon size={16} />
    </a>
  );
}


