import heroImg from "../assets/img/2.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className="absolute inset-0 bg-white/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="w-full max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            WELCOME TO <br /> SAHARA ORTHO
          </h1>

          <p className="mt-5 max-w-xl text-gray-600 text-lg">
            We provide all kinds of Orthopaedic Implants and Instruments of best
            quality at reasonable prices since 2005.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Blue Card */}
          <div className="sm:row-span-2 bg-primary text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Why Choose Sahara Ortho?
              </h3>
              <p className="text-sm leading-relaxed">
                We prioritize quality, precision, and trust in everything we
                manufacture.
              </p>
            </div>
            <button className="mt-6 bg-white text-primary px-5 py-2 rounded-lg font-medium w-fit">
              Learn More →
            </button>
          </div>

          {/* Glass Cards */}
          {[
            "Uncompromising Quality",
            "Affordable Excellence",
            "Wide Product Range",
          ].map((title) => (
            <div
              key={title}
              className="backdrop-blur-md bg-white/80 p-6 rounded-2xl shadow-lg"
            >
              <h4 className="font-semibold text-gray-800">{title}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Premium orthopedic solutions designed for surgical excellence.
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>

</section>

  );
}
