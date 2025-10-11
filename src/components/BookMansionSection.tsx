"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const BookMansionSection: React.FC = () => {
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
      className={`relative w-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        backgroundImage:
          "url('/parallax-3.jpg')", // 👈 apni background image lagao
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative max-w-[1083px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left Column - Heading */}
          <div className="text-center md:text-left">
            <h1
              className="font-['Playfair_Display'] text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold leading-snug tracking-wide"
              style={{
                lineHeight: "1.3",
                letterSpacing: "0.5px",
              }}
            >
              Book your Mansion today and step into a world of unparalleled
              luxury!
            </h1>
          </div>

          {/* Right Column - Button */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <Link
              href={{ pathname: "/contact-us" }}
              className="inline-block bg-white text-[#b2855b] text-xl font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:bg-[#373737]"
              style={{
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMansionSection;
