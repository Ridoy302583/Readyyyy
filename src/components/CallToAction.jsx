import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-green-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-white mb-8">Let's discuss how Techknowgram can help you achieve your digital goals.</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
