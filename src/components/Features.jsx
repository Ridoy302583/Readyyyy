import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <i className={`${icon} text-4xl text-green-600 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "bi bi-code-slash",
      title: "Custom Software Development",
      description: "Tailored software solutions to meet your unique business needs."
    },
    {
      icon: "bi bi-phone",
      title: "Mobile App Development",
      description: "Cutting-edge mobile applications for iOS and Android platforms."
    },
    {
      icon: "bi bi-cloud",
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure for your business."
    },
    {
      icon: "bi bi-shield-check",
      title: "Cybersecurity Services",
      description: "Protect your digital assets with our advanced security measures."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
