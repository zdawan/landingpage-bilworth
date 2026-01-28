export default function SoftwareGrid() {
  return (
    <section className="py-28 bg-white">
      {/* 80% WIDTH WRAPPER */}
      <div className="w-[80%] mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-medium text-[#0B1B5C] mb-16">
          Software
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="Fusion 360"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-medium transform transition duration-500 group-hover:-translate-y-2">
                Fusion 360 – CAD / CAM
              </h3>
              <p className="text-white/80 text-sm mt-1 transform transition duration-500 group-hover:-translate-y-2">
                Technology, innovation & systems integration
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600&auto=format&fit=crop"
              alt="Solid Edge"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-medium transform transition duration-500 group-hover:-translate-y-2">
                Solid Edge – CAD
              </h3>
              <p className="text-white/80 text-sm mt-1 transform transition duration-500 group-hover:-translate-y-2">
                Technology, innovation & systems integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
