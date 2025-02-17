import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <i className="bi bi-cpu text-3xl text-green-600 mr-2"></i>
          <span className="text-2xl font-bold text-gray-800">Techknowgram</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-green-600">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-green-600">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-green-600">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
