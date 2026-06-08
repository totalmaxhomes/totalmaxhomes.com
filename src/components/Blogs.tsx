"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import type { BlogPostMeta } from "@/lib/blog";

interface LatestBlogsProps {
  posts: BlogPostMeta[];
  limit?: number;
}

export default function LatestBlogs({ posts, limit = 3 }: LatestBlogsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visiblePosts = limit === -1 ? posts : posts.slice(0, limit);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-cover py-20 bg-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundImage: "url('/background-5-luxury-mansion-las-vegas.jpg')" }}
    >
      <div className="max-w-7xl mx-auto text-center px-4 xl:px-12">
        <h5 className="text-xs uppercase tracking-[4px] text-[#C19B77] mb-6">
          Stay Tuned
        </h5>
        <h2 className="text-black text-5xl font-medium mb-12">
          Our Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <div key={post.slug} className="bg-white w-full xl:w-[375px]">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="py-8 px-12 text-left">
                <p className="text-xs uppercase tracking-wide text-gray-500 border-l-2 border-black pl-3 mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <h3 className="text-xl text-[#1c1c1c] font-semibold mb-3">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-[15px] tracking-wide leading-8 text-[#636363] mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-black text-white text-xs px-4 py-2 font-semibold uppercase tracking-wide hover:bg-gray-800 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
