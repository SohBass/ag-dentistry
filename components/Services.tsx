"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "General Dentistry",
    desc: "Comprehensive check-ups, root canal treatment, crowns, extractions, and white fillings — all the essential care your teeth need.",
    icon: "🦷",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb5d9ecdb?w=600&q=80&auto=format&fit=crop",
    href: "#new-patient",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, porcelain veneers, and white fillings to enhance your smile naturally and beautifully.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80&auto=format&fit=crop",
    href: "#new-patient",
  },
  {
    title: "Preventive Dentistry",
    desc: "Hygienist appointments, gum disease treatment, bad breath management, and mouth cancer screening.",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&auto=format&fit=crop",
    href: "#new-patient",
  },
  {
    title: "Orthodontics",
    desc: "Invisalign clear aligners and Cfast braces — discreet, effective ways to straighten your teeth.",
    icon: "📐",
    image: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?w=600&q=80&auto=format&fit=crop",
    href: "#new-patient",
  },
  {
    title: "Dental Implants",
    desc: "Missing teeth replaced with permanent, natural-looking implants at our specialist Harley Street Implants Centre.",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80&auto=format&fit=crop",
    href: "#new-patient",
  },
  {
    title: "Emergency Care",
    desc: "Same-day emergency appointments for toothache, broken teeth, and urgent dental problems across all locations.",
    icon: "🚑",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80&auto=format&fit=crop",
    href: "#emergency",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-28 bg-pearl" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-xl mb-16">
          <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light">
            Comprehensive dental{" "}
            <em className="italic text-slate-blue">services</em>
          </h2>
          <p className="text-warm-grey mt-4 leading-relaxed">
            From your first check-up to a complete smile transformation — our specialist team has the expertise you need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal reveal-delay-${(i % 3) + 1} service-card bg-white rounded-2xl overflow-hidden border border-light-grey/40 group cursor-pointer`}
              onClick={() => document.querySelector(svc.href)?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-2xl">{svc.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-charcoal mb-2 font-medium group-hover:text-slate-blue transition-colors">
                  {svc.title}
                </h3>
                <p className="text-warm-grey text-sm leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-slate-blue text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
