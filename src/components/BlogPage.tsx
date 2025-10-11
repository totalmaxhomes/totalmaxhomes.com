import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Route } from 'next';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogPostProps {
    title: string;
    featuredImage: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    content: string;
    previousPost?: {
        href: string;
        title: string;
    };
    nextPost?: {
        href: string;
        title: string;
    };
    backgroundImage?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
    title,
    featuredImage,
    content,
    previousPost,
    nextPost,
    backgroundImage = '/bg-1.jpg',
}) => {
    return (
        <>
            <Navbar />
            <div className="relative w-full bg-white">
                {/* Title Section */}
                <section
                    className="relative w-full mx-auto my-0 box-border bg-cover bg-center h-[250px] flex items-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-lg">
                            <div className="py-4">
                                <h1 className="text-2xl sm:text-2xl lg:text-3xl px-2 font-bold leading-tight text-center text-white">
                                    {title}
                                </h1>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-full max-w-6xl mx-auto my-0 box-border py-8">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="w-full">
                            <div className="py-4">
                                {/* Featured Image */}
                                <div className="mb-6">
                                    <Image
                                        src={featuredImage.src}
                                        alt={featuredImage.alt}
                                        width={featuredImage.width}
                                        height={featuredImage.height}
                                        className="w-full h-auto object-cover"
                                        sizes="(max-width: 1080px) 100vw, 1080px"
                                    />
                                </div>
                                {/* Post Content */}
                                <div
                                    className="max-w-none space-y-6 text-gray-800 [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-semibold [&_h4]:text-lg [&_h4]:font-semibold [&_p]:text-gray-700 [&_ul]:list-disc [&_li]:ml-6 [&_li]:mb-2"
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />

                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation Section */}
                <section className="w-full max-w-4xl mx-auto py-6">
                    <div className="px-4 sm:px-6 lg:px-8">

                        {/* ✅ Desktop & Tablet View */}
                        <div className="hidden md:flex justify-between items-center border-t border-b border-gray-300 py-4 text-sm">

                            {/* Previous Post */}
                            {previousPost ? (
                                <div className="flex items-center gap-2 max-w-[45%]">
                                    <span className="text-gray-600 text-lg">❮❮</span>
                                    <div className="truncate">
                                        <span className="block text-gray-500">Previous</span>
                                        <Link
                                            href={previousPost.href as Route}
                                            className="text-blue-600 hover:underline font-medium truncate block"
                                        >
                                            {previousPost.title}
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="max-w-[45%]" />
                            )}

                            {/* Divider */}
                            <div className="h-8 border-l border-gray-300" />

                            {/* Next Post */}
                            {nextPost ? (
                                <div className="flex items-center gap-2 justify-end max-w-[45%] text-right">
                                    <div className="truncate">
                                        <span className="block text-gray-500">Next</span>
                                        <Link
                                            href={nextPost.href as Route}
                                            className="text-blue-600 hover:underline font-medium truncate block"
                                        >
                                            {nextPost.title}
                                        </Link>
                                    </div>
                                    <span className="text-gray-600 text-lg">❯❯</span>
                                </div>
                            ) : (
                                <div className="max-w-[45%]" />
                            )}
                        </div>

                        {/* ✅ Mobile View — Only “Previous” and “Next” links */}
                        <div className="flex justify-between items-center border-t border-b border-gray-300 py-4 md:hidden text-sm">
                            {previousPost ? (
                                <Link
                                    href={previousPost.href as Route}
                                    className="flex items-center gap-2 text-blue-600 hover:underline font-medium"
                                >
                                    <span className="text-gray-600 text-lg">❮❮</span>
                                    Previous
                                </Link>
                            ) : (
                                <div />
                            )}

                            {nextPost ? (
                                <Link
                                    href={nextPost.href as Route}
                                    className="flex items-center gap-2 text-blue-600 hover:underline font-medium"
                                >
                                    Next
                                    <span className="text-gray-600 text-lg">❯❯</span>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>

                    </div>
                </section>



            </div>
            <Footer />
        </>
    );
};

export default BlogPost;