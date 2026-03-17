import aboutBanner from "../assets/ab00.jpg";
import person1 from "../assets/o02.jpg";
import person2 from "../assets/deepan_1550_2000.jpg 1.png";

function About() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative w-full h-[80vh]">
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
      <section className="bg-white py-14 md:py-16">
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
      <section className="bg-gray-100 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12">
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
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 md:mb-16">
            Our Leadership
          </h2>

          {/* PERSON 1 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-20 md:mb-24">
            {/* IMAGE */}
            <div
              className="order-1 md:order-2 mx-auto
w-[280px] sm:w-[360px] md:w-[430px]
h-[280px] sm:h-[340px] md:h-[408px]
rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <img
                src={person1}
                alt="Parthiban"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* CONTENT */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-2">Parthiban G</h3>

              <p className="text-gray-500 mb-4">Head - Business Development</p>

              <p className="text-gray-600 leading-relaxed">
                Parthiban G is the Head of Business Development at Bilworth
                Private Limited, bringing over 16 years of diverse industry
                experience. He holds a Bachelor’s degree in Mechanical
                Engineering from PSG College of Technology, Coimbatore.
                <br />
                <br />
                Parthiban has spent more than 11 years working with leading
                Automotive OEMs like Maruti Suzuki India Limited, gaining deep
                expertise in manufacturing, operations, and strategic
                partnerships.
                <br />
                <br />
                At Bilworth, he leads strategic initiatives focused on expanding
                market presence, building long-term industry partnerships, and
                driving sustainable business growth.
              </p>
            </div>
          </div>

          {/* PERSON 2 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* IMAGE */}
            <div
              className="order-1 md:order-2 mx-auto
w-[280px] sm:w-[360px] md:w-[430px]
h-[280px] sm:h-[340px] md:h-[408px]
rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <img
                src={person2}
                alt="Deepankumar"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* CONTENT */}
            <div className="order-2">
              <h3 className="text-2xl font-semibold mb-2">Deepankumar J</h3>

              <p className="text-gray-500 mb-4">Head Operations</p>

              <p className="text-gray-600 leading-relaxed">
                Holding a Bachelor’s degree in Sandwich Mechanical Engineering
                from PSG College of Technology and a Master Degree in
                Engineering Design. Decade of experience in advanced
                manufacturing operations across Aerospace industries.
                <br />
                <br />
                Specialized in advanced CAM programming, fixture design, cutting
                tool optimization, and precision machining process planning.
                <br />
                <br />
                Passionate about improving quality, efficiency, and
                cost-effectiveness by streamlining workflows and developing
                innovative strategies to deliver production-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
