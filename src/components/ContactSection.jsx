import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] gap-12 md:gap-[120px] items-start">
          {/* LEFT CONTACT CARD */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Contact Us
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8">
              Feel free to contact and we assure{" "}
              <br className="hidden sm:block" />
              you the best!
            </p>

            <div className="p-4 shadow-sm">
              {/* -------- Development -------- */}
              <div className="mb-10">
                <h3 className="text-lg font-medium text-[#0B1B5C] mb-4">
                  Development
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Phone size={20} className="text-[#0B1B5C]" />
                    <span>+91- 8110061650 </span>
                  </a>

                  <a
                    href="mailto:dev@yourcompany.com"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Mail size={20} className="text-[#0B1B5C]" />
                    <span>Parthiban.Gnanasambandam@bilworth.com</span>
                  </a>
                </div>
              </div>

              {/* -------- Operation Head -------- */}
              <div>
                <h3 className="text-lg font-medium text-[#0B1B5C] mb-4">
                  Operation Head
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+919123456789"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Phone size={20} className="text-[#0B1B5C]" />
                    <span>+91- 7838319290</span>
                  </a>

                  <a
                    href="mailto:operations@yourcompany.com"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Mail size={20} className="text-[#0B1B5C]" />
                    <span>Deepankumar.J@bilworth.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[280px] sm:h-[360px] md:h-[480px]">
            <iframe
              title="Bilworth Location"
              src="https://www.google.com/maps?q=SF%20No.13%2C%20Jothi%20Nagar%2C%202nd%20Street%2C%20Ramanujam%20Nagar%2C%20Uppilipalayam%2C%20Coimbatore%20641015&output=embed"
              className="w-full h-full rounded-2xl border border-gray-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
