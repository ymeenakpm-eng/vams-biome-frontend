import { FaFlask, FaDna, FaMicroscope, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          {/* Deep space-like gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-900/90 to-sky-900" />
          {/* Soft radial glow behind image */}
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:px-8">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About VAMS BIOME
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl text-justify">
              Building an AI-native microbiome ecosystem that connects diagnostics, insights, products,
              and care for people and partners across India, Australia, and the global research
              network.
            </p>
          </div>
          <div className="relative hidden h-64 flex-1 overflow-hidden rounded-3xl bg-slate-900/80 ring-1 ring-white/10 md:block lg:h-80">
            <Image
              src="/images/lab-hero.jpg"
              alt="VAMS BIOME lab and research environment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-12 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                About VAMS BIOME
              </h2>
              <p className="mt-4 text-base text-gray-700 leading-relaxed text-justify">
                VAMS BIOME is a next-generation biotech and wellness company positioned at the
                intersection of sustainable aquaculture and personalized human health. Our
                foundation is in the high-demand aquaculture probiotics market, with a clear
                expansion pathway into human microbiome solutions. We are developing an
                AI-powered platform for microbiome testing, personalized reporting, and
                therapeutic development. Our initial focus is women&apos;s health—a segment
                characterized by high customer loyalty, significant unmet clinical needs, and
                long-term growth potential.
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-900">Mission</h3>
              <p className="mt-2 text-base text-gray-700 leading-relaxed text-justify">
                To decode the human microbiome and deliver personalized, actionable health
                insights and sustainable probiotic innovations that transform both individual
                wellness and global food production.
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-900">Our commitment to gut health</h3>
              <p className="mt-2 text-base text-gray-700 leading-relaxed text-justify">
                At our core, we are dedicated to enhancing gut health through cutting-edge
                research and personalized solutions. Our mission is to empower individuals with
                the tools and knowledge necessary to understand their gut microbiome better and
                connect them with healthcare professionals for tailored treatments.
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-900">Empowering gut health: our journey</h3>
              <p className="mt-2 text-base text-gray-700 leading-relaxed text-justify">
                Since our founding, we have dedicated ourselves to revolutionizing gut health.
                Our journey highlights key milestones in our mission to detect and treat gut
                bacteria effectively. Each step represents progress in advancing science and
                empowering individuals to take control of their wellness.
              </p>

              <ul className="mt-4 space-y-2 text-base text-gray-700 leading-relaxed text-justify">
                <li>
                  <span className="font-semibold">Launch of testing kits.</span> Introduced user-friendly
                  gut bacteria testing kits, making health tracking accessible to everyone.
                </li>
                <li>
                  <span className="font-semibold">AI report integration.</span> Launched AI-driven report
                  generation to provide insightful and personalized health assessments.
                </li>
                <li>
                  <span className="font-semibold">Telehealth services started.</span> Began offering
                  telehealth services to connect users with expert doctors for personalized
                  guidance.
                </li>
                <li>
                  <span className="font-semibold">Probiotic marketplace unveiled.</span> Introduced a
                  marketplace for probiotics, making it easier to find quality wellness products.
                </li>
                <li>
                  <span className="font-semibold">User registration portal launch.</span> Launched a
                  registration system that allows for personalized profiles and health tracking.
                </li>
              </ul>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:h-full">
              <div className="relative mx-auto w-full h-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                <Image
                  src="/images/hero-scientist-bacteria.jpg"
                  alt="VAMS BIOME kit and lab environment"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
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
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-justify">
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
                <p className="mt-2 ml-16 text-base text-gray-500 text-justify">
                  We are committed to the highest standards of scientific rigor, integrity, and innovation in all our research and services.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaDna className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Cutting-Edge Technology</p>
                <p className="mt-2 ml-16 text-base text-gray-500 text-justify">
                  We leverage the latest technologies and methodologies to deliver accurate, reliable, and actionable insights.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaMicroscope className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Collaboration</p>
                <p className="mt-2 ml-16 text-base text-gray-500 text-justify">
                  We work closely with clinicians, labs, universities, and health systems to co-create
                  protocols, research programmes, and real-world evidence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Impact</p>
                <p className="mt-2 ml-16 text-base text-gray-500 text-justify">
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
