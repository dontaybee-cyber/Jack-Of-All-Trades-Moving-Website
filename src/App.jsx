import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EstimateAssistant from './components/EstimateAssistant';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Roadmap from './components/Roadmap';
import Booking from './components/Booking';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-industrialYellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <EstimateAssistant />
        <AboutUs />
        <WhyUs />
        <Roadmap />
        <Booking />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;