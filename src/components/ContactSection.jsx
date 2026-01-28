import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] gap-[120px] items-start">
          {/* LEFT CONTACT CARD (BIGGER + FUNCTIONAL) */}
          <div className="bg-white rounded-2xl border border-gray-100 p-10 min-h-[420px]">
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Feel free to contact and we assure
              <br />
              you the best!
            </p>
            <div className="space-y-5 text-base text-gray-700">
              {/* Phone */}
              <a
                href="tel:+917838319290"
                className="flex gap-4 hover:text-black transition"
              >
                <Phone size={18} className="mt-1 text-gray-500" />
                <span>+91-7838319290, +91-8110061650</span>
              </a>

              {/* Email 1 */}
              <a
                href="mailto:Parthiban.Gnanasambandam@bilworth.com"
                className="flex gap-4 hover:text-black transition"
              >
                <Mail size={18} className="mt-1 text-gray-500" />
                <span>Parthiban.Gnanasambandam@bilworth.com</span>
              </a>

              {/* Email 2 */}
              <a
                href="mailto:Deepankumar_J@bilworth.com"
                className="flex gap-4 hover:text-black transition"
              >
                <Mail size={18} className="mt-1 text-gray-500" />
                <span>Deepankumar_J@bilworth.com</span>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps?q=SF+No.13+Jothi+Nagar+2nd+Street+Ramanujam+Nagar+Uppilipalayam+Coimbatore+641015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 hover:text-black transition"
              >
                <MapPin size={30} className="mt-1 text-gray-500" />
                <span className="leading-relaxed">
                  SF no.13, Jothi Nagar, 2nd Street, Ramanujam Nagar,
                  Uppilipalayam P.O, Coimbatore – 641015
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT GOOGLE MAP (BIGGER + CLICKABLE) */}
          <div className="w-full h-[440px] md:h-[480px]">
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
