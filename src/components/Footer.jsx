import React from 'react';
import { salonInfo } from '../data/content';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F0DDD6] border-t border-[#EBD5CC] py-12 md:py-16 text-veloura-espresso" data-purpose="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Primary Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E0CAC0]">
          {/* Logo */}
          <a 
            className="font-serif text-3xl font-medium tracking-tight text-veloura-espresso hover:text-veloura-bronze transition-colors" 
            href="#"
          >
            {salonInfo.name}
          </a>

          {/* Centered Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs uppercase letter-widest-luxury text-veloura-muted font-medium">
            <a 
              onClick={(e) => scrollTo(e, '#manicure')} 
              className="hover:text-veloura-espresso transition-colors cursor-pointer" 
              href="#manicure"
            >
              Manicure and pedicure
            </a>
            <a 
              onClick={(e) => scrollTo(e, '#cosmetology')} 
              className="hover:text-veloura-espresso transition-colors cursor-pointer" 
              href="#cosmetology"
            >
              Cosmetology
            </a>
            <a 
              onClick={(e) => scrollTo(e, '#massage')} 
              className="hover:text-veloura-espresso transition-colors cursor-pointer" 
              href="#massage"
            >
              Facial and body massage
            </a>
          </div>

          {/* Phone Contact */}
          <a 
            className="text-xs md:text-sm font-sans tracking-wider text-veloura-muted hover:text-veloura-espresso transition-colors" 
            href={salonInfo.phoneTel}
          >
            {salonInfo.phoneDisplay}
          </a>
        </div>

        {/* Secondary Sub-footer with Operating Hours and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-veloura-muted gap-4 text-center sm:text-left">
          <p>{salonInfo.hours} • {salonInfo.amenity}</p>
          <p>{salonInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
