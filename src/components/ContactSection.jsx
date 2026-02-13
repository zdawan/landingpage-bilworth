import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] gap-10 md:gap-[120px] items-start">
          {/* LEFT CONTACT CARD */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-10 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Contact Us
            </h3>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8">
              Feel free to contact and we assure
              <br className="hidden sm:block" />
              you the best!
            </p>

            <div className="p-4 sm:p-5 shadow-sm rounded-xl">
              {/* -------- Development -------- */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-lg font-medium text-[#0B1B5C] mb-4">
                  Head- Business Development
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+917838319290"
                    className="flex items-start gap-3 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    {/* prevent icon shrinking */}
                    <Phone
                      size={20}
                      className="text-[#0B1B5C] flex-shrink-0 mt-1"
                    />

                    {/* force wrapping */}
                    <span className="text-sm sm:text-base break-words">
                      +91-7838319290
                    </span>
                  </a>

                  <a
                    href="mailto:Parthiban.Gnanasambandam@bilworth.com"
                    className="flex items-start gap-3 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Mail
                      size={20}
                      className="text-[#0B1B5C] flex-shrink-0 mt-1"
                    />
                    <span className="text-sm sm:text-base break-all">
                      Parthiban.Gnanasambandam@bilworth.com
                    </span>
                  </a>
                </div>
              </div>

              {/* -------- Operation Head -------- */}
              <div>
                <h3 className="text-lg font-medium text-[#0B1B5C] mb-4">
                  Head- Operations
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+918110061650"
                    className="flex items-start gap-3 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Phone
                      size={20}
                      className="text-[#0B1B5C] flex-shrink-0 mt-1"
                    />
                    <span className="text-sm sm:text-base break-words">
                      +91-8110061650
                    </span>
                  </a>

                  <a
                    href="mailto:Deepankumar.J@bilworth.com"
                    className="flex items-start gap-3 text-gray-700 hover:text-[#0B1B5C] transition"
                  >
                    <Mail
                      size={20}
                      className="text-[#0B1B5C] flex-shrink-0 mt-1"
                    />
                    <span className="text-sm sm:text-base break-all">
                      Deepankumar.J@bilworth.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[260px] sm:h-[360px] md:h-[480px]">
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
