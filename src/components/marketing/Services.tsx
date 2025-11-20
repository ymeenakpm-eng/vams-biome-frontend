import { FaFlask, FaDna, FaMicroscope, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaDna className="h-10 w-10 text-primary" />,
    title: 'Microbiome Sequencing',
    description: 'Comprehensive sequencing services to analyze and characterize microbial communities with high precision and accuracy.',
    features: [
      '16S rRNA gene sequencing',
      'Shotgun metagenomics',
      'Metatranscriptomics',
      'Custom bioinformatics analysis'
    ],
    cta: 'Learn More',
    ctaLink: '/services/sequencing'
  },
  {
    icon: <FaFlask className="h-10 w-10 text-primary" />,
    title: 'Research & Development',
    description: 'Collaborative research projects to explore the microbiome and develop innovative solutions for health and industry.',
    features: [
      'Custom research design',
      'Method development',
      'Data interpretation',
      'Publication support'
    ],
    cta: 'Start a Project',
    ctaLink: '/services/research'
  },
  {
    icon: <FaMicroscope className="h-10 w-10 text-primary" />,
    title: 'Microscopy Services',
    description: 'Advanced imaging services for detailed analysis of microbial samples using state-of-the-art microscopy techniques.',
    features: [
      'Electron microscopy',
      'Confocal microscopy',
      'Fluorescence imaging',
      'Image analysis'
    ],
    cta: 'View Services',
    ctaLink: '/services/microscopy'
  },
  {
    icon: <FaChartLine className="h-10 w-10 text-primary" />,
    title: 'Data Analysis',
    description: 'Expert bioinformatics and statistical analysis to derive meaningful insights from complex microbiome datasets.',
    features: [
      'Metagenomic analysis',
      'Statistical modeling',
      'Data visualization',
      'Custom pipelines'
    ],
    cta: 'Explore Analysis',
    ctaLink: '/services/analysis'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your microbiome research needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={service.ctaLink}
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                {service.cta}
                <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Have a specific research need? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Contact Us
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
