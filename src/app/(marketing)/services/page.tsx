import { FaFlask, FaDna, FaMicroscope, FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - VAMS Biome',
  description: 'Comprehensive microbiome research services including sequencing, bioinformatics, and data analysis to advance your research.',
};

const services = [
  {
    name: 'Microbiome Sequencing',
    description: 'High-throughput sequencing services for comprehensive analysis of microbial communities.',
    icon: FaDna,
    href: '/services/sequencing',
    features: [
      '16S rRNA gene sequencing',
      'Shotgun metagenomics',
      'Whole genome sequencing',
      'Metatranscriptomics',
      'Custom panels available'
    ],
    price: 'Starting at $99/sample',
    cta: 'Learn more',
  },
  {
    name: 'Bioinformatics Analysis',
    description: 'Advanced computational analysis of microbiome data to extract meaningful biological insights.',
    icon: FaChartLine,
    href: '/services/bioinformatics',
    features: [
      'Taxonomic profiling',
      'Functional annotation',
      'Comparative analysis',
      'Statistical modeling',
      'Custom pipelines'
    ],
    price: 'Custom pricing',
    cta: 'Get a quote',
  },
  {
    name: 'Research & Development',
    description: 'Collaborative research projects to explore new frontiers in microbiome science.',
    icon: FaFlask,
    href: '/services/research',
    features: [
      'Study design consultation',
      'Method development',
      'Data interpretation',
      'Manuscript preparation',
      'Grant support'
    ],
    price: 'Project-based',
    cta: 'Discuss project',
  },
  {
    name: 'Microscopy & Imaging',
    description: 'High-resolution imaging services for detailed microbial visualization and analysis.',
    icon: FaMicroscope,
    href: '/services/microscopy',
    features: [
      'Electron microscopy',
      'Confocal microscopy',
      'Fluorescence imaging',
      '3D reconstruction',
      'Image analysis'
    ],
    price: 'Starting at $150/hour',
    cta: 'View services',
  },
];

const faqs = [
  {
    question: 'What sample types do you accept?',
    answer: 'We accept a wide range of sample types including stool, saliva, skin swabs, environmental samples, and more. Please contact us for specific requirements.'
  },
  {
    question: 'How long does sequencing take?',
    answer: 'Turnaround time varies by service, but most sequencing projects are completed within 2-4 weeks from sample receipt.'
  },
  {
    question: 'What bioinformatics analysis do you provide?',
    answer: 'Our bioinformatics services include quality control, taxonomic classification, functional annotation, statistical analysis, and custom analysis pipelines.'
  },
  {
    question: 'Do you offer custom research services?',
    answer: 'Yes, we work closely with researchers to develop custom solutions for specific research questions and experimental designs.'
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Comprehensive microbiome research services to advance your scientific discoveries and innovations.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary-50 p-3 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <p className="mt-4 text-base text-gray-500">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-900">{service.price}</p>
                    <div className="ml-3">
                      <Link
                        href={service.href}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        {service.cta}
                        <FaArrowRight className="ml-2 -mr-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our streamlined process ensures high-quality results and a seamless experience
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {[
                {
                  name: '1. Consultation',
                  description: 'Discuss your research goals and project requirements with our experts.',
                },
                {
                  name: '2. Sample Collection',
                  description: 'Collect and ship your samples using our provided kits and protocols.',
                },
                {
                  name: '3. Analysis',
                  description: 'We perform the sequencing and bioinformatics analysis with strict quality controls.',
                },
                {
                  name: '4. Results & Support',
                  description: 'Receive comprehensive reports and ongoing support for data interpretation.',
                },
              ].map((step, index) => (
                <div key={step.name} className="pt-6
                  {index < 3 ? 'lg:border-r border-gray-200' : ''} 
                  {index > 0 ? 'pt-10 lg:pt-0' : ''}
                ">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                          <span className="text-xl font-semibold text-white">{index + 1}</span>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{step.name}</h3>
                      <p className="mt-2 text-base text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Everything you need to know about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-primary-100">Contact us today to discuss your research needs.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
