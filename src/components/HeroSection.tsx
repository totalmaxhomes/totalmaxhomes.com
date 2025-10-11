"use client";

import { useEffect, useState, useRef } from "react";

const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState(text); // Start with full text
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(true); // Already typed

  const startTyping = () => {
    // No typing effect
  };

  return { displayText, isTyping, startTyping };
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const fullText = "Extraordinary Las Vegas Luxury Vacation Rentals";
  const { displayText, isTyping, startTyping } = useTypingEffect(fullText, 80);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, [startTyping]);

  return (
    <section
      className="relative bg-cover bg-center pt-24 pb-12 h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/Hero-Image.jpg')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 " /> */}

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce-in" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce-in" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-bounce-in" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/15 rounded-full animate-bounce-in" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      {/* Content */}
      <div className=" max-w-6xl mx-auto px-4 grid grid-cols-12 gap-6 ">
        {/* Left Column */}
        <div
          ref={titleRef}
          className={`col-span-12 lg:col-span-8 transform transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl justify-between p-5 leading-tight text-black bg-white/80">
            {displayText.split(' ').slice(0, 3).join(' ')}
            {displayText.split(' ').length > 3 && <br />}
            {displayText.split(' ').slice(3).join(' ')}
          </h2>
        </div>


        {/* Right Column */}
        <div
          className={`col-span-12 lg:col-span-4 bg-white/80 text-black p-4 rounded-md transform transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          {/* 35px */}
          <h2 className="text-2xl md:text-4xl">
            Welcome to TotalMax Homes!
          </h2>
          <p className="mt-3 text-xl text-base leading-relaxed">
            Discover the world&apos;s best luxury vacation rentals in Las Vegas with
            TotalMax Homes&apos; &quot;Las Hawaii&quot; mansions. Equipped with top amenities
            for a beach-like experience, our team ensures a memorable stay,
            perfect for business, fun, or family gatherings.
          </p>
        </div>
      </div>
    </section>
  );
}
