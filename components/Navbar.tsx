"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-light-grey/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-10 h-10 flex-shrink-0">
              <svg width="40" height="44" viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="18" height="18" fill="#4A7FB5" rx="1"/>
                <rect x="22" y="0" width="18" height="18" fill="#7BAFD4" rx="1"/>
                <rect x="0" y="22" width="18" height="18" fill="#7BAFD4" rx="1"/>
                <rect x="22" y="22" width="18" height="18" fill="#4A7FB5" rx="1"/>
                <text x="9" y="14" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">A</text>
                <text x="31" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">G</text>
              </svg>
            </div>
            <div>
              <span className={`font-display text-xl font-semibold tracking-wide transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}>
                AG Dentistry
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-charcoal hover:text-slate-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:02072677653"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-slate-blue" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={15} />

            </a>
            <a
              href="/book-appointment"
              className="bg-slate-blue text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-blue-dark transition-all duration-200 hover:shadow-lg hover:shadow-slate-blue/20"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-light-grey/40 shadow-xl">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 text-charcoal hover:text-slate-blue hover:bg-mist rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-light-grey/40 space-y-3">
              <a href="tel:02072677653" className="flex items-center gap-2 px-4 py-3 text-slate-blue font-medium">
                <Phone size={16} /> 0207 267 7653
              </a>
              <a
                href="/book-appointment"
                className="w-full block text-center bg-slate-blue text-white font-medium py-3 rounded-xl hover:bg-slate-blue-dark transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
