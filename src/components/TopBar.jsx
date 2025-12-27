export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
        <div className="flex gap-6">
          <span>✉ saharaortho68@gmail.com</span>
          <span>📞 +91 8700281458</span>
        </div>
       <div className="flex gap-4 text-xl text-white">
  <a href="https://wa.me/918700281458" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-whatsapp text-white"></i>
  </a>

  <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-linkedin text-white"></i>
  </a>

  <a href="https://instagram.com/your-instagram-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-instagram text-white"></i>
  </a>

  <a href="https://facebook.com/your-facebook-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-facebook text-white"></i>
  </a>
</div>

      </div>
    </div>
  )
}
