"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import CounterSection from "./Counter";

export default function PoliciesSection() {
  const images = [
    "/exterior-front-1.jpg",
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
        <div className="w-full py-6 xl:py-0 xl:w-[400px]">
          <h5 className="text-sm font-medium text-[#C19B77] uppercase tracking-widest mb-8">
            Policies
          </h5>
          <h1 className="text-5xl leading-14 w-40 text-[#1C1C1C] font-medium mt-2 mb-8">
            Rental Disclaimer
          </h1>
          <p className="text-sm text-[#636363] mb-6 tracking-widest leading-6">
            All rentals will need to be 32+ days to 6 months (MTR). Other Clark
            County ordinances on noise level, public parking, etc. are also
            required to be observed. For details please refer to our Property
            Rental Agreement.
          </p>

          <a
            href="/contact-us"
            className="inline-block text-xs bg-[#C19B77] text-white px-6 py-3 font-semibold tracking-widest"
          >
            BOOK NOW
          </a>
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
