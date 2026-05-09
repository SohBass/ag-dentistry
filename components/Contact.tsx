"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 bg-fog" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-xl mx-auto mb-14">
          <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light">
            We're here to{" "}
            <em className="italic text-slate-blue">help</em>
          </h2>
          <p className="text-warm-grey mt-4 leading-relaxed">
            Have a question before booking? Reach out — our friendly team will get back to you promptly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: ["0207 267 7653", "Mon–Fri: 9am–6pm | Sat: 9am–2pm"],
              action: { label: "Call Now", href: "tel:02072677653" },
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["info@agdentistry.co.uk", "Reply within 24 hours"],
              action: { label: "Send Email", href: "mailto:info@agdentistry.co.uk" },
            },
            {
              icon: MessageCircle,
              title: "Live Chat",
              lines: ["Chat with our team", "Available during clinic hours"],
              action: { label: "Start Chat", href: "#" },
            },
            {
              icon: Clock,
              title: "Opening Hours",
              lines: ["Mon–Fri: 8am–7pm", "Saturday: 9am–5pm"],
              action: { label: "View Locations", href: "#locations" },
            },
          ].map(({ icon: Icon, title, lines, action }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-6 border border-light-grey/50 text-center hover:shadow-lg hover:shadow-slate-blue/6 transition-all duration-300 group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-mist flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-blue transition-colors">
                <Icon size={22} className="text-slate-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-warm-grey text-sm leading-relaxed">{line}</p>
              ))}
              <a
                href={action.href}
                onClick={(e) => {
                  if (action.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(action.href)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-4 inline-block text-slate-blue text-sm font-medium hover:underline"
              >
                {action.label} →
              </a>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="reveal rounded-3xl overflow-hidden h-72 bg-mist border border-light-grey/50 relative">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop"
            alt="London map view"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-xl text-center">
              <p className="font-semibold text-charcoal mb-1">Three locations across London</p>
              <p className="text-warm-grey text-sm mb-3">Kentish Town · Kensal Rise · Harley Street</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-blue text-sm font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
