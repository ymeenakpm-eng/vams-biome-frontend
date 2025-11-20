import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPostData {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorBio: string;
  authorImage: string;
  category: string;
  image: string;
  tags: string[];
  readTime: number;
}

export interface BlogPost extends BlogPostData {
  slug: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const postsDirectory = path.join(contentDirectory, 'blog');
  
  // Create content/blog directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPosts = fileNames.map((fileName) => {
    if (!fileName.endsWith('.md')) return null;
    
    const slug = fileName.replace(/\.md$/, '');
    return getPostBySlug(slug);
  }).filter((post): post is BlogPost => post !== null);
  
  // Sort posts by date in descending order
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Ensure all required fields have default values
    const postData: BlogPostData = {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'Unknown Author',
      authorRole: data.authorRole || 'Researcher',
      authorBio: data.authorBio || '',
      authorImage: data.authorImage || '/images/placeholder-avatar.jpg',
      category: data.category || 'Uncategorized',
      image: data.image || '/images/placeholder-blog.jpg',
      tags: Array.isArray(data.tags) ? data.tags : [],
      readTime: data.readTime || 5,
    };
    
    return {
      ...postData,
      slug,
      content: content.trim(),
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllCategories(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  }));
}

export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const tagCounts = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  
  return Object.entries(tagCounts).map(([name, count]) => ({
    name,
    count,
  }));
}
