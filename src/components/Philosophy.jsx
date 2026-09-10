import React from 'react';

export default function Philosophy() {
  return (
    <section 
      className="py-16 md:py-24 bg-[#FBF7F4] relative border-t border-[#EBD5CC]/40" 
      data-purpose="philosophy-manifesto" 
      id="philosophy"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.28em] text-veloura-bronze font-medium block mb-3">
          Our Mission
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-veloura-espresso font-normal tracking-tight mb-8">
          Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-veloura-muted font-light leading-relaxed max-w-2xl mx-auto">
          We have created a space where you can slow down, relax and entrust yourself to certified professionals. Our salon is built upon careful care, devotion to detail, and the ultimate comfort of each client.
        </p>
      </div>
    </section>
  );
}
