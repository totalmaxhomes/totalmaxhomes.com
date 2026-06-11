import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import BlogContent from '@/components/BlogContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `https://www.totalmaxhomes.com${post.featuredImage}`;
  return {
    title: `${post.title} - TotalMax Homes`,
    description: post.excerpt,
    authors: [{ name: 'TotalMax Homes' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.totalmaxhomes.com/blog/${slug}`,
      siteName: 'TotalMax Homes',
      images: [{ url: imageUrl, alt: post.featuredImageAlt }],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const allPosts = await getAllPosts();
  const postIndex = allPosts.findIndex(p => p.slug === slug);

  if (postIndex === -1) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const previousPost = allPosts[postIndex + 1]
    ? { href: `/blog/${allPosts[postIndex + 1].slug}`, title: allPosts[postIndex + 1].title }
    : undefined;
  const nextPost = allPosts[postIndex - 1]
    ? { href: `/blog/${allPosts[postIndex - 1].slug}`, title: allPosts[postIndex - 1].title }
    : undefined;

  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `https://www.totalmaxhomes.com${post.featuredImage}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'TotalMax Homes', url: 'https://www.totalmaxhomes.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TotalMax Homes',
      logo: { '@type': 'ImageObject', url: 'https://www.totalmaxhomes.com/totalmaxhomes.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.totalmaxhomes.com/blog/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="relative w-full bg-white">
        {/* Hero Banner */}
        <section
          className="relative w-full mx-auto bg-cover bg-center h-[250px] flex items-center"
          style={{ backgroundImage: 'url("/bg-1.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white max-w-3xl mx-auto">
              {post.title}
            </h1>
            <p className="mt-3 text-[#C19B77] text-sm uppercase tracking-[3px]">
              {new Date(post.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Post Body — rendered via Streamdown */}
          <BlogContent content={post.content} />

          {/* QR Code — auto shown on every post */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col items-center text-center gap-4">
            <p className="text-[#636363] text-sm uppercase tracking-widest font-semibold">Scan to Bio Link</p>
            <Image
              src="/blog-images/linktree-qr-code.jpg"
              alt="Scan QR Code to Book"
              width={200}
              height={200}
              className="w-48 h-48 object-contain"
            />
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Desktop */}
          <div className="hidden md:flex justify-between items-center border-t border-b border-gray-300 py-4 text-sm">
            {previousPost ? (
              <div className="flex items-center gap-2 max-w-[45%]">
                <span className="text-gray-600 text-lg">❮❮</span>
                <div className="truncate">
                  <span className="block text-gray-500 text-xs uppercase tracking-wide">Previous</span>
                  <Link href={previousPost.href as Route} className="text-[#C19B77] hover:underline font-medium truncate block">
                    {previousPost.title}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="max-w-[45%]" />
            )}

            <div className="h-8 border-l border-gray-300" />

            {nextPost ? (
              <div className="flex items-center gap-2 justify-end max-w-[45%] text-right">
                <div className="truncate">
                  <span className="block text-gray-500 text-xs uppercase tracking-wide">Next</span>
                  <Link href={nextPost.href as Route} className="text-[#C19B77] hover:underline font-medium truncate block">
                    {nextPost.title}
                  </Link>
                </div>
                <span className="text-gray-600 text-lg">❯❯</span>
              </div>
            ) : (
              <div className="max-w-[45%]" />
            )}
          </div>

          {/* Mobile */}
          <div className="flex justify-between items-center border-t border-b border-gray-300 py-4 md:hidden text-sm">
            {previousPost ? (
              <Link href={previousPost.href as Route} className="flex items-center gap-2 text-[#C19B77] hover:underline font-medium">
                <span className="text-gray-600 text-lg">❮❮</span>
                Previous
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={nextPost.href as Route} className="flex items-center gap-2 text-[#C19B77] hover:underline font-medium">
                Next
                <span className="text-gray-600 text-lg">❯❯</span>
              </Link>
            ) : <div />}
          </div>

          {/* Back to Blogs */}
          <div className="text-center mt-8">
            <Link href="/blogs" className="inline-block bg-black text-white text-xs px-6 py-3 font-semibold uppercase tracking-widest hover:bg-gray-800 transition">
              ← All Blogs
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
