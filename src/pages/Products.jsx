export default function Products() {
  const products = [
    {
      img: "../src/assets/img/products/bone plate.png",
      title: "Bone Plates",
    },
    {
      img: "../src/assets/img/products/nail.png",
      title: "Bone Nails",
    },
    {
      img: "../src/assets/img/products/bone screw.png",
      title: "Bone Screws",
    },
    {
      img: "../src/assets/img/products/instruments.png",
      title: "Instruments",
    },
    {
      img: "../src/assets/img/products/illizarov.png",
      title: "Illizarov",
    },
    {
      img: "../src/assets/img/products/jess.png",
      title: "Jess Systems",
    },
    {
      img: "../src/assets/img/products/wireRodPin.png",
      title: "Wires, Pins and Rods",
    },
    {
      img: "../src/assets/img/products/spinal.png",
      title: "Spinal Implants",
    },
    {
      img: "../src/assets/img/products/facial.png",
      title: "Maxillofacial",
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
        PRODUCTS
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="rounded-xl w-full h-52 object-cover"
            />

            <p
              className="mt-4 text-center text-gray-700 font-medium text-bold"
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
