import { useMemo } from "react";

export default function FunFacts() {
  const facts = [
    '🦴 "Maxillofacial implants are so tiny that they fix facial bones without changing your smile."',

    '🧠 "Spinal implants act like a GPS system for your backbone — guiding it while it heals."',

    '🔩 "Wires, pins, and rods may look simple, but they do some of the toughest jobs in fracture care."',

    '🛠️ "The Ilizarov system can actually help bones grow longer — your body literally regenerates bone."',

    '🤖 "Orthopaedic patients often become accidental cyborgs — part human, part hardware."',

    '🦾 "Bones heal stronger after implants — they believe in comebacks."',

    '✈️ "Most orthopaedic implants don’t trigger airport metal detectors — sorry, no cool story."',

    '🔨 "Yes, orthopaedic surgeons really use hammers — because bones don’t listen politely."'
  ];

  // Shuffle facts randomly on each render
  const shuffledFacts = useMemo(() => {
    return [...facts].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section className="bg-slate-50 py-14 px-6">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-changa">
          Fun Facts
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Because even serious science has a fun side.
        </p>
      </div>

      {/* Facts Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledFacts.map((fact, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              hover:shadow-lg
              transition
              text-center
              text-gray-700
              font-medium
              leading-relaxed
            "
          >
            {fact}
          </div>
        ))}
      </div>

    </section>
  );
}
