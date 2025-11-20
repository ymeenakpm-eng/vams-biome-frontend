import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "VAMS Biome's sequencing services provided us with the high-quality data we needed for our research. Their team was incredibly supportive throughout the entire process.",
    author: "Dr. Sarah Johnson",
    role: "Research Director, University of California",
    image: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    quote: "The bioinformatics analysis from VAMS Biome helped us uncover insights in our microbiome data that we had missed with other providers. Highly recommended!",
    author: "Dr. Michael Chen",
    role: "Principal Investigator, Stanford University",
    image: "/images/testimonials/michael-chen.jpg"
  },
  {
    quote: "Working with VAMS Biome has been a game-changer for our clinical research. Their expertise in microbiome analysis is unparalleled in the industry.",
    author: "Dr. Emily Rodriguez",
    role: "Clinical Researcher, Mayo Clinic",
    image: "/images/testimonials/emily-rodriguez.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what researchers and scientists are saying about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-primary mb-4">
                <FaQuoteLeft className="h-8 w-8 opacity-20" />
              </div>
              
              <blockquote className="mb-6">
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="h-full w-full bg-primary bg-opacity-10 flex items-center justify-center text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the VAMS Biome difference?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
