import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
}

export interface PaginatedPosts {
  posts: BlogPostMeta[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}

export const POSTS_PER_PAGE = 9;

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md') && !f.startsWith('_'));

  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      featuredImage: data.featuredImage as string,
      featuredImageAlt: (data.featuredImageAlt || data.title) as string,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPaginatedPosts(page: number): Promise<PaginatedPosts> {
  const all = await getAllPosts();
  const totalPosts = all.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const current = Math.max(1, Math.min(page, totalPages));
  const start = (current - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    totalPages,
    currentPage: current,
    totalPosts,
  };
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    featuredImage: data.featuredImage as string,
    featuredImageAlt: (data.featuredImageAlt || data.title) as string,
    content,
  };
}
