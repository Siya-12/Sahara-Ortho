export default function BrochureCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text */}
        <p className="text-white text-lg md:text-xl font-medium text-center md:text-left">
          For more information, Download our Brochure
        </p>

        {/* Button */}
        <a
          href="/brochure.pdf"
          download
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300"
        >
          Download Now
        </a>

      </div>
    </section>
  );
}
