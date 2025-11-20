import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post not found | VAMS Biome Blog",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} | VAMS Biome Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    // In app router, notFound() would be ideal, but keep simple fallback markup here
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-gray-600">
          The article you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex text-primary-600 hover:text-primary-800"
        >
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-gray-500">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <FaUser className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                {post.author}
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <FaClock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <div className="aspect-w-16 aspect-h-9 mb-12 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ReactMarkdown content – note: className on wrapper, not on ReactMarkdown */}
          <div className="prose lg:prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    <FaTag className="mr-1.5 h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">
              Share this article
            </h3>
            <div className="mt-3 flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://vamsbiome.com/blog/${post.slug}`
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://vamsbiome.com/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `https://vamsbiome.com/blog/${post.slug}`
                )}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://vamsbiome.com/blog/${post.slug}`
                  );
                  // Show a toast/notification in a real app
                  alert("Link copied to clipboard!");
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Copy link</span>
                <FaLink className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                {post.author
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {post.author}
                </h3>
                <p className="text-primary-600">{post.authorRole}</p>
                <p className="mt-2 text-gray-600">{post.authorBio}</p>
                <div className="mt-3 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">
              Related Articles
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "How Your Diet Shapes Your Gut Microbiome",
                  href: "/blog/diet-and-microbiome",
                  category: "Health",
                  date: "2025-08-05",
                  readTime: 6,
                },
                {
                  title: "Latest Advances in Probiotics Research",
                  href: "/blog/probiotics-research-update",
                  category: "Research",
                  date: "2025-09-10",
                  readTime: 5,
                },
                {
                  title: "The Role of AI in Microbiome Data Analysis",
                  href: "/blog/ai-in-microbiome-analysis",
                  category: "Technology",
                  date: "2025-08-22",
                  readTime: 7,
                },
              ].map((article) => (
                <article key={article.href} className="group relative flex flex-col">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gray-100">
                    <div className="h-full w-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white p-6 text-center">
                      {article.title}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="mx-2">&middot;</span>
                    <span>{article.readTime} min read</span>
                    <span className="mx-2">&middot;</span>
                    <span className="text-primary-600 hover:text-primary-800">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900 group-hover:text-primary">
                    <Link href={article.href}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Stay updated with our latest research
            </h2>
            <p className="mt-3 text-xl text-gray-500">
              Subscribe to our newsletter to get the latest articles, research
              updates, and news delivered to your inbox.
            </p>
            <form className="mt-8 sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}