import { Metadata } from 'next';
import Link from 'next/link';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import BlogPostCard from '@/components/blog/BlogPostCard';

// Sample blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    slug: 'understanding-gut-microbiome',
    title: 'Understanding the Gut Microbiome: A Comprehensive Guide',
    excerpt: 'Explore the complex ecosystem of microorganisms living in our digestive tract and their impact on overall health and disease prevention.',
    date: '2025-10-15',
    readTime: 8,
    author: 'Dr. Sarah Johnson',
    category: 'Research',
    imageUrl: '/images/blog/gut-microbiome.jpg'
  },
  {
    slug: 'microbiome-sequencing-methods',
    title: 'Comparing Microbiome Sequencing Methods: 16S vs Shotgun',
    excerpt: 'A detailed comparison of 16S rRNA gene sequencing and shotgun metagenomics for microbiome analysis and when to use each method.',
    date: '2025-09-28',
    readTime: 6,
    author: 'Dr. Michael Chen',
    category: 'Technology',
    imageUrl: '/images/blog/sequencing-methods.jpg'
  },
  {
    slug: 'probiotics-research-update',
    title: 'Latest Advances in Probiotics Research',
    excerpt: 'Recent findings on how specific probiotic strains can influence gut health and their potential therapeutic applications.',
    date: '2025-09-10',
    readTime: 5,
    author: 'Dr. Emily Rodriguez',
    category: 'Health',
    imageUrl: '/images/blog/probiotics.jpg'
  },
  {
    slug: 'ai-in-microbiome-analysis',
    title: 'The Role of AI in Microbiome Data Analysis',
    excerpt: 'How artificial intelligence is revolutionizing the way we analyze and interpret complex microbiome datasets.',
    date: '2025-08-22',
    readTime: 7,
    author: 'Dr. James Wilson',
    category: 'Technology',
    imageUrl: '/images/blog/ai-microbiome.jpg'
  },
  {
    slug: 'diet-and-microbiome',
    title: 'How Your Diet Shapes Your Gut Microbiome',
    excerpt: 'Understanding the relationship between dietary patterns and microbial composition in the gut.',
    date: '2025-08-05',
    readTime: 6,
    author: 'Dr. Sarah Johnson',
    category: 'Health',
    imageUrl: '/images/blog/diet-microbiome.jpg'
  },
  {
    slug: 'microbiome-research-trends',
    title: 'Emerging Trends in Microbiome Research',
    excerpt: 'A look at the most exciting developments and future directions in microbiome science.',
    date: '2025-07-18',
    readTime: 5,
    author: 'Dr. Michael Chen',
    category: 'Research',
    imageUrl: '/images/blog/research-trends.jpg'
  },
];

const categories = [
  { name: 'All', count: 6 },
  { name: 'Gut Health', count: 2 },
  { name: "Womens Health", count: 2 },
  { name: 'Skin Health', count: 1 },
  { name: 'Oral Health', count: 1 },
  { name: 'Nutrition', count: 1 },
  { name: 'AI in Health', count: 1 },
];

const popularPosts = [
  {
    id: 1,
    title: 'Understanding the Gut Microbiome',
    href: '/blog/understanding-gut-microbiome',
  },
  {
    id: 2,
    title: 'Latest Advances in Probiotics Research',
    href: '/blog/probiotics-research-update',
  },
  {
    id: 3,
    title: 'How Your Diet Shapes Your Gut Microbiome',
    href: '/blog/diet-and-microbiome',
  },
];

export const metadata: Metadata = {
  title: 'BiomeInsights Blog - VAMS BIOME',
  description:
    'Gut, womens, skin, oral health, nutrition, and AI in health stories from the VAMS BIOME ecosystem.',
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            BiomeInsights Blog
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Gut, womens, skin, oral health, nutrition, and AI-in-health stories from the VAMS BIOME
            ecosystem.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main content */}
          <main className="lg:col-span-8">
            {/* Search and filter */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="relative w-full sm:w-96">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Search articles..."
                  />
                </div>
                <div className="flex space-x-2">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                    defaultValue="All"
                  >
                    <option>All Categories</option>
                    <option>Research</option>
                    <option>Technology</option>
                    <option>Health</option>
                  </select>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                    defaultValue="latest"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Blog posts */}
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
              <div className="-mt-px w-0 flex-1 flex">
                <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Previous
                </a>
              </div>
              <div className="hidden md:-mt-px md:flex">
                <a
                  href="#"
                  className="border-primary text-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                >
                  1
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  3
                </a>
                <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                  ...
                </span>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  8
                </a>
              </div>
              <div className="-mt-px w-0 flex-1 flex justify-end">
                <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Next
                  <svg
                    className="ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* About */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900">About VAMS Biome Blog</h2>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>
                      Stay updated with the latest research, insights, and news about microbiome science from our team of experts.
                    </p>
                  </div>
                  <div className="mt-3 text-sm">
                    <Link
                      href="/about"
                      className="font-medium text-primary hover:text-primary-dark flex items-center"
                    >
                      Learn more about us <FaChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900">Categories</h2>
                  <div className="mt-4 flow-root">
                    <ul className="-my-2 divide-y divide-gray-200">
                      {categories.map((category) => (
                        <li key={category.name} className="py-2">
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/blog/category/${category.name.toLowerCase()}`}
                              className="text-sm font-medium text-gray-900 hover:text-primary"
                            >
                              {category.name}
                            </Link>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                              {category.count}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900">Popular Posts</h2>
                  <div className="mt-4 flow-root">
                    <ul className="-my-2 divide-y divide-gray-200">
                      {popularPosts.map((post) => (
                        <li key={post.id} className="py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-medium">
                                {post.id}
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <Link
                                href={post.href}
                                className="text-sm font-medium text-gray-900 hover:text-primary line-clamp-2"
                              >
                                {post.title}
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Get the latest articles and news delivered to your inbox every week.
                </p>
                <form className="mt-4 sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
