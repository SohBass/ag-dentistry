"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Islington, London",
    rating: 5,
    text: "I was genuinely nervous about getting veneers but the team made me feel completely at ease. The results are stunning — completely natural-looking. People keep asking if I've 'done something different' without knowing what it is!",
    treatment: "Porcelain Veneers",
    initials: "SM",
  },
  {
    name: "James K.",
    location: "Shoreditch, London",
    rating: 5,
    text: "Dr Gupta and her team are exceptional. I've been coming for three years for routine care and recently had Invisalign. The whole practice is spotless, modern, and the staff genuinely remember you. Worth every penny.",
    treatment: "Invisalign",
    initials: "JK",
  },
  {
    name: "Priya T.",
    location: "Canary Wharf, London",
    rating: 5,
    text: "Had a dental emergency on a Friday afternoon — they got me in within the hour. The dentist was calm, thorough, and completely sorted the problem. I've since switched to AG Dentistry for all my dental care.",
    treatment: "Emergency Care",
    initials: "PT",
  },
  {
    name: "David H.",
    location: "Hackney, London",
    rating: 5,
    text: "Had a dental implant done here after being advised it was impossible elsewhere. The team used digital scanning and made the whole process surprisingly comfortable. Six months later, it feels completely natural.",
    treatment: "Dental Implant",
    initials: "DH",
  },
  {
    name: "Emma W.",
    location: "Farringdon, London",
    rating: 5,
    text: "The hygiene appointments here are genuinely transformative. My teeth feel incredible after every visit. The practice is calm, unhurried, and professional without being intimidating. Highly recommend.",
    treatment: "Hygiene & Whitening",
    initials: "EW",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    const indices = [
      current,
      (current + 1) % testimonials.length,
      (current + 2) % testimonials.length,
    ];
    return indices.map((i) => testimonials[i]);
  };

  return (
    <section id="testimonials" className="py-28 bg-fog" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">Patient Stories</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light">
              Smiles that speak{" "}
              <em className="italic text-slate-blue">for themselves</em>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-light-grey flex items-center justify-center hover:border-slate-blue hover:text-slate-blue transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-light-grey flex items-center justify-center hover:border-slate-blue hover:text-slate-blue transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards — desktop shows 3, mobile shows 1 */}
        <div className="grid md:grid-cols-3 gap-6">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-7 border border-light-grey/50 transition-all duration-300 ${i > 0 ? "hidden md:block" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-mist flex items-center justify-center text-slate-blue font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                    <div className="text-warm-grey text-xs">{t.location}</div>
                  </div>
                </div>
                <Quote size={20} className="text-light-grey" />
              </div>
              <StarRating count={t.rating} />
              <p className="text-warm-grey text-sm leading-relaxed mt-4 mb-5">"{t.text}"</p>
              <div className="inline-block bg-mist text-slate-blue text-xs font-medium px-3 py-1.5 rounded-full">
                {t.treatment}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "bg-slate-blue w-6 h-2" : "bg-light-grey w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* Google rating badge */}
        <div className="reveal mt-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-4 bg-white border border-light-grey/50 rounded-2xl px-8 py-5 shadow-sm">
            <div className="text-center">
              <div className="font-display text-4xl text-charcoal font-light">4.9</div>
              <div className="mt-1"><StarRating count={5} /></div>
            </div>
            <div className="w-px h-12 bg-light-grey" />
            <div>
              <div className="font-semibold text-charcoal">Google Reviews</div>
              <div className="text-warm-grey text-sm">Based on 312 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
