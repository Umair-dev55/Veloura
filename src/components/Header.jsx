import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { salonInfo, navLinks } from '../data/content';

export default function Header({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7F4]/90 backdrop-blur-md border-b border-[#EBD5CC]/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          aria-label="Veloura Home" 
          className="group inline-flex items-baseline gap-1"
        >
          <span className="font-serif text-3xl md:text-4xl tracking-tight text-veloura-espresso font-medium group-hover:text-veloura-bronze transition-colors">
            {salonInfo.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-veloura-gold"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-10 text-xs uppercase  font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-veloura-espresso transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Phone & Quick Action Button */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 font-sans text-xs tracking-wider text-veloura-muted hover:text-veloura-espresso transition-colors"
            href={salonInfo.phoneTel}
          >
            <Phone className="w-3.5 h-3.5 text-veloura-bronze" />
            <span>{salonInfo.phoneDisplay}</span>
          </a>
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 rounded-full bg-[#B58E72] hover:bg-veloura-espresso text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            Sign up Online
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-veloura-espresso hover:bg-veloura-rose/30 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F2] border-b border-[#EBD5CC] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 text-xs uppercase letter-widest-luxury font-medium text-veloura-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1 hover:text-veloura-espresso transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EBD5CC]/60 flex items-center justify-between">
              <a
                className="inline-flex items-center gap-2 text-xs tracking-wider text-veloura-muted hover:text-veloura-espresso"
                href={salonInfo.phoneTel}
              >
                <Phone className="w-3.5 h-3.5 text-veloura-bronze" />
                <span>{salonInfo.phoneDisplay}</span>
              </a>
              <span className="text-[10px] text-veloura-taupe">Parisian Sanctuary</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
