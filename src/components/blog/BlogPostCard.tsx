import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  author: string;
  category: string;
  imageUrl?: string;
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageUrl
}: BlogPostCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="flex-shrink-0">
        {imageUrl ? (
          <img 
            className="h-48 w-full object-cover" 
            src={imageUrl} 
            alt={title} 
          />
        ) : (
          <div className="h-48 w-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white">
            <span className="text-xl font-bold">{category}</span>
          </div>
        )}
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary">
            <Link href={`/blog/category/${category.toLowerCase()}`} className="hover:underline">
              {category}
            </Link>
          </p>
          <Link href={`/blog/${slug}`} className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
              {author.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date} className="flex items-center">
                <FaCalendarAlt className="mr-1 h-3 w-3" />
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center">
                <FaClock className="mr-1 h-3 w-3" />
                {readTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
