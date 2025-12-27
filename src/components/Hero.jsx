import heroImg from "../assets/img/2.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-white/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
               Fixing fractures, Restoring futures
              </h1>

              <p className="mt-6 max-w-xl text-gray-600 text-lg">
                We provide all kinds of Orthopaedic Implants and Instruments of
                best quality at reasonable prices since 2005.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Blue Card */}
              <div className="sm:row-span-2 bg-primary text-white p-7 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Sahara Ortho?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    At Sahara Ortho, we prioritize quality, precision, and trust in everything we manufacture. As a leading manufacturer of orthopedic implants and instruments, we are committed to enhancing surgical outcomes and improving patient lives through innovation and reliability.
                  </p>
                </div>

                <button className="mt-6 bg-white text-primary px-5 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition">
                  Learn More →
                </button>
              </div>

              {/* White Cards */}
              {[
                "Uncompromising Quality",
                "Affordable Excellence",
                "Wide Product Range",
              ].map((title) => (
                <div
                  key={title}
                  className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg"
                >
                  <h4 className="font-semibold text-gray-800">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                   We adhere to strict international standards and quality control at every stage—from raw material selection to final packaging—ensuring safe and effective orthopedic solutions.
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

