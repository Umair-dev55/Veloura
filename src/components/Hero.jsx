import React from 'react';

export default function Hero({ onBookClick }) {
  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDeNIXm_tagLaqqfJZUauOC3QETEnaHLUXgdvO4DBEyGcmqMnJnVemuufxzaK0VxE_EktvB9F4iV1YVUVRpReVlRjQSts2T5fkYEP1EDj2LXYafZJWvnAuHmid8QltbFjaKYOH0E9RrWvTlztjnKLz9ijG1HE8T-jypzZtiR6kFVmCbi3IekMPudDBzIdnFVgZgox0aBqWdqxCwGLFgW1Z3R8ejTWNZk2vJ4nIOG5jux-ibtOKR5DQ";

  return (
    <section className="relative pt-12 pb-24 md:py-0 overflow-hidden bg-gradient-to-b from-[#F5E6E2] via-[#F1DFD8] to-[#FBF7F4]" data-purpose="hero-banner">
      {/* Reference-inspired organic backdrop champagne & dusty rose circular disks */}
      <div className="absolute -top-16 -left-16 w-[480px] h-[480px] rounded-full bg-[#EAD4CC]/60 pointer-events-none -z-0"></div>
      <div className="absolute top-24 left-1/4 w-72 h-72 rounded-full bg-[#FAECE7]/70 pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 -right-20 w-[520px] h-[520px] rounded-full bg-[#ECD6CE]/50 pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 z-10">
            {/* Studio Subhead */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-sm font-sans tracking-[0.2em] uppercase text-veloura-muted font-light">
                Beauty studio
              </span>
              <span className="w-10 h-[1px] bg-veloura-taupe/60"></span>
            </div>

            {/* Primary Headline with quotation marks matching reference */}
            <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl font-normal tracking-tight text-veloura-espresso leading-[0.95] mb-8">
              “Veloura”
            </h1>

            {/* Hero Action Pill Button */}
            <div className="mb-10">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#B58E72] hover:bg-veloura-espresso text-white font-medium text-sm tracking-wide shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Sign up Online
              </button>
            </div>

            {/* Minimalist editorial card snippet */}
            <div className="relative max-w-sm p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-[#EBD5CC]/60 shadow-sm">
              <p className="text-xs md:text-sm text-veloura-muted font-light leading-relaxed">
                Professional care, a calm atmosphere and a result that you will feel throughout your entire body and mind.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual with Arch & Circular Text Stamp */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Decorative Spinning Circular Badge */}
            <div className="absolute -top-8 -left-6 sm:top-2 sm:-left-12 z-30 w-44 h-44 md:w-48 md:h-48 pointer-events-auto">
              <div className="relative w-full h-full flex items-center justify-center animate-spin-badge select-none">
                <svg className="w-full h-full fill-current text-veloura-bronze" viewBox="0 0 170 170">
                  <path
                    d="M 85, 85 m -66, 0 a 66,66 0 1,1 132,0 a 66,66 0 1,1 -132,0"
                    fill="transparent"
                    id="heroCirclePath"
                  ></path>
                  <text className="text-[10px] uppercase tracking-[0.26em] font-medium fill-current">
                    <textPath href="#heroCirclePath" startOffset="0%">
                      • A BEAUTY SALON WHERE TAKING CARE OF YOURSELF IS A PLEASURE •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Main Arch Hero Image Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[3/4] overflow-hidden arch-mask shadow-2xl bg-[#E8DDD0]/50 p-2.5 border border-[#EBD5CC]">
              <img
                alt="Veloura Parisian Luxury Salon Atmosphere"
                className="w-full h-full object-cover object-center arch-mask transition-transform duration-700 hover:scale-105"
                src={heroImage}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
