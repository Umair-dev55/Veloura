import React from 'react';
import { massageTreatments } from '../data/content';

export default function MassageSection({ onSelectTreatment }) {
  const largePortraitImage = "https://lh3.googleusercontent.com/aida/AEtjO1VTuiPhmLZVKIJtW_o_hLPYeYILnf4GjaymX4rpwNfXF33yaMUg5oVyAnbLr42nxtWEXJNAQIHd2KsgGbcxYtAmaAEW7-m3Sd_ROP1ZJpUfJn_C6bbhONZBPW6DNw6r1S13digfKsf3jU_pQ5Rer2uEDrf6z8NIFc8UNHjBBP6ozvFzkp8Hh4LZKp9i9JxT2z9rv9H1N_lLlCmgoiqxlurX2YV0_hM6OIQ6uwzpqey6in5W_fK3Q_aH";

  return (
    <section 
      className="py-20 md:py-32 bg-gradient-to-b from-[#F5E6E2]/70 via-[#F3E2DC]/60 to-[#FBF7F4] relative border-t border-b border-[#EBD5CC]/50" 
      data-purpose="massage-details" 
      id="massage"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#EBD5CC]/40 soft-blur-orb pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Large Portrait Frame with Arch Styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[3/4] arch-mask overflow-hidden shadow-2xl bg-[#E8DDD0]/50 p-2.5 border border-[#EBD5CC]">
              <img
                alt="Facial and body massage ritual"
                className="w-full h-full object-cover object-center arch-mask hover:scale-105 transition-transform duration-700"
                src={largePortraitImage}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content: Split Detail Blocks matching reference rhythm */}
          <div className="lg:col-span-7 space-y-10">
            {/* Section Heading */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-veloura-bronze font-medium block mb-2">
                Holistic Wellness
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-veloura-espresso font-normal tracking-tight">
                Facial and body massage
              </h2>
            </div>

            {/* Treatment Block A: Gua Sha / Facial Sculpting */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#EBD5CC] shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:col-span-7">
                <h4 className="font-serif text-2xl text-veloura-espresso font-medium mb-3">
                  {massageTreatments[0].title}
                </h4>
                <p className="text-xs sm:text-sm text-veloura-muted leading-relaxed font-light">
                  {massageTreatments[0].description}
                </p>
                <div className="mt-5 flex items-center gap-5">
                  <span className="text-sm font-medium text-veloura-bronze tracking-wide">
                    {massageTreatments[0].pricing}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectTreatment && onSelectTreatment(massageTreatments[0].treatmentValue)}
                    className="text-xs uppercase tracking-widest font-semibold text-veloura-espresso underline underline-offset-4 hover:text-veloura-bronze transition-colors cursor-pointer"
                  >
                    Book this →
                  </button>
                </div>
              </div>
              <div className="sm:col-span-5">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#EBD5CC]/60">
                  <img
                    alt="Facial Gua Sha Technique"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    src={massageTreatments[0].image}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Treatment Block B: Deep Body Massage */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#EBD5CC] shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:col-span-5 order-2 sm:order-1">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#EBD5CC]/60">
                  <img
                    alt="Deep Body Massage Therapy"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    src={massageTreatments[1].image}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sm:col-span-7 order-1 sm:order-2">
                <h4 className="font-serif text-2xl text-veloura-espresso font-medium mb-3">
                  {massageTreatments[1].title}
                </h4>
                <p className="text-xs sm:text-sm text-veloura-muted leading-relaxed font-light">
                  {massageTreatments[1].description}
                </p>
                <div className="mt-5 flex items-center gap-5">
                  <span className="text-sm font-medium text-veloura-bronze tracking-wide">
                    {massageTreatments[1].pricing}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectTreatment && onSelectTreatment(massageTreatments[1].treatmentValue)}
                    className="text-xs uppercase tracking-widest font-semibold text-veloura-espresso underline underline-offset-4 hover:text-veloura-bronze transition-colors cursor-pointer"
                  >
                    Book this →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
