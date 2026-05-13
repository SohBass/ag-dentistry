import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  Services: [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Preventive Dentistry",
    "Orthodontics",
    "Dental Implants",
    "Emergency Care",
  ],
  "Patient Info": [
    "New Patients",
    "NHS vs Private",
    "Payment Plans",
    "Patient Reviews",
    "FAQs",
  ],
  Location: ["Kentish Town"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg width="36" height="40" viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="18" height="18" fill="#4A7FB5" rx="1"/>
                <rect x="22" y="0" width="18" height="18" fill="#7BAFD4" rx="1"/>
                <rect x="0" y="22" width="18" height="18" fill="#7BAFD4" rx="1"/>
                <rect x="22" y="22" width="18" height="18" fill="#4A7FB5" rx="1"/>
                <text x="9" y="14" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">A</text>
                <text x="31" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">G</text>
              </svg>
              <span className="font-display text-xl text-white font-semibold">AG Dentistry</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Premium dental care in Kentish Town, London. Offering general, cosmetic, and specialist dentistry in a calm, welcoming environment.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:02072677653" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={14} className="text-slate-blue-light" /> 0207 267 7653
              </a>
              <a href="mailto:info@agdentistry.co.uk" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={14} className="text-slate-blue-light" /> info@agdentistry.co.uk
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-slate-blue-light mt-0.5 shrink-0" />
                <span>333 Kentish Town Road, London, NW5 2TJ</span>
              </div>
            </div>
            <div className="flex gap-3 mt-7">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-slate-blue hover:bg-slate-blue/20 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-all inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {currentYear} AG Dentistry Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Cookie Policy", "Terms & Conditions", "Complaints"].map((item) => (
              <a key={item} href="#" className="hover:text-white/70 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 text-center text-xs text-white/25">
          AG Dentistry is registered with the General Dental Council (GDC). All dentists are listed on the GDC register.
        </div>
      </div>
    </footer>
  );
}
