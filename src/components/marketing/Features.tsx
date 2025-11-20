import { FaFlask, FaDna, FaMicroscope, FaChartLine, FaShieldAlt, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaFlask className="h-8 w-8 text-primary" />,
    title: 'Advanced Research',
    description: 'Cutting-edge microbiome research using the latest sequencing technologies and bioinformatics tools.'
  },
  {
    icon: <FaDna className="h-8 w-8 text-primary" />,
    title: 'DNA Sequencing',
    description: 'High-throughput sequencing services for comprehensive microbiome analysis and genetic insights.'
  },
  {
    icon: <FaMicroscope className="h-8 w-8 text-primary" />,
    title: 'Microscopy',
    description: 'Advanced imaging techniques for detailed microbial visualization and analysis.'
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-primary" />,
    title: 'Data Analytics',
    description: 'Powerful data analysis and visualization tools to interpret complex microbiome data.'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-primary" />,
    title: 'Quality Control',
    description: 'Rigorous quality control measures to ensure accurate and reliable results.'
  },
  {
    icon: <FaUsers className="h-8 w-8 text-primary" />,
    title: 'Expert Team',
    description: 'Dedicated team of scientists and researchers with extensive experience in microbiome studies.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Core Capabilities
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for all your microbiome research needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your microbiome research journey?
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
