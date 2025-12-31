import { useParams } from "react-router-dom";

export default function ProductCategory() {
  const { category } = useParams();

  const productData = {
    "bone-plates": [
      { img: "/products/facial.png", title: "LCP Plates" },
      { img: "/products/plates/dcp.png", title: "DCP Plates" },
      { img: "/products/plates/t-plate.png", title: "T Plates" },
    ],

    "bone-nails": [
      { img: "/products/nails/im-nail.png", title: "IM Nail" },
      { img: "/products/nails/elastic.png", title: "Elastic Nail" },
    ],

    "bone-screws": [
      { img: "/products/screws/cortical.png", title: "Cortical Screws" },
      { img: "/products/screws/cancellous.png", title: "Cancellous Screws" },
    ],
  };

  const items = productData[category] || [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-200 to-cyan-100 px-6 py-16">

      {/* Heading */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-14
        bg-clip-text text-transparent font-changa
        bg-gradient-to-r from-red-800 via-blue-500 to-red-900"
      >
        {category.replace(/-/g, " ").toUpperCase()}
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-300 p-5"
          >
            <div className="relative group overflow-hidden rounded-xl">

  {/* Image */}
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Hover Overlay */}
  <div
   className="absolute inset-0
      flex items-center justify-center
      bg-black/50
      opacity-0 group-hover:opacity-100
      transition duration-500"
  >
    <p
      className="text-white text-xl font-semibold tracking-wide
      translate-y-4 group-hover:translate-y-0
      transition duration-500 font-dmserif"
      // style={{ fontFamily: "Merriweather, sans-serif" }}
    >
      {item.title}
    </p>
  </div>

</div>
{/* Title below image (Mobile only) */}
  <p
    className="mt-3 text-2xl text-center text-gray-700 font-medium block md:hidden font-extrabold font-dmserif"
  >
    {item.title}
  </p>

          </div>
        ))}
      </div>
    </section>
  );
}
