"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className="relative">
            {/* Main image */}
            <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-slate-blue/10">
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=85&auto=format&fit=crop"
                alt="AG Dentistry clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent image */}
            <div className="reveal reveal-delay-2 absolute -bottom-8 -right-6 w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=85&auto=format&fit=crop"
                alt="Dental consultation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Award badge */}
            <div className="reveal reveal-delay-3 absolute top-6 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">
                <Award size={20} className="text-slate-blue" />
              </div>
              <div>
                <div className="font-display text-lg text-charcoal font-semibold">GDC</div>
                <div className="text-warm-grey text-xs">Registered Practice</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-6">
            <div className="reveal">
              <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">About the Practice</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 mb-6 leading-tight font-light">
                Dentistry done with{" "}
                <em className="italic text-slate-blue">care & precision</em>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-warm-grey leading-relaxed mb-5">
                AG Dentistry has been serving London communities for over 22 years across Kentish Town, Kensal Rise, and Harley Street. Founded by Dr. Ali Ghaffarpour, our practice blends clinical excellence with a genuinely warm, patient-first approach that puts you at ease from the moment you walk in.
              </p>
              <p className="text-warm-grey leading-relaxed mb-8">
                We offer both NHS and private dentistry, believing everyone deserves exceptional dental care. Whether it's a routine check-up or a complete smile transformation, our team of specialist dentists bring skill, artistry, and compassion to every appointment.
              </p>
            </div>

            {/* Values */}
            <div className="reveal reveal-delay-2 grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Heart, label: "Patient-First", desc: "Your comfort is our priority" },
                { icon: ShieldCheck, label: "GDC Registered", desc: "Fully accredited practice" },
                { icon: Award, label: "Award-Winning", desc: "Recognised for excellence" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-pearl rounded-xl p-4 border border-light-grey/50">
                  <div className="w-9 h-9 rounded-lg bg-mist flex items-center justify-center mb-3">
                    <Icon size={18} className="text-slate-blue" />
                  </div>
                  <div className="font-semibold text-charcoal text-sm mb-1">{label}</div>
                  <div className="text-warm-grey text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3">
              <button
                onClick={() => window.location.href='/book-appointment'}
                className="inline-flex items-center gap-2 bg-charcoal text-white font-medium px-7 py-3.5 rounded-full hover:bg-slate-blue transition-all duration-300 text-sm tracking-wide"
              >
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
