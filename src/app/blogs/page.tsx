import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPaginatedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blogs - TotalMax Homes',
  description: 'Stay updated with the latest news, tips, and insights about luxury vacation rentals in Las Vegas from TotalMax Homes.',
  openGraph: {
    title: 'Blogs - TotalMax Homes',
    description: 'Stay updated with the latest news, tips, and insights about luxury vacation rentals in Las Vegas from TotalMax Homes.',
    url: 'https://www.totalmaxhomes.com/blogs',
    siteName: 'TotalMax Homes',
    images: [{ url: 'https://www.totalmaxhomes.com/Blog.jpg', width: 1200, height: 630, alt: 'TotalMax Homes Blogs' }],
    locale: 'en_US',
    type: 'website',
  },
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1') || 1);
  const { posts, totalPages } = await getPaginatedPosts(currentPage);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero */}
        <section
          className="relative w-full flex items-center justify-center h-[300px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/Blog.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl mt-20 lg:text-6xl font-bold text-white">BLOGS</h1>
          </div>
        </section>

        {/* Grid */}
        <section
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: `url("/background-5-luxury-mansion-las-vegas.jpg")` }}
        >
          <div className="max-w-7xl mx-auto px-4 xl:px-12 py-20">
            <h5 className="text-xs uppercase tracking-[4px] text-[#C19B77] mb-6 text-center">Stay Tuned</h5>
            <h2 className="text-black text-5xl font-medium mb-12 text-center">Our Latest Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {posts.map(post => (
                <div key={post.slug} className="bg-white w-full xl:w-[375px]">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="py-8 px-12 text-left">
                    <p className="text-xs uppercase tracking-wide text-gray-500 border-l-2 border-black pl-3 mb-3">
                      {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      <h3 className="text-xl text-[#1c1c1c] font-semibold mb-3">{post.title}</h3>
                    </Link>
                    <p className="text-[15px] tracking-wide leading-8 text-[#636363] mb-3 line-clamp-3">{post.excerpt}</p>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                {currentPage > 1 && (
                  <Link
                    href={`/blogs?page=${currentPage - 1}`}
                    className="px-4 py-2 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition"
                  >
                    ← Prev
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <Link
                    key={p}
                    href={`/blogs?page=${p}`}
                    className={`w-9 h-9 flex items-center justify-center text-sm font-semibold transition ${
                      p === currentPage
                        ? 'bg-[#C19B77] text-white'
                        : 'bg-white text-[#1c1c1c] hover:bg-gray-100'
                    }`}
                  >
                    {p}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link
                    href={`/blogs?page=${currentPage + 1}`}
                    className="px-4 py-2 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-gray-800 transition"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
