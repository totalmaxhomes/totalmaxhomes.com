"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import CounterSection from "./Counter";

export default function PoliciesSection() {
  const images = [
    "/exterior-front-1-luxury-mansion-las-vegas.jpg",
    "/Private-Night-Club-large-001-9-Exterior-Front-Entry-1500x1000-72dpi.jpg",
    "/W8A0301.jpg",
    "/540A4329.jpg",
    "/2858-Red-Rock-St-Las-Vegas-NV-print-004-31-Exterior-Front-Patio-2700x1800-300dpi.jpg",
    "/2929-El-Camino-Rd-Las-Vegas-NV-print-079-79-Courtyard-2700x1800-300dpi.jpg",
  ];

  return (
    <section
      className="relative w-full bg-center bg-cover bg-no-repeat py-20"
      style={{
        backgroundImage:
          "url('/bg5.jpg')",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 xl:px-12 flex-none xl:flex gap-6 items-center">
        {/* Left Side */}
        <div className="w-full py-6 xl:py-0 xl:w-[400px] flex items-center">
          <Link
            href="/#inquiry-form"
            className="inline-block text-xs bg-[#C19B77] text-white px-6 py-3 font-semibold tracking-widest"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Right Side → Swiper Carousel */}
        <div className="relative w-full xl:w-[750px] h-[350px] md:h-[500px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="custom-swiper w-full h-full shadow-md"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="relative">
                <Image
                  src={src}
                  alt={`slide-${i}`}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-4 md:-mt-14">
            <CounterSection />
          </div>
        </div>
      </div>
    </section>
  );
}
