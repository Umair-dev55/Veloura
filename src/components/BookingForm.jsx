import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { treatmentOptions } from '../data/content';

export default function BookingForm({ selectedTreatment, onResetTreatment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: treatmentOptions[0],
    date: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({
        ...prev,
        treatment: selectedTreatment
      }));
    }
  }, [selectedTreatment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate concierge reservation dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      treatment: treatmentOptions[0],
      date: ''
    });
    if (onResetTreatment) onResetTreatment();
  };

  return (
    <section 
      className="py-20 md:py-28 bg-[#FBF7F4] relative overflow-hidden" 
      data-purpose="booking-form" 
      id="booking"
    >
      {/* Organic ambient shapes */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#F4E6E1] soft-blur-orb pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative bg-gradient-to-br from-[#F6ECE7] to-[#EFE2DB] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#EBD5CC] shadow-xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-veloura-bronze font-medium block mb-3">
            Reservations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-veloura-espresso font-normal tracking-tight mb-4">
            Begin Your Veloura Ritual
          </h2>
          <p className="text-veloura-muted font-light max-w-xl mx-auto mb-10 text-xs sm:text-sm md:text-base leading-relaxed">
            Choose your signature treatment and optimal time. Our Parisian-trained beauty concierges will curate an unforgettable experience.
          </p>

          {isSubmitted ? (
            <div className="max-w-md mx-auto p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#EBD5CC] text-center shadow-lg animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F5E6E2] text-veloura-bronze flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-veloura-bronze" />
              </div>
              <h3 className="font-serif text-3xl text-veloura-espresso mb-2">
                Merci, {formData.name || 'Cher Invité'}!
              </h3>
              <p className="text-sm text-veloura-muted leading-relaxed mb-6 font-light">
                Your reservation request for <strong className="text-veloura-espresso font-medium">{formData.treatment}</strong> has been received. Our concierge will contact you at <span className="font-medium text-veloura-espresso">{formData.phone}</span> shortly to finalize your appointment.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#B58E72] hover:bg-veloura-espresso text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Another Treatment</span>
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left"
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-veloura-muted mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#EBD5CC] text-veloura-espresso placeholder-veloura-taupe/70 text-sm focus:ring-1 focus:ring-veloura-bronze focus:border-veloura-bronze transition-all outline-none"
                  placeholder="Camille Laurent"
                  required
                  type="text"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-veloura-muted mb-1.5 font-medium">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#EBD5CC] text-veloura-espresso placeholder-veloura-taupe/70 text-sm focus:ring-1 focus:ring-veloura-bronze focus:border-veloura-bronze transition-all outline-none"
                  placeholder="+1 (555) 000-0000"
                  required
                  type="tel"
                />
              </div>

              {/* Desired Ritual */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-veloura-muted mb-1.5 font-medium">
                  Treatment Preference
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#EBD5CC] text-veloura-espresso text-sm focus:ring-1 focus:ring-veloura-bronze focus:border-veloura-bronze transition-all outline-none cursor-pointer"
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-veloura-muted mb-1.5 font-medium">
                  Preferred Date
                </label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#EBD5CC] text-veloura-espresso text-sm focus:ring-1 focus:ring-veloura-bronze focus:border-veloura-bronze transition-all outline-none cursor-pointer"
                  type="date"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 mt-4 text-center">
                <button
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#B58E72] hover:bg-veloura-espresso text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  type="submit"
                >
                  {isSubmitting ? "Submitting Request..." : "Confirm Appointment Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
