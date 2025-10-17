import LatestBlogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - TotalMax Homes',
  description: 'Stay updated with the latest news, tips, and insights about luxury vacation rentals in Las Vegas from TotalMax Homes.',
  openGraph: {
    title: 'Blogs - TotalMax Homes',
    description: 'Stay updated with the latest news, tips, and insights about luxury vacation rentals in Las Vegas from TotalMax Homes.',
    url: 'https://www.totalmaxhomes.com/blogs',
    siteName: 'TotalMax Homes',
    images: [
      {
        url: 'https://www.totalmaxhomes.com/Blog.jpg',
        width: 1200,
        height: 630,
        alt: 'TotalMax Homes Blogs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const BlogSection = () => {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                 <section
                    className="relative w-full flex items-center justify-center py-12 h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("/Blog.jpg")' }} // Replace with actual background if needed
                >
                    <div className="absolute inset-0 bg-black opacity-20"></div> {/* Overlay */}
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-5xl mt-20 lg:text-6xl font-bold text-white text-center">
                            BLOGS
                        </h1>
                    </div>
                </section>

            <section
                className="relative w-full mx-auto my-0 "
                style={{ backgroundImage: `url("/bg5.jpg"})` }}
            >
                {/* Background Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

                {/* Container */}
                <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[300px]">
                    {/* Column */}
                    

                    <div>
                        <LatestBlogs limit={-1}/>
                    </div>
                </div>
            </section>
                </div>
            <Footer />
        </>
    );
};

export default BlogSection;