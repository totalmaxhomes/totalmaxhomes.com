"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const progressData = [
    { label: "Chefs" },
    { label: "Bartenders" },
    { label: "DJs" },
    { label: "Violinists" },
    { label: "Flair Bartenders" },
    { label: "Contortionist" },
    { label: "Magicians" },
    { label: "Mermaids" },
    { label: "Spas" },
  ];

  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setAnimate(true), 200);
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
      className={`w-full flex flex-col xl:flex-row items-stretch justify-center bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Left Image Section */}
      <div className="w-full xl:w-[60%] relative">
        <Image
          src="/Who-We-Are.jpg"
          alt="Who We Are"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content Section with background image */}
      <div
        className="w-full xl:w-[40%] relative flex flex-col justify-center px-6 md:px-10 py-12 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/bg-1.jpg')",
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <h5 className="text-white text-xs font-semibold mb-2">ABOUT</h5>
          <h1 className="text-4xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-gray-100 mb-8 leading-relaxed">
            TotalMax Homes excels in the Medium-Term Rental (MTR) sector in Las
            Vegas, offering unparalleled Total Vegas Solution packages that
            enhance every aspect of a client&apos;s experience with a focus on
            luxury, capacity, and cost-effectiveness. The company continuously
            aims to improve and expand its value offers through innovative
            strategies, ensuring high-quality experiences now and in the future.
          </p>

          {/* Progress Bars with label inside the bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {progressData.map((item, index) => (
              <div key={index} className="w-full">
                <div className="w-full bg-white/50 rounded-md h-7 overflow-hidden relative">
                  <div
                    className={`bg-white h-7 rounded-md transition-all duration-[1500ms] ease-out ${
                      animate ? "w-full opacity-100" : "w-0 opacity-0"
                    } flex items-center justify-center`}
                    style={{
                      width: animate ? `100%` : "0%",
                    }}
                  >
                    <span className="text-[#373737] font-semibold text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <a
            href="/about-us/"
            className="inline-block px-6 py-3 text-white bg-[#373737] rounded-md text-sm font-semibold transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
