// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// interface GalleryImage {
//   src: string;
//   alt: string;
// }

// interface Tab {
//   id: string;
//   title: string;
//   images: GalleryImage[];
// }

// interface MansionGalleryProps {
//   tabs: Tab[];
// }

// export default function MansionGallery({ tabs }: MansionGalleryProps) {
//   const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

//   return (
//     <section className="w-full py-12 flex justify-center">
//       <div className="w-full max-w-7xl px-4">
//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#373737]">
//           Gallery
//         </h1>

//         {/* Tabs + Gallery Layout */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Tabs (Left Side) */}
//           <ul className="flex flex-col md:w-1/4 space-y-2">
//             {tabs.map((tab) => (
//               <li
//                 key={tab.id}
//                 className={`cursor-pointer py-3 px-4 text-center md:text-left rounded-md font-medium transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-[#C19B77] text-white shadow-md'
//                     : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
//                 }`}
//                 onClick={() => setActiveTab(tab.id)}
//               >
//                 {tab.title}
//               </li>
//             ))}
//           </ul>

//           {/* Gallery (Right Side) */}
//           <div className="md:w-3/4 bg-white rounded-lg shadow-md p-4">
//             <Swiper
//               modules={[Navigation, Pagination, Autoplay]}
//               navigation
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 2500 }}
//               loop={true}
//               className="rounded-lg overflow-hidden"
//             >
//               {tabs
//                 .find((t) => t.id === activeTab)
//                 ?.images.map((img, index) => (
//                   <SwiperSlide key={index}>
//                     <a
//                       href={img.src}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={img.src}
//                         alt={img.alt}
//                         width={2700}
//                         height={1800}
//                         className="w-full h-auto rounded-lg"
//                       />
//                     </a>
//                   </SwiperSlide>
//                 ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Tab {
  id: string;
  title: string;
  images: GalleryImage[];
}

interface MansionGalleryProps {
  tabs: Tab[];
}

export default function MansionGallery({ tabs }: MansionGalleryProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#373737]">
          Gallery
        </h1>

        {/* Combined White Box */}
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row">
          {/* Left Side: Tabs */}
          <ul className="flex flex-col md:w-1/4 ">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer py-3 px-4 text-center md:text-left font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#C19B77] text-white shadow-md'
                    : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </li>
            ))}
          </ul>

          {/* Right Side: Gallery */}
          <div className="md:w-3/4 flex justify-center items-center">
            <div className="w-full sm:w-[90%] md:w-[80%]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                className="rounded-lg overflow-hidden"
              >
                {tabs
                  .find((t) => t.id === activeTab)
                  ?.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <a
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1800}
                          height={1200}
                          className="w-full h-auto rounded-lg"
                        />
                      </a>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
