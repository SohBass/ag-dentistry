"use client";
import { useRouter } from "next/navigation";
import { Award } from "lucide-react";

const team = [
  {
    name: "Dr. Ali Ghaffarpour",
    gdc: "GDC: 73854",
    role: "Principal Dentist & Founder",
    bio: "Dr. Ali Ghaffarpour founded AG Dentistry over 22 years ago with a vision to bring premium, patient-centred dental care to London. With decades of experience across all aspects of dentistry, Dr. Ghaffarpour leads the practice with a commitment to clinical excellence and continuous innovation.",
    specialisms: ["General Dentistry", "Cosmetic Dentistry", "Practice Leadership"],
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: true,
  },
  {
    name: "Dr. Kayvan Ahmadi",
    gdc: "GDC: 81257",
    role: "Principal Dentist & Co-Founder",
    bio: "Dr. Kayvan Ahmadi is a highly experienced dentist with a broad skill set spanning general and cosmetic dentistry. Known for his calm, reassuring manner, Dr. Ahmadi has built a loyal patient base across our London locations.",
    specialisms: ["General Dentistry", "Cosmetic Dentistry", "Patient Care"],
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false,
  },
  {
    name: "Dr. Wajih Khawaja",
    gdc: "GDC: 160549",
    role: "Specialist in Restorative Dentistry",
    bio: "BDS, RDS, MIMD (Portugal). Dr. Wajih Khawaja has a special interest in restorative dentistry, helping patients restore function and aesthetics to their smiles. His postgraduate training and meticulous approach ensure outstanding results for even the most complex cases.",
    specialisms: [],
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false,
  },
  {
    name: "Dr. Maha Hashim",
    gdc: "GDC: 113783",
    role: "Aesthetic & Orthodontic Specialist",
    bio: "BDS (Hons) London, MFDS RCSEd, LLM. Dr. Maha qualified with honours and the Newland Pedley Medal from Guy's, King's and St Thomas' Dental School. Certified in Invisalign, Six Month Smiles, and laser dentistry. Fluent in English and Arabic, she is known for her caring and empathetic manner.",
    specialisms: [],
    image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400",
    featured: false,
  },
];

export default function TeamPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-pearl">
      <div className="bg-white border-b border-light-grey/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => router.push("/")} className="flex items-center gap-2 text-warm-grey hover:text-charcoal transition-colors text-sm">
            ← Back to website
          </button>
          <div className="flex items-center gap-2.5">
            <svg width="36" height="40" viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="18" height="18" fill="#4A7FB5" rx="1"/>
              <rect x="22" y="0" width="18" height="18" fill="#7BAFD4" rx="1"/>
              <rect x="0" y="22" width="18" height="18" fill="#7BAFD4" rx="1"/>
              <rect x="22" y="22" width="18" height="18" fill="#4A7FB5" rx="1"/>
              <text x="9" y="14" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">A</text>
              <text x="31" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Georgia, serif">G</text>
            </svg>
            <span className="font-display text-lg font-semibold text-charcoal">AG Dentistry</span>
          </div>
        </div>
      </div>
      <div className="bg-charcoal py-20 px-6 text-center">
        <span className="text-sky-300 text-xs font-semibold tracking-[0.2em] uppercase">The People Behind Your Smile</span>
        <h1 className="font-display text-4xl md:text-5xl text-white mt-4 font-light">Meet our <em className="italic text-sky-300">team</em></h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">Our dentists are GDC-registered specialists who combine clinical excellence with a genuinely caring, patient-first approach.</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className={`bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 ${member.featured ? "border-slate-blue/30 ring-1 ring-slate-blue/15" : "border-light-grey/50"}`}>
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    
                    <h2 className="font-display text-xl text-charcoal font-medium">{member.name}</h2>
                    <p className="text-slate-blue text-sm font-medium mt-0.5">{member.role}</p>
                    <p className="text-warm-grey text-xs mt-0.5">{member.gdc}</p>
                    <p className="text-warm-grey text-sm leading-relaxed mt-3">{member.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.specialisms.map((s) => (
                      <span key={s} className="bg-fog text-charcoal text-xs font-medium px-3 py-1 rounded-full border border-light-grey/50">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-white border border-light-grey/50 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center shrink-0">
            <Award size={20} className="text-slate-blue" />
          </div>
          <div>
            <p className="font-semibold text-charcoal text-sm mb-1">GDC Registered Practice</p>
            <p className="text-warm-grey text-sm leading-relaxed">All our dentists adhere to the rules governing the profession under strict guidance from the General Dental Council (GDC). Verify any of our dentists at <a href="https://www.gdc-uk.org" target="_blank" rel="noopener noreferrer" className="text-slate-blue hover:underline">gdc-uk.org</a>.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => router.push("/book-appointment")} className="bg-charcoal text-white font-medium px-10 py-4 rounded-full hover:bg-slate-blue transition-all duration-300 text-sm tracking-wide">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
}
