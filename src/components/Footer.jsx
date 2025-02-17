import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Techknowgram</h3>
            <p className="text-gray-400">Empowering Bangladesh's digital future with innovative IT solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Custom Software</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Cloud Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2023 Techknowgram. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
