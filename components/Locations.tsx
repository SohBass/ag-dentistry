"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, Train } from "lucide-react";

const locations = [
  {
    name: "Kentish Town",
    address: "333 Kentish Town Road, London, NW5 2TJ",
    phone: "0207 267 7653",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm (by appt) | Sun: Closed",
    tube: "Kentish Town (Northern Line) — opposite the station",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    name: "Kensal Rise",
    address: "98 Chamberlayne Road, London, NW10 3JN",
    phone: "0208 964 2072",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm (by appt) | Sun: Closed",
    tube: "Kensal Rise (Overground)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    name: "Harley Street",
    address: "Harley Street, London",
    phone: "0208 964 2072",
    hours: "Mon–Fri: 9am–6pm | Sat: 9am–2pm (by appt) | Sun: Closed",
    tube: "Regent's Park (Bakerloo Line)",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&auto=format&fit=crop",
    featured: false,
    badge: "Dental Implants Centre",
  },
];

export default function Locations() {
  const ref = useScrollReveal();

  return (
    <section id="locations" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-xl mx-auto mb-16">
          <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">Our Clinics</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light">
            Three locations across{" "}
            <em className="italic text-slate-blue">London</em>
          </h2>
          <p className="text-warm-grey mt-4 leading-relaxed">
            All practices are easily accessible by tube and offer flexible opening hours to suit London life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:shadow-slate-blue/8 hover:-translate-y-1 ${
                loc.featured ? "border-slate-blue/30 ring-1 ring-slate-blue/20" : "border-light-grey/50"
              }`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={`AG Dentistry ${loc.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                {loc.featured && (
                  <div className="absolute top-4 left-4 bg-slate-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                    Main Practice
                  </div>
                )}
                {"badge" in loc && loc.badge && (
                  <div className="absolute top-4 left-4 bg-charcoal text-white text-xs font-medium px-3 py-1 rounded-full">
                    {loc.badge as string}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl text-charcoal font-medium mb-4">{loc.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={15} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={15} className="text-slate-blue mt-0.5 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-warm-grey hover:text-slate-blue transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={15} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey leading-relaxed">{loc.hours}</span>
                  </div>
                  <div className="flex gap-3">
                    <Train size={15} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey">{loc.tube}</span>
                  </div>
                </div>
                <button
                  onClick={() => window.location.href='/book-appointment'}
                  className="mt-6 w-full py-2.5 text-sm font-medium border border-slate-blue text-slate-blue rounded-xl hover:bg-slate-blue hover:text-white transition-all duration-200"
                >
                  Book at {loc.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
