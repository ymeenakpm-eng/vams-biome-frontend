import { FaFlask, FaDna, FaMicroscope, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'About VAMS BIOME',
  description:
    'Learn about VAMS BIOME and our mission to build an AI-native microbiome ecosystem across diagnostics, AI insights, products, and care.',
};

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Scientific Officer',
    bio: 'PhD in Microbiology with over 15 years of experience in microbiome research and sequencing technologies.',
    image: '/images/team/sarah-johnson.jpg',
    placeholder: 'SJ'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Director of Bioinformatics',
    bio: 'Expert in bioinformatics and computational biology with a focus on metagenomic data analysis.',
    image: '/images/team/michael-chen.jpg',
    placeholder: 'MC'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Research',
    bio: 'Specialist in microbial ecology and its applications in human health and disease prevention.',
    image: '/images/team/emily-rodriguez.jpg',
    placeholder: 'ER'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Lead Microbiologist',
    bio: 'Expert in microbial culturing and characterization with extensive experience in clinical microbiology.',
    image: '/images/team/james-wilson.jpg',
    placeholder: 'JW'
  },
];

const stats = [
  { label: 'Research Papers Published', value: '50+' },
  { label: 'Years of Combined Experience', value: '75+' },
  { label: 'Research Projects Completed', value: '200+' },
  { label: 'Global Research Partners', value: '30+' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About VAMS BIOME
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Building an AI-native microbiome ecosystem that connects diagnostics, insights, products,
            and care for people and partners across India, Australia, and the global research
            network.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-12 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our mission & vision
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                VAMS BIOME exists to turn complex microbiome science into everyday tools for prevention,
                personalised care, and research. We bring together diagnostics, AI, marketplaces,
                telehealth, and community so people are never left alone with a confusing report.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Our vision is a world where microbiome intelligence is accessible, ethically deployed,
                and woven into routine care across India, Australia, and global collaborators.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <div className="aspect-w-3 aspect-h-2">
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                      <span>Lab Facility Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Guiding principles that define who we are and how we work
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaFlask className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Scientific Excellence</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We are committed to the highest standards of scientific rigor, integrity, and innovation in all our research and services.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaDna className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Cutting-Edge Technology</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We leverage the latest technologies and methodologies to deliver accurate, reliable, and actionable insights.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaMicroscope className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Collaboration</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We work closely with clinicians, labs, universities, and health systems to co-create
                  protocols, research programmes, and real-world evidence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Impact</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We measure success by lives improved, not just experiments completedfrom gut and
                  womens health outcomes to sustainable aquaculture programmes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="text-xl text-gray-500">
                Meet the scientists, engineers, and clinicians building the VAMS BIOME ecosystem.
              </p>
            </div>
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
              {team.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                      {person.placeholder}
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-primary">{person.role}</p>
                      </div>
                      <p className="text-gray-500 text-sm">{person.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              A growing global footprint
            </h2>
            <p className="mt-3 text-xl text-primary-100">
              Rooted in India and Australia, partnering with labs and universities across the world to
              study gut, womens, skin, oral, and environmental microbiomes.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            {stats.map((item) => (
              <div key={item.label} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-100">
                  {item.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Want to build with us?</span>
            <span className="block text-primary">Explore partnerships, pilots, or careers with VAMS BIOME.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Contact us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/about#careers"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Explore roles & collaborations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
