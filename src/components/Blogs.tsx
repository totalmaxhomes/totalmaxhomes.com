"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const blogs = [
    {
        id: 1,
        title: "Celebrating Gary Wu’s Induction into the Passion Vista Hall of Fame 2024",
        date: "2 July",
        excerpt:
            "TotalMax Homes Proudly Announces Gary “The Texan” Wu’s Prestigious Recognition We are thrilled to announce that Gary Wu, Founder and CEO of TotalMax Homes LLC, has been honored with induction into the esteemed Passion Vista Hall of Fame 2024. This recognition is featured in Passion Vista, a renowned Luxury, Lifestyle, and Business Magazine, which celebrates […]",
        image: "/img11.jpg",
        link: "celebrating-gary-wus-induction-into-the-passion-vista-hall-of-fame-2024",
    },
    {
        id: 2,
        title: "Trailblazing Titans of Industry: Spotlight on Gary Wu",
        date: "1 July",
        excerpt:
            "In 2024, the business world has seen the rise and consolidation of leaders who are not just steering their enterprises to new heights but are also redefining the parameters of leadership itself. Among these influential figures is Gary Wu, the Founder and CEO of TotalMax Homes, who has been rightfully recognized in the exclusive list […]",
        image: "/8Ndtvjzx.jpeg",
        link: "trailblazing-titans-of-industry-spotlight-on-gary-wu",
    },
    {
        id: 3,
        title: "Embracing Change: Gary Wu and the Evolution of Las Vegas",
        date: "28 June",
        excerpt:
            "Gary Wu, the visionary owner of TotalMax Homes and renowned as “The Texan,” recently graced the pages of the Real Las Vegas Magazine Summer edition, offering profound insights into the transformative dynamics of Las Vegas’s economy. His keynote speech at the CX2.0 conference in March not only highlighted his personal achievements but also shed light […]",
        image: "/iStock-1383478451.jpg",
        link: "embracing-change-gary-wu-and-the-evolution-of-las-vegas",
    },
    {
        id: 4,
        title: "Embracing Change: Gary Wu and the Evolution of Las Vegas",
        date: "28 June",
        excerpt:
            "Gary Wu, the visionary owner of TotalMax Homes and renowned as “The Texan,” recently graced the pages of the Real Las Vegas Magazine Summer edition, offering profound insights into the transformative dynamics of Las Vegas’s economy. His keynote speech at the CX2.0 conference in March not only highlighted his personal achievements but also shed light […]",
        image: "/iStock-1383478451.jpg",
        link: "embracing-change-gary-wu-and-the-evolution-of-las-vegas/",
    },
    {
        id: 5,
        title: "Experience Unmatched Luxury with TotalMax Homes’ Full-Service Add-Ons",
        date: "13 June",
        excerpt:
            "Vibrant Evenings with Professional Bartenders and DJs Animate your evenings with our professional bartenders who can craft the perfect cocktail to suit any occasion. Complement the night with our DJs, who can set the mood with music that matches the high energy and luxury of Las Vegas. Unique Entertainment with Magicians, Mermaids, and More Transform […]",
        image: "/Hero-Image.jpg",
        link: "experience-unmatched-luxury-with-totalmax-homes-full-service-add-ons",
    },
    {
        id: 6,
        title: "TotalMax Homes",
        date: "25 March",
        excerpt:
            "TotalMax Homes – Extraordinary Las Vegas Luxury Vacation Rentals You have found World’s Best Luxury Vacation Rentals located in Fabulous Las Vegas. Our “Las Hawaii” vacation rental mansions are marvel to look at, and even more amazing when you stay with us. Our vacation rentals homes are equipped with all the amenities to provide you […]",
        image: "/iStock-1383478451.jpg",
        link: "totalmax-homes",
    },
];

interface LatestBlogsProps {
    limit?: number; // default 3, -1 = all
}

export default function LatestBlogs({ limit = 3 }: LatestBlogsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative bg-cover py-20 bg-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ backgroundImage: "url('/bg5.jpg')" }}
        >
            <div className="max-w-7xl mx-auto text-center px-4 xl:px-12">
                <h5 className="text-xs uppercase tracking-[4px] text-[#C19B77] mb-6">
                    Stay Tuned
                </h5>
                <h1 className="text-black text-5xl font-medium mb-12">
                    Our Latest Blogs
                </h1>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {blogs
                        .slice(0, limit === -1 ? blogs.length : limit)
                        .map((blog) =>
                            blog.id === 4 ? (
                                // Placeholder only on XL screens
                                <div
                                    key={blog.id}
                                    className="w-full xl:w-[375px] h-[400px] bg-transparent hidden xl:block"
                                ></div>
                            ) : (
                                <div key={blog.id} className="bg-white w-full xl:w-[375px]">
                                    <a
                                        href={`blog/${blog.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={400}
                                            height={400}
                                            className="w-full h-64 object-cover"
                                        />
                                    </a>

                                    <div className="py-8 px-12 text-left">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 border-l-2 border-black pl-3 mb-3">
                                            {blog.date}
                                        </p>
                                        <a
                                            href={`blog/${blog.link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            <h3 className="text-xl text-[#1c1c1c] font-semibold mb-3">
                                                {blog.title}
                                            </h3>
                                        </a>
                                        <p className="text-[15px] tracking-wide leading-8 text-[#636363] mb-3">
                                            {blog.excerpt}
                                        </p>
                                        <a
                                            href={`blog/${blog.link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-black text-white text-xs px-4 py-2 font-semibold uppercase tracking-wide hover:bg-gray-800 transition"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </div>
        </section>
    );
}
