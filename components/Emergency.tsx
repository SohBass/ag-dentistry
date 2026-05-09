"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, AlertCircle } from "lucide-react";

export default function Emergency() {
  const ref = useScrollReveal();

  return (
    <section id="emergency" className="py-20 bg-gradient-to-r from-slate-blue-dark via-slate-blue to-slate-blue-light relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="reveal flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <AlertCircle size={30} className="text-white" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-2">
                Dental emergency?
              </h2>
              <p className="text-white/75 text-base leading-relaxed max-w-lg">
                Don't suffer in pain. We offer same-day emergency appointments at all three locations — call us now and we'll get you seen as quickly as possible.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:02072677653"
              className="flex items-center justify-center gap-3 bg-white text-slate-blue font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 text-sm tracking-wide"
            >
              <Phone size={17} />
              Call 0207 267 7653
            </a>
            <button
              onClick={() => window.location.href='/book-appointment'}
              className="flex items-center justify-center gap-2 bg-transparent border border-white/40 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200 text-sm tracking-wide"
            >
              Book Online
            </button>
          </div>
        </div>

        {/* Availability note */}
        <div className="reveal mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
          {["Available 7 days a week", "Same-day appointments", "All locations covered"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
