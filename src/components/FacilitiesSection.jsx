import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cos from "../assets/p01.png";
import spindle from "../assets/p02.png";
import tool from "../assets/p03.png";
import tabel from "../assets/p04.png";

import mig from "../assets/w02.png";
import tig from "../assets/w03.png";
import arc from "../assets/w01.png";

export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      {/* Main Heading */}
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-20">
        Facilities
      </h2>

      {/* ================= Machining ================= */}
      <FacilityBlock
        title="Machining"
        delay={4000} // ⏱ faster
        slides={[
          {
            image: cos,
            title: "Cosmos CVM 800",
            desc: "Personalized strategies to grow, protect, and transfer wealth efficiently.",
          },
          {
            image: spindle,
            title: "Spindle Probe",
            desc: "Data-driven investment decisions powered by intelligent insights.",
          },
          {
            image: tool,
            title: "Tool Setter",
            desc: "Proactive risk monitoring to safeguard portfolios in volatile markets.",
          },
          {
            image: tabel,
            title: "Tabeltop CNC",
            desc: "Proactive risk monitoring to safeguard portfolios in volatile markets.",
          },
        ]}
      />

      {/* ================= Welding ================= */}
      <FacilityBlock
        title="Welding"
        delay={6500} // ⏱ slower
        slides={[
          {
            image: mig,
            title: "MIG",
            desc: "Diversified access to global markets, sectors, and asset classes.",
          },
          {
            image: tig,
            title: "TIG",
            desc: "Long-term investment opportunities backed by real-time analytics.",
          },
          {
            image: arc,
            title: "ARC",
            desc: "Long-term investment opportunities backed by real-time analytics.",
          },
        ]}
      />

      {/* ================= Software ================= */}
      <div className="mb-32">
        <h3 className="text-center text-lg md:text-xl font-medium text-[#0B1B5C] mb-10">
          Software
        </h3>
        <SoftwareGrid />
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Facility Block                   */
/* -------------------------------- */

function FacilityBlock({ title, slides, delay }) {
  return (
    <div className="mb-32">
      <h3 className="text-center text-lg md:text-xl font-medium text-[#0B1B5C] mb-10">
        {title}
      </h3>

      <Carousel slides={slides} delay={delay} />
    </div>
  );
}

/* -------------------------------- */
/* Carousel (custom delay)          */
/* -------------------------------- */

function Carousel({ slides, delay }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  }, [slides.length]);

  /* Auto play with CUSTOM delay */
  useEffect(() => {
    if (!delay) return;
    const id = setInterval(next, delay);
    return () => clearInterval(id);
  }, [next, delay]);

  return (
    <>
      <div className="relative flex items-center justify-center h-[360px] md:h-[520px] overflow-hidden">
        {slides.map((slide, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-out rounded-[28px] overflow-hidden shadow-2xl
                ${
                  offset === 0
                    ? "w-[92%] md:w-[72vw] h-full z-20"
                    : "w-[95%] md:w-[54vw] h-[82%] z-10 opacity-90"
                }
                ${offset === -1 ? "-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[60%]" : ""}
              `}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {offset === 0 && (
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-xl md:text-2xl font-semibold mb-2">
                    {slide.title}
                  </h4>
                  <p className="text-sm md:text-base max-w-xl opacity-90">
                    {slide.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-indigo-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </>
  );
}

/* -------------------------------- */
/* Software Grid                    */
/* -------------------------------- */

function SoftwareGrid() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Fusion 360 – CAD / CAM",
            img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop",
          },
          {
            title: "Solid Edge – CAD",
            img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600&auto=format&fit=crop",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-medium">{item.title}</h3>
              <p className="text-white/80 text-sm mt-1">
                Technology, innovation & systems integration
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
