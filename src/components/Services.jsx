import React from 'react';
import { curatedServices } from '../data/content';

export default function Services({ onSelectTreatment }) {
  return (
    <section className="py-12 md:py-20 bg-[#FBF7F4]" data-purpose="services-grid" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {curatedServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="md:col-span-4 flex flex-col items-center text-center group cursor-pointer"
              onClick={() => onSelectTreatment && onSelectTreatment(service.treatmentValue)}
            >
              <div
                className={`relative w-full ${service.maxW} ${service.aspectClass} ${service.maskClass} overflow-hidden ${service.bgClass} p-2 sm:p-2.5 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-500 border border-[#EBD5CC] flex items-center justify-center`}
              >
                <img
                  alt={service.title}
                  className={`w-full h-full object-cover object-center ${service.maskClass} group-hover:scale-105 transition-transform duration-700`}
                  src={service.image}
                  loading="lazy"
                />
              </div>

              <h3 className="font-serif text-2xl text-veloura-espresso font-normal tracking-tight mb-2 group-hover:text-veloura-bronze transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-veloura-muted tracking-wider uppercase font-light">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
