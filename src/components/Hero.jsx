import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovative IT Solutions for Bangladesh's Digital Future</h1>
          <p className="text-xl mb-8">Empowering businesses with cutting-edge technology and expert IT services.</p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore Our Services
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="Techknowgram IT Solutions" className="rounded-lg shadow-xl" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
