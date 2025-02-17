import React from 'react';

const TestimonialCard = ({ quote, author, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">{quote}</p>
    <div className="flex items-center">
      <img src={`https://i.pravatar.cc/60?u=${author}`} alt={author} className="w-12 h-12 rounded-full mr-4" crossOrigin="anonymous" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Techknowgram has transformed our business with their innovative IT solutions. Their expertise in the Bangladeshi market is unparalleled.",
      author: "Rashid Ahmed",
      company: "BanglaTraders Ltd."
    },
    {
      quote: "The mobile app developed by Techknowgram has significantly improved our customer engagement. Highly recommended!",
      author: "Fatima Rahman",
      company: "DhakaTech Innovations"
    },
    {
      quote: "Techknowgram's cybersecurity services have given us peace of mind. They truly understand the digital landscape of Bangladesh.",
      author: "Kamal Hossain",
      company: "Bengal Bank"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
