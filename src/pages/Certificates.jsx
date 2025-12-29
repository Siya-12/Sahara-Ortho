export default function Certification() {
  const certificates = [
    {
      img: "../src/assets/img/certificates/iso.jpg",
      title: "ISO 13485 Certification of Compliance",
    },
    {
      img: "../src/assets/img/certificates/ce.jpg",
      title: "CE Certification of Compliance",
    },
    {
      img: "../src/assets/img/certificates/fda.jpg",
      title: "FDA Certification of Compliance",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-200 to-cyan-100 px-6 py-16">
      
      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-14
         bg-clip-text text-transparent font-changa
    bg-gradient-to-r from-red-800 via-blue-500 to-red-900
    bg-clip-border text-cyan"
      >
        CERTIFICATIONS
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="rounded-l w-full h-full object-cover"
            />

            <p
              className="pt-4 mt-4 text-center text-gray-700 font-medium text-bold"
              style={{ fontFamily: "Merriweather, sans-serif" }}
            >
              {cert.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
