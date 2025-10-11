import BlogPost from "@/components/BlogPage";
import { blogs } from "@/data/blogs";

interface Props {
  params: { slug: string };
}

export default function BlogPage({ params }: Props) {
  const { slug } = params;

  const blogIndex = blogs.findIndex(b => b.slug === slug);
  if (blogIndex === -1) return <div>Blog not found</div>;

  const blog = blogs[blogIndex];
  const previousPost = blogs[blogIndex - 1]
    ? { href: `/blog/${blogs[blogIndex - 1].slug}`, title: blogs[blogIndex - 1].title }
    : undefined;
  const nextPost = blogs[blogIndex + 1]
    ? { href: `/blog/${blogs[blogIndex + 1].slug}`, title: blogs[blogIndex + 1].title }
    : undefined;

  return (
    <BlogPost
      title={blog.title}
      featuredImage={blog.featuredImage}
      content={blog.content}
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
}
