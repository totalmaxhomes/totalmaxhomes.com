'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Testimonial = {
  text: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Great Stay! The house was amazing. There was plenty of space for all of us, and it worked out great. We used it for a business retreat while at a trade show in Las Vegas. It was perfect. Thank you! (Homeaway Review)",
    name: "ASHLEY V.",
    title: "Client",
  },
  {
    text: "Hosted a corporate leadership team retreat for 12 people and this was perfect! The home is immaculate, and the host and team were very responsive.",
    name: "Andrea",
    title: "Client",
  },
  {
    text: "Just perfect retreat. Incredible setting, the warmest of welcomes and beautifully clean. What a lovely 3 nights we have had. Highly recommend.",
    name: "Hanna S",
    title: "Client",
  },
  {
    text: "Beautiful house. We used it for a business trip and it was most definitely accommodating. The host is quick at replying and very accommodating to the guests needs. Great experience!",
    name: "Janeth",
    title: "Client",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className='w-full bg-white py-10'>
      <div
        className="relative py-16 max-w-6xl mx-auto bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/bg5.jpg')",
        }}
      >
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Testimonials
          </h1>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1} // default for all small screens including md
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 2, // lg and xl screens
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="bg-[#373737] text-gray-200 rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                    <p className="mb-4">&quot;{testimonial.text}&quot;</p>
                  </div>

                  <div className="flex flex-col items-center mb-10">
                    <p className="mt-2 text-center">
                      <span className="font-semibold italic text-[#b87333]">{testimonial.name}</span>
                      <br />
                      <span className="text-black text-sm">{testimonial.title}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="text-center mt-10">
            <a
              href="/testimonials"
              className="inline-block px-6 py-3 bg-[#373737] text-white font-semibold rounded-md transition hover:bg-[#4a4a4a]"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
