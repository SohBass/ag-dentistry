"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  preferredLocation: string;
  preferredDay: string;
  preferredTime: string;
  treatmentInterest: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  preferredLocation: "",
  preferredDay: "",
  preferredTime: "",
  treatmentInterest: "",
  notes: "",
};

const locations = ["Kentish Town", "Kensal Rise", "Harley Street (Implants)", "No Preference"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "No Preference"];
const times = ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–7pm)", "No Preference"];
const treatments = [
  "General Check-up / Hygiene",
  "Teeth Whitening",
  "Invisalign / Orthodontics",
  "Cosmetic Dentistry / Veneers",
  "Dental Implants",
  "Emergency / Urgent Care",
  "Other / Not Sure",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim() || data.fullName.trim().length < 2)
    errors.fullName = "Please enter your full name.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.phone.trim() || !/^[\d\s\+\-\(\)]{7,}$/.test(data.phone))
    errors.phone = "Please enter a valid phone number.";
  if (!data.preferredLocation) errors.preferredLocation = "Please select a location.";
  if (!data.treatmentInterest) errors.treatmentInterest = "Please select a treatment.";
  return errors;
}

export default function NewPatientForm() {
  const ref = useScrollReveal();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      // Using Formspree for email delivery — replace YOUR_FORM_ID with your Formspree form ID
      // Sign up free at formspree.io and create a form to get an ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          location: form.preferredLocation,
          preferred_day: form.preferredDay || "No preference",
          preferred_time: form.preferredTime || "No preference",
          treatment: form.treatmentInterest,
          notes: form.notes || "None",
          _subject: `New Patient Enquiry - ${form.fullName}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `form-input w-full bg-white border rounded-xl px-4 py-3 text-charcoal text-sm placeholder-warm-grey/60 ${
      errors[field]
        ? "border-red-400 bg-red-50/30"
        : "border-light-grey hover:border-slate-blue/40"
    }`;

  return (
    <section id="new-patient" className="py-28 bg-pearl" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="reveal">
              <span className="text-slate-blue text-xs font-semibold tracking-[0.2em] uppercase">New Patients</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3 leading-tight font-light mb-6">
                Ready to get{" "}
                <em className="italic text-slate-blue">started?</em>
              </h2>
              <p className="text-warm-grey leading-relaxed mb-8">
                Complete the form and one of our patient care team will be in touch within one working day to arrange your consultation or appointment.
              </p>
            </div>

            {/* What to expect */}
            <div className="reveal reveal-delay-1 space-y-4">
              {[
                { step: "01", title: "Submit your enquiry", desc: "Fill in the form with your details and preferences." },
                { step: "02", title: "We'll be in touch", desc: "Our team will contact you within one working day." },
                { step: "03", title: "Your consultation", desc: "Meet your dentist for a thorough, no-pressure assessment." },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-mist border border-slate-blue/20 flex items-center justify-center text-slate-blue text-xs font-semibold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm mb-1">{s.title}</div>
                    <div className="text-warm-grey text-sm leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust marks */}
            <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-4">
              {["GDC Registered", "CQC Compliant", "NHS & Private", "0% Finance Available"].map((t) => (
                <span key={t} className="bg-white border border-light-grey/60 text-charcoal text-xs font-medium px-3 py-1.5 rounded-full">
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white rounded-3xl shadow-xl shadow-charcoal/5 border border-light-grey/40 p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={30} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-3">Enquiry Received</h3>
                  <p className="text-warm-grey leading-relaxed mb-6">
                    Thank you for getting in touch. A member of our patient care team will contact you within one working day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-slate-blue text-sm font-medium hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-2xl text-charcoal mb-7 font-medium">New Patient Enquiry</h3>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass("fullName")}
                        autoComplete="name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@email.com"
                          className={inputClass("email")}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Phone <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="07700 900 123"
                          className={inputClass("phone")}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Preferred Clinic Location <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="preferredLocation"
                        value={form.preferredLocation}
                        onChange={handleChange}
                        className={`${inputClass("preferredLocation")} cursor-pointer`}
                      >
                        <option value="">Select a location…</option>
                        {locations.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                      {errors.preferredLocation && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.preferredLocation}
                        </p>
                      )}
                    </div>

                    {/* Day + Time */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Day</label>
                        <select
                          name="preferredDay"
                          value={form.preferredDay}
                          onChange={handleChange}
                          className={`${inputClass("preferredDay")} cursor-pointer`}
                        >
                          <option value="">Select…</option>
                          {days.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Time</label>
                        <select
                          name="preferredTime"
                          value={form.preferredTime}
                          onChange={handleChange}
                          className={`${inputClass("preferredTime")} cursor-pointer`}
                        >
                          <option value="">Select…</option>
                          {times.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Treatment Interest <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="treatmentInterest"
                        value={form.treatmentInterest}
                        onChange={handleChange}
                        className={`${inputClass("treatmentInterest")} cursor-pointer`}
                      >
                        <option value="">Select a treatment…</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.treatmentInterest && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.treatmentInterest}
                        </p>
                      )}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Additional Notes{" "}
                        <span className="text-warm-grey font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any concerns, dental history, or questions for the team…"
                        className={`${inputClass("notes")} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        <AlertCircle size={16} />
                        There was an issue submitting your form. Please try again or call us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-charcoal text-white font-medium py-4 rounded-xl hover:bg-slate-blue transition-all duration-300 text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </button>

                    <p className="text-warm-grey text-xs text-center leading-relaxed">
                      By submitting this form you agree to our{" "}
                      <a href="#" className="text-slate-blue hover:underline">Privacy Policy</a>.{" "}
                      We'll never share your data with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
