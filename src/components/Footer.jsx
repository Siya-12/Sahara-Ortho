import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/img/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

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

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
         <SocialIcon Icon={Facebook} link="https://www.facebook.com/share/1AWdeaWFAX/" />
         <SocialIcon Icon={Instagram} link="https://www.instagram.com/sahara_ortho?igsh=bm84c3B1eTB6d3kw" />
         <SocialIcon Icon={Linkedin} link="https://in.linkedin.com/in/sahara-ortho-65a6a9266" />
         <SocialIcon Icon={Youtube} link="https://youtube.com/@orthopaediciansuresh2137?si=K7ABBO0l_SSclJ7U" />
         </div>

         </div>

        {/* Our Products */}
        <FooterColumn title="Our Products">
          <FooterLink text="Ortho Rehab Products" />
          <FooterLink text="Orthopaedic Supports" />
          <FooterLink text="Surgical Products" />
          <FooterLink text="Post-Operative Aids" />
        </FooterColumn>

        {/* Quick Links */}
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
            Sahara Ortho <br />
            FF Office, Industrial Area <br />
            New Delhi – India
          </p>

          <h4 className="font-semibold text-lg mt-6 mb-3 border-b border-red-200 pb-2">
            Factory Address
          </h4>
          <p className="text-sm text-red-50 leading-relaxed">
            Manufacturing Unit <br />
            Industrial Zone <br />
            India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-center text-red-100">
          © 2025 Sahara Ortho. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

/* Reusable Components */
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
      <Icon size={18} />
    </a>
  );
}
