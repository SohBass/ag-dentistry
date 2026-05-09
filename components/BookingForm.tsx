"use client";
import { useState } from "react";
import { CheckCircle, Loader2, AlertCircle, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type FormState = {
  // Patient Details
  firstName: string;
  surname: string;
  dob: string;
  email: string;
  // Visit
  reasonForVisit: string;
  // Oral Hygiene
  electricToothbrush: string;
  manualToothbrush: string;
  brushMorning: string;
  brushNight: string;
  flossing: string;
  flossingFrequency: string;
  interdentalBrushes: string;
  interdentalFrequency: string;
  superflossing: string;
  superflossingFrequency: string;
  // Smoking
  smoking: string;
  smokingAmount: string;
  smokingDuration: string;
  // Alcohol
  alcoholUnits: string;
  // Treatment Interest
  treatments: string[];
  // Additional
  additionalNotes: string;
  // Preferred location
  preferredLocation: string;
};

const initialForm: FormState = {
  firstName: "",
  surname: "",
  dob: "",
  email: "",
  reasonForVisit: "",
  electricToothbrush: "",
  manualToothbrush: "",
  brushMorning: "",
  brushNight: "",
  flossing: "",
  flossingFrequency: "",
  interdentalBrushes: "",
  interdentalFrequency: "",
  superflossing: "",
  superflossingFrequency: "",
  smoking: "",
  smokingAmount: "",
  smokingDuration: "",
  alcoholUnits: "",
  treatments: [],
  additionalNotes: "",
  preferredLocation: "",
};

const treatmentOptions = [
  "No treatment (assessment only)",
  "Extraction / Implants / Bridges / Dentures",
  "Fillings",
  "Inlays",
  "Onlays",
  "Crowns",
  "Veneers",
  "Course of antibiotics",
  "Temporising",
  "Referral / Second opinion",
  "Teeth Whitening",
  "Invisalign / Orthodontics",
  "Facial Rejuvenation",
];

const YesNo = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, val: string) => void;
}) => (
  <div className="flex items-center justify-between py-3 border-b border-light-grey/40 last:border-0">
    <span className="text-sm text-charcoal/80">{label}</span>
    <div className="flex gap-4">
      {["Yes", "No"].map((opt) => (
        <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
          <div
            onClick={() => onChange(name, opt)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
              value === opt
                ? "border-slate-blue bg-slate-blue"
                : "border-light-grey hover:border-slate-blue/50"
            }`}
          >
            {value === opt && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-sm text-charcoal/70">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const inputClass = "w-full bg-white border border-light-grey rounded-xl px-4 py-3 text-charcoal text-sm placeholder-warm-grey/50 focus:border-slate-blue focus:ring-2 focus:ring-slate-blue/10 outline-none transition-all";

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleTreatment = (treatment: string) => {
    setForm((prev) => ({
      ...prev,
      treatments: prev.treatments.includes(treatment)
        ? prev.treatments.filter((t) => t !== treatment)
        : [...prev.treatments, treatment],
    }));
  };

  const validate = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.surname.trim()) errs.surname = "Required";
    if (!form.dob) errs.dob = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.preferredLocation) errs.preferredLocation = "Please select a location";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setStatus("loading");

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Patient Booking - ${form.firstName} ${form.surname}`,
          "Patient Name": `${form.firstName} ${form.surname}`,
          "Date of Birth": form.dob,
          "Email": form.email,
          "Preferred Location": form.preferredLocation,
          "Reason for Visit": form.reasonForVisit || "Not specified",
          "Electric Toothbrush": form.electricToothbrush,
          "Manual Toothbrush": form.manualToothbrush,
          "Brushes Morning": form.brushMorning,
          "Brushes Night": form.brushNight,
          "Flossing": form.flossing,
          "Flossing Frequency": form.flossingFrequency || "N/A",
          "Interdental Brushes": form.interdentalBrushes,
          "Interdental Frequency": form.interdentalFrequency || "N/A",
          "Superflossing": form.superflossing,
          "Superflossing Frequency": form.superflossingFrequency || "N/A",
          "Smoking": form.smoking,
          "Smoking Amount": form.smokingAmount || "N/A",
          "Smoking Duration": form.smokingDuration || "N/A",
          "Alcohol Units/Day": form.alcoholUnits || "N/A",
          "Treatment Interest": form.treatments.length > 0 ? form.treatments.join(", ") : "Not specified",
          "Additional Notes": form.additionalNotes || "None",
        }),
      });

      if (response.ok) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-500" />
          </div>
          <h1 className="font-display text-3xl text-charcoal mb-4 font-light">
            Booking Received
          </h1>
          <p className="text-warm-grey leading-relaxed mb-3">
            Thank you, <strong className="text-charcoal">{form.firstName}</strong>. Your appointment request has been submitted successfully.
          </p>
          <p className="text-warm-grey leading-relaxed mb-8">
            We will get back to you within <strong className="text-charcoal">24 working hours</strong> to confirm your appointment.
          </p>
          <div className="bg-mist border border-slate-blue/20 rounded-2xl p-5 mb-8 text-left">
            <p className="text-sm text-charcoal font-medium mb-1">A confirmation has been sent to:</p>
            <p className="text-slate-blue text-sm">{form.email}</p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="bg-slate-blue text-white font-medium px-8 py-3.5 rounded-full hover:bg-slate-blue-dark transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl">
      {/* Header */}
      <div className="bg-white border-b border-light-grey/50 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-warm-grey hover:text-charcoal transition-colors text-sm"
          >
            <ChevronLeft size={16} /> Back to website
          </button>
          {/* Logo */}
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

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">New Patient</span>
          <h1 className="font-display text-4xl text-charcoal mt-3 font-light">
            Book an Appointment
          </h1>
          <p className="text-warm-grey mt-3 leading-relaxed">
            Please complete all sections below. We will contact you within <strong className="text-charcoal">24 working hours</strong> to confirm your appointment.
          </p>
        </div>

        {/* Error summary */}
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 mb-8 flex items-start gap-3">
            <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
            <p className="text-red-700 text-sm">Please fill in all required fields marked with *</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-8">

          {/* ── PATIENT DETAILS ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Patient Details</h2>
            </div>
            <div className="p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input name="firstName" value={form.firstName} onChange={handleInput}
                    placeholder="Jane" className={`${inputClass} ${errors.firstName ? "border-red-400" : ""}`} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Surname <span className="text-red-400">*</span>
                  </label>
                  <input name="surname" value={form.surname} onChange={handleInput}
                    placeholder="Smith" className={`${inputClass} ${errors.surname ? "border-red-400" : ""}`} />
                  {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Date of Birth <span className="text-red-400">*</span>
                  </label>
                  <input type="date" name="dob" value={form.dob} onChange={handleInput}
                    className={`${inputClass} ${errors.dob ? "border-red-400" : ""}`} />
                  {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleInput}
                    placeholder="jane@email.com" className={`${inputClass} ${errors.email ? "border-red-400" : ""}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Preferred Clinic Location <span className="text-red-400">*</span>
                </label>
                <select name="preferredLocation" value={form.preferredLocation} onChange={handleInput}
                  className={`${inputClass} cursor-pointer ${errors.preferredLocation ? "border-red-400" : ""}`}>
                  <option value="">Select a location…</option>
                  <option>Kentish Town</option>
                  <option>Kensal Rise</option>
                  <option>Harley Street (Implants)</option>
                  <option>No Preference</option>
                </select>
                {errors.preferredLocation && <p className="text-red-500 text-xs mt-1">{errors.preferredLocation}</p>}
              </div>
            </div>
          </div>

          {/* ── REASON FOR VISIT ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Reason for Visit</h2>
            </div>
            <div className="p-7">
              <textarea name="reasonForVisit" value={form.reasonForVisit} onChange={handleInput}
                rows={3} placeholder="Please describe your reason for visiting…"
                className={`${inputClass} resize-none`} />
            </div>
          </div>

          {/* ── ORAL HYGIENE ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Oral Hygiene Routine</h2>
            </div>
            <div className="p-7 space-y-1">
              <YesNo label="Electric toothbrush" name="electricToothbrush" value={form.electricToothbrush} onChange={handleChange} />
              <YesNo label="Manual toothbrush" name="manualToothbrush" value={form.manualToothbrush} onChange={handleChange} />
              <YesNo label="Brushing — Morning" name="brushMorning" value={form.brushMorning} onChange={handleChange} />
              <YesNo label="Brushing — Night" name="brushNight" value={form.brushNight} onChange={handleChange} />
              <YesNo label="Flossing" name="flossing" value={form.flossing} onChange={handleChange} />
              {form.flossing === "Yes" && (
                <div className="pl-4 pt-2 pb-1">
                  <input name="flossingFrequency" value={form.flossingFrequency} onChange={handleInput}
                    placeholder="How often?" className={`${inputClass} max-w-xs`} />
                </div>
              )}
              <YesNo label="Interdental brushes" name="interdentalBrushes" value={form.interdentalBrushes} onChange={handleChange} />
              {form.interdentalBrushes === "Yes" && (
                <div className="pl-4 pt-2 pb-1">
                  <input name="interdentalFrequency" value={form.interdentalFrequency} onChange={handleInput}
                    placeholder="How often?" className={`${inputClass} max-w-xs`} />
                </div>
              )}
              <YesNo label="Superflossing" name="superflossing" value={form.superflossing} onChange={handleChange} />
              {form.superflossing === "Yes" && (
                <div className="pl-4 pt-2 pb-1">
                  <input name="superflossingFrequency" value={form.superflossingFrequency} onChange={handleInput}
                    placeholder="How often?" className={`${inputClass} max-w-xs`} />
                </div>
              )}
            </div>
          </div>

          {/* ── SMOKING ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Smoking</h2>
            </div>
            <div className="p-7 space-y-1">
              <YesNo label="Do you smoke?" name="smoking" value={form.smoking} onChange={handleChange} />
              {form.smoking === "Yes" && (
                <div className="grid sm:grid-cols-2 gap-4 pt-3">
                  <input name="smokingAmount" value={form.smokingAmount} onChange={handleInput}
                    placeholder="How many per day?" className={inputClass} />
                  <input name="smokingDuration" value={form.smokingDuration} onChange={handleInput}
                    placeholder="For how long?" className={inputClass} />
                </div>
              )}
            </div>
          </div>

          {/* ── ALCOHOL ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Alcohol Consumption</h2>
            </div>
            <div className="p-7">
              <label className="block text-sm font-medium text-charcoal mb-1.5">Units per day</label>
              <input name="alcoholUnits" value={form.alcoholUnits} onChange={handleInput}
                placeholder="e.g. 2 units" className={`${inputClass} max-w-xs`} />
            </div>
          </div>

          {/* ── TREATMENT OPTIONS ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Treatment Interest</h2>
              <p className="text-white/70 text-xs mt-1">Select all that apply</p>
            </div>
            <div className="p-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {treatmentOptions.map((treatment) => (
                  <label key={treatment} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => handleTreatment(treatment)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                        form.treatments.includes(treatment)
                          ? "border-slate-blue bg-slate-blue"
                          : "border-light-grey group-hover:border-slate-blue/50"
                      }`}
                    >
                      {form.treatments.includes(treatment) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-charcoal/80 group-hover:text-charcoal transition-colors">{treatment}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ── ADDITIONAL NOTES ── */}
          <div className="bg-white rounded-3xl border border-light-grey/50 shadow-sm overflow-hidden">
            <div className="bg-slate-blue px-7 py-4">
              <h2 className="text-white font-semibold tracking-wide">Additional Notes</h2>
            </div>
            <div className="p-7">
              <textarea name="additionalNotes" value={form.additionalNotes} onChange={handleInput}
                rows={4} placeholder="Any other information you'd like to share with us…"
                className={`${inputClass} resize-none`} />
            </div>
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={16} />
              There was a problem submitting your form. Please try again or call us on 0207 267 7653.
            </div>
          )}

          {/* Submit */}
          <button type="submit" disabled={status === "loading"}
            className="w-full bg-charcoal text-white font-medium py-4 rounded-2xl hover:bg-slate-blue transition-all duration-300 text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg">
            {status === "loading" ? (
              <><Loader2 size={16} className="animate-spin" /> Submitting…</>
            ) : (
              "Submit Booking Request"
            )}
          </button>

          <p className="text-warm-grey text-xs text-center leading-relaxed pb-8">
            By submitting this form you agree to our Privacy Policy. Your information is kept confidential and will only be used to arrange your appointment.
          </p>
        </form>
      </div>
    </div>
  );
}
