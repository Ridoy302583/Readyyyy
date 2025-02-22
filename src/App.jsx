import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
