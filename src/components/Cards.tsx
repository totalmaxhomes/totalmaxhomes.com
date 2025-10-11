"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    id: 1,
    title: "#1 MICE Capital",
    description:
      "Las Vegas is the world's leading destination for MICE (Meetings, Incentives, Conferences, and Exhibitions) with over 21,600 events held annually, attracting key industry exhibitors and corporate heads.",
    image: "/icon-1.png",
  },
  {
    id: 2,
    title: "24/7 Business and Fun",
    description:
      "Experience non-stop business and entertainment on the Las Vegas Strip, renowned for its luxury, fun, and world-class amenities, making it the perfect location for both work and leisure.",
    image: "/icon-3.png",
  },
  {
    id: 3,
    title: "Full Service Luxury Experience",
    description:
      "Our full-service luxury experience includes world-class chefs, expert bartenders, vibrant DJs, elegant violinists, entertaining flair bartenders, awe-inspiring contortionists, captivating magicians, enchanting mermaids, and rejuvenating spa services to ensure every moment is steeped in extravagance.",
    image: "/icon-2.png",
  },
];

export default function FeaturesSection() {
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
      className={`relative w-full bg-center bg-cover bg-no-repeat pt-[450px] pb-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        backgroundImage:
          "url('/bg1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 xl:px-12 grid md:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex-none xl:flex gap-4"
          >
            {/* Icon */}
            <div className="mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="w-24 mx-auto h-auto"
              />
            </div>
            <div className="text-center xl:text-left w-full xl:w-96">
            {/* Title */}
            <h3 className="text-xl tracking-widest text-[#1c1c1c] font-medium mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-[#636363] tracking-[0.11em] text-sm leading-7">
              {item.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
