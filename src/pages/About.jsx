import aboutBanner from "../assets/b1.jpg"; // change if you have separate about banner

function About() {
  return (
    <>
      {/* 🔥 HERO STYLE BANNER (Same as Products) */}
      <section
        className="relative w-full
        h-[65vh]
        sm:h-[70vh]
        md:h-[85vh]
        lg:h-screen"
      >
        {/* Background */}
        <img
          src={aboutBanner}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Center Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className="text-white font-light leading-[1.05] tracking-tight
            text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]"
          >
            About <span className="font-normal">Us</span>
          </h1>
        </div>
      </section>

      {/* 🔥 COMPANY INTRO */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bilworth Pvt Ltd is a precision manufacturing company delivering
            high-accuracy, production-ready components for demanding industries.
            We combine advanced CNC technology and skilled craftsmanship to
            produce parts that meet tight tolerances, faster timelines and
            uncompromising quality standards. Founded with a focus on precision
            and reliability , we partner with companies who need a manufacturing
            partner they can trust.
            <br />
            <br />
            Our expertise spans CNC machining, fabrication, and custom
            manufacturing, serving clients across automotive, energy, aerospace,
            and heavy engineering sectors.
          </p>
        </div>
      </section>

      {/* 🔥 MISSION & VISION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Deliver superior manufacturing solutions</li>
              <li>• Maintain strict quality and safety standards</li>
              <li>• Encourage innovation and continuous improvement</li>
              <li>• Build long-term client partnerships</li>
              <li>• Ensure sustainable and responsible growth</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized globally as a leader in precision manufacturing
              by combining technology, expertise, and customer-centric solutions
              that drive excellence and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 STATS SECTION */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-white/70">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-white/70">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-white/70">Global Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-white/70">Client Retention</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
