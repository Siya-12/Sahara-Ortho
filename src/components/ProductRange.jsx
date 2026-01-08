import { Link } from "react-router-dom";

export default function ProductRange() {
  const products = [
    {
      title: "Bone Plate",
      desc:
        "Many patients forget they even have a bone plate—they don’t trigger airport metal detectors and usually cause no sensation once healing is complete.",
      icon: "/icons/bone-screw.png",
      image: "/products/bone-plate.png",
      link: "/products/bone-screws",
    },
    {
      title: "Bone Screw",
      desc:
        "Precision-engineered locking screws ensuring enhanced stability and superior clinical outcomes.",
      icon: "/icons/locking-screw.png",
      image: "/products/bone-screw.png",
      link: "/products/bone-screws",
    },
    {
      title: "Bone Nail",
      desc:
        "Durable and anatomically designed bone plates for trauma and reconstructive surgeries.",
      icon: "/icons/bone-plate.png",
      image: "/products/nail.png",
      link: "/products/bone-plates",
    },
      {
      title: "Instruments",
      desc:
        "High-quality bone screws designed for secure fixation and long-term stability in orthopedic procedures.",
      icon: "/icons/bone-screw.png",
      image: "/products/instruments.png",
      link: "/products/bone-screws",
    },
    {
      title: "Illizarov",
      desc:
        "Precision-engineered locking screws ensuring enhanced stability and superior clinical outcomes.",
      icon: "/icons/locking-screw.png",
      image: "/products/illizarov.png",
      link: "/products/bone-screws",
    },
    {
      title: "Jess Systems",
      desc:
        "Durable and anatomically designed bone plates for trauma and reconstructive surgeries.",
      icon: "/icons/bone-plate.png",
      image: "/products/jess.png",
      link: "/products/bone-plates",
    },
      {
      title: "Wires,Pins and Rods",
      desc:
        "High-quality bone screws designed for secure fixation and long-term stability in orthopedic procedures.",
      icon: "/icons/bone-screw.png",
      image: "/products/wireRodPin.png",
      link: "/products/bone-screws",
    },
    {
      title: "Spinal Implants",
      desc:
        "Precision-engineered locking screws ensuring enhanced stability and superior clinical outcomes.",
      icon: "/icons/locking-screw.png",
      image: "/products/spinal.png",
      link: "/products/bone-screws",
    },
    {
      title: "Maxillofacial",
      desc:
        "Durable and anatomically designed bone plates for trauma and reconstructive surgeries.",
      icon: "/icons/bone-plate.png",
      image: "/products/facial.png",
      link: "/products/bone-plates",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className=" mt-2 text-center text-4xl md:text-5xl font-bold
         bg-clip-text font-changa bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600
    bg-clip-border text-transparent">
          Our Product Range
        </h2>
        <p className="mt-4 text-gray-900">
          Manufacturer, Exporter and Supplier of High Quality Orthopaedic
          Implants & Instruments in India
        </p>
      </div>

      {/* Product Rows */}
      <div className="max-w-7xl mx-auto space-y-6">
        {products.map((item) => (
          <div
            key={item.title}
            className="
              bg-white rounded-2xl shadow-md
              p-6 md:p-8
              flex flex-col md:flex-row
              items-start md:items-center
              gap-6
            "
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                {item.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-gray-600 text-sm max-w-xl">
                {item.desc}
              </p>
            </div>

            {/* Image */}
<div className="group w-full md:w-56 overflow-hidden rounded-lg bg-slate-50">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full h-32
      scale-100
      group-hover:scale-110
      transition-transform duration-500 ease-out
    "
  />
</div>



            {/* CTA */}
            <div className="w-full md:w-auto">
              <Link
                to={item.link}
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  border border-gray-300
                  rounded-full
                  text-sm font-medium text-gray-800
                  hover:bg-gray-800 hover:text-white
                  transition
                "
              >
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
