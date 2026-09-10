import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import MassageSection from './components/MassageSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const scrollToBooking = (treatmentName) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F4] text-veloura-espresso font-sans antialiased selection:bg-veloura-rose selection:text-veloura-espresso">
      {/* Site Header */}
      <Header onBookClick={() => scrollToBooking()} />

      <main>
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* Philosophy Manifesto Section */}
        <Philosophy />

        {/* Curated Services Showcase */}
        <Services onSelectTreatment={scrollToBooking} />

        {/* Deep Massage and Ritual Details */}
        <MassageSection onSelectTreatment={scrollToBooking} />

        {/* Interactive Booking CTA Section */}
        <BookingForm 
          selectedTreatment={selectedTreatment} 
          onResetTreatment={() => setSelectedTreatment('')} 
        />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
