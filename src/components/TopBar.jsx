export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      {/* Reduced horizontal padding */}
      <div className="w-full px-6 lg:px-10 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        
        {/* Left: Email & Phone (pushed left) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
          <a
            href="mailto:saharaortho68@gmail.com"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            <i className="bi bi-envelope-fill text-white"></i>
            <span>saharaortho68@gmail.com</span>
          </a>

          <a
            href="tel:+918700281458"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            <i className="bi bi-telephone-fill text-white"></i>
            <span>+91 8700281458</span>
          </a>
        </div>

        {/* Right: Social Icons (pushed right) */}
        <div className="flex justify-center md:justify-end gap-4 text-lg">
          <a href="https://wa.me/918700281458" target="_blank" className="text-white hover:opacity-80 transition">
            <i className="bi bi-whatsapp text-white"></i>
          </a>
          <a href="https://in.linkedin.com/in/sahara-ortho-65a6a9266" target="_blank" className="text-white hover:opacity-80 transition">
            <i className="bi bi-linkedin text-white"></i>
          </a>
          <a href="https://www.instagram.com/sahara_ortho" target="_blank" className="text-white hover:opacity-80 transition">
            <i className="bi bi-instagram text-white"></i>
          </a>
          <a href="https://www.facebook.com/share/1AWdeaWFAX/" target="_blank" className="text-white hover:opacity-80 transition">
            <i className="bi bi-facebook text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
