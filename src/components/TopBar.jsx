export default function TopBar() {
  return (
    <div className="bg-red-200 text-red-800 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
        <div className="flex gap-6">
          <a
  href="mailto:saharaortho68@gmail.com"
  className="flex items-center gap-2 hover:underline text-red-800"
>
  ✉ saharaortho68@gmail.com
</a>

<a
  href="tel:+918700281458" target="_blank"
  className="flex items-center gap-2 hover:opacity-80 transition text-red-800"
>
  📞 +91 8700281458
</a>

        </div>
       <div className="flex gap-4 text-xl text-red-800">
  <a href="https://wa.me/918700281458" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-whatsapp text-red-800"></i>
  </a>

  <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-linkedin text-red-800"></i>
  </a>

  <a href="https://instagram.com/your-instagram-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-instagram text-red-800"></i>
  </a>

  <a href="https://facebook.com/your-facebook-id" target="_blank" className="hover:opacity-80 transition">
    <i className="bi bi-facebook text-red-800"></i>
  </a>
</div>

      </div>
    </div>
  )
}
