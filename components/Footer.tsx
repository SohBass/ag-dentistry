import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  Services: [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Invisalign",
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
  Locations: ["Kentish Town", "Kensal Rise", "Harley Street"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-slate-blue flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.4 2.3 1.1 3.2L6 18c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4l-2.6-8.3c.7-.9 1.1-2 1.1-3.2C16.5 4 14.5 2 12 2z" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-display text-xl text-white font-semibold">AG Dentistry</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Premium dental care for London. Three conveniently located practices offering general, cosmetic, and specialist dentistry in a calm, welcoming environment.
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
                <span>Kentish Town · Kensal Rise · Harley Street, London</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-7">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-slate-blue hover:bg-slate-blue/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white hover:translate-x-0.5 transition-all inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {currentYear} AG Dentistry Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Cookie Policy", "Terms & Conditions", "Complaints"].map((item) => (
              <a key={item} href="#" className="hover:text-white/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* GDC notice */}
      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 text-center text-xs text-white/25">
          AG Dentistry is registered with the General Dental Council (GDC). All dentists are listed on the GDC register.
          This website is for information purposes only and does not constitute dental advice.
        </div>
      </div>
    </footer>
  );
}
