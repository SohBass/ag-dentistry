"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, CreditCard, Users, Sparkles, Shield, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Specialist Team",
    desc: "Our dentists hold postgraduate qualifications and keep ahead of the latest techniques through continuous professional development.",
  },
  {
    icon: Sparkles,
    title: "State-of-the-Art Technology",
    desc: "Digital X-rays, 3D scanning, and CAD/CAM technology for precise, comfortable, and faster treatments.",
  },
  {
    icon: Clock,
    title: "Flexible Appointments",
    desc: "Early morning, evening, and weekend slots available so dental care works around your busy London life.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "Clear pricing with no hidden fees. Interest-free payment plans and NHS options available at select locations.",
  },
  {
    icon: Shield,
    title: "GDC & CQC Registered",
    desc: "Fully compliant with all regulatory standards. Your safety and wellbeing are never compromised.",
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    desc: "Three easily accessible clinics across London — all near tube stations with ample parking nearby.",
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section id="why-us" className="py-28 bg-charcoal relative overflow-hidden" ref={ref}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, #4A6FA5 0%, transparent 50%), radial-gradient(circle at 75% 75%, #4A6FA5 0%, transparent 50%)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-slate-blue-light text-xs font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 leading-tight font-light">
            The{" "}
            <em className="italic text-sky-300">difference</em> you'll feel
          </h2>
          <p className="text-white/55 mt-4 leading-relaxed">
            We know choosing a dentist is a personal decision. Here's why thousands of Londoners trust AG Dentistry with their smiles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group p-7 rounded-2xl border border-white/8 hover:border-slate-blue/40 bg-white/5 hover:bg-white/8 transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-slate-blue/20 border border-slate-blue/30 flex items-center justify-center mb-5 group-hover:bg-slate-blue/30 transition-colors">
                <item.icon size={20} className="text-sky-300" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-base">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
