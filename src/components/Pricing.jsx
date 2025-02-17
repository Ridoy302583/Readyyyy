import React from 'react';

const PricingCard = ({ plan, price, features, recommended }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md ${recommended ? 'border-2 border-green-600' : ''}`}>
    {recommended && (
      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
        Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{plan}</h3>
    <p className="text-4xl font-bold mb-6">৳{price}<span className="text-lg font-normal text-gray-500">/mo</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <i className="bi bi-check2 text-green-500 mr-2"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-md font-semibold ${recommended ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      plan: "Startup",
      price: "15,000",
      features: ["5 Users", "10GB Storage", "Basic Support", "1 Project"],
      recommended: false
    },
    {
      plan: "Business",
      price: "45,000",
      features: ["20 Users", "50GB Storage", "Priority Support", "5 Projects"],
      recommended: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Unlimited Users", "Custom Storage", "24/7 Support", "Unlimited Projects"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
