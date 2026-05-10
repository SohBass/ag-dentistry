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
    image: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
  },
];

export default function Locations() {
  const ref = useScrollReveal();

  return (
    <section id="locations" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-xl mx-auto mb-16">
          <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">Our Clinic</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light">
            Based in <em className="italic text-slate-blue">Kentish Town</em>
          </h2>
          <p className="text-warm-grey mt-4 leading-relaxed">
            Conveniently located opposite Kentish Town tube station with flexible opening hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {locations.map((loc) => (
            <div key={loc.name} className="reveal rounded-2xl overflow-hidden border border-slate-blue/30 ring-1 ring-slate-blue/20 shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <img src={loc.image} alt={`AG Dentistry ${loc.name}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-blue text-white text-xs font-medium px-3 py-1 rounded-full">Main Practice</div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-charcoal font-medium mb-6">{loc.name}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey">{loc.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={16} className="text-slate-blue mt-0.5 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-warm-grey hover:text-slate-blue transition-colors">{loc.phone}</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={16} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey">{loc.hours}</span>
                  </div>
                  <div className="flex gap-3">
                    <Train size={16} className="text-slate-blue mt-0.5 shrink-0" />
                    <span className="text-warm-grey">{loc.tube}</span>
                  </div>
                </div>
                <button onClick={() => window.location.href='/book-appointment'} className="mt-8 w-full py-3 text-sm font-medium border border-slate-blue text-slate-blue rounded-xl hover:bg-slate-blue hover:text-white transition-all duration-200">
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
