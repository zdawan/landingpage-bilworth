import aboutBanner from "../assets/b02final.jpg";
import person1 from "../assets/o02.jpg";
import person2 from "../assets/o01.jpg";

function About() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] lg:h-screen">
        <img
          src={aboutBanner}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white font-light leading-[1.05] tracking-tight text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]">
            About <span className="font-normal">Us</span>
          </h1>
        </div>
      </section>

      {/* COMPANY INTRO */}
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
            uncompromising quality standards.
            <br />
            <br />
            Founded with a focus on precision and reliability, we partner with
            companies who need a manufacturing partner they can trust.
            <br />
            <br />
            Our expertise spans CNC machining, fabrication, and custom
            manufacturing, serving clients across automotive, energy, aerospace,
            and heavy engineering sectors.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
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

      {/* LEADERSHIP SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Our Leadership
          </h2>

          {/* PERSON 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* IMAGE (FIRST IN MOBILE) */}
            <div className="order-1 md:order-2 w-full h-[420px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={person1}
                alt="Parthiban"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-2">Parthiban G</h3>

              <p className="text-gray-500 mb-4">Head - Business Development</p>

              <p className="text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in precision manufacturing,
                Parthiban leads business development initiatives and builds
                strong partnerships with clients across multiple industries.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="mailto:Parthiban.Gnanasambandam@bilworth.com"
                  className="px-8 py-3 bg-[#142766] text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  Request Quote
                </a>

                <a
                  href="tel:+917838319290"
                  className="px-8 py-3 border border-[#142766] text-[#142766] rounded-lg font-medium hover:bg-[#142766] hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* PERSON 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* IMAGE (FIRST IN MOBILE) */}
            <div className="order-1 md:order-1 w-full h-[420px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={person2}
                alt="Deepankumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="order-2">
              <h3 className="text-2xl font-semibold mb-2">Deepankumar J</h3>

              <p className="text-gray-500 mb-4">Head Operations</p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Deepankumar oversees manufacturing operations and quality
                management, ensuring all components meet strict tolerance
                requirements while maintaining efficient production timelines.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="mailto:Deepankumar.J@bilworth.com"
                  className="px-8 py-3 bg-[#142766] text-white rounded-lg font-medium hover:opacity-90 transition"
                >
                  Request Quote
                </a>

                <a
                  href="tel:+918110061650"
                  className="px-8 py-3 border border-[#142766] text-[#142766] rounded-lg font-medium hover:bg-[#142766] hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
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
