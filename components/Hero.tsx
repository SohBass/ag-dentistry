"use client";
import { useEffect, useRef } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=85&auto=format&fit=crop"
          alt="Modern dental clinic"
          className="w-full h-full object-cover"
        />
        {/* Layered gradient for readability + atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/50" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/5 hidden xl:block" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-white/8 hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-amber-300 fill-amber-300" />
              ))}
            </div>
            <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
              Rated Excellent by 500+ Patients
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headingRef}
            className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 font-light"
          >
            Your smile,{" "}
            <em className="italic font-normal text-sky-200">beautifully</em>
            <br />
            cared for
          </h1>

          {/* Subheading */}
          <p
            className="text-white/75 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Premium dental care in the heart of London. General, cosmetic, and specialist dentistry — all under one trusted practice.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => window.location.href='/book-appointment'}
              className="bg-white text-charcoal font-medium px-8 py-4 rounded-full hover:bg-off-white transition-all duration-200 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Register as New Patient
            </button>
            <button
              onClick={() => document.querySelector("#emergency")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border border-white/40 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200 text-sm tracking-wide"
            >
              Emergency Appointment
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 mt-14 pt-10 border-t border-white/15 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            {[
              { value: "22+", label: "Years experience" },
              { value: "3", label: "London locations" },
              { value: "NHS & Private", label: "Patients welcome" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-white font-light">{stat.value}</div>
                <div className="text-white/55 text-xs font-medium tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
