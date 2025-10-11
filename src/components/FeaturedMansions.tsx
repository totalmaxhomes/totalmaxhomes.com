"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FeaturedMansion = () => {
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

    const ctaItems = [
        {
            title: "Front Yard",
            img: "/Front-Yard.jpg",
        },
        {
            title: "Pool",
            img: "/Pool-scaled.jpg",
        },
        {
            title: "Master Bedroom",
            img: "/2858-Red-Rock-St-Las-Vegas-NV-print-106-114-Guest-House-Master-Bedroom-2700x1800-300dpi-scaled.jpg",
        },
        {
            title: "Court",
            img: "/Court-scaled.jpg",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className={`relative w-full py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{
                backgroundImage:
                    "url('/bg11.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative mx-auto px-6 max-w-6xl flex flex-col xl:flex-row gap-8">
                {/* Left Column - Text + CTA Grid */}
                <div className="flex-1 flex flex-col relative">
                    <div className={`mt-8 md:mt-10 md:hidden block ${isVisible ? 'animate-slide-in-right' : ''}`}>
                        <Image
                            src="/Big-Image-1.jpg"
                            alt="Mansion"
                            width={1200}
                            height={600}
                            className="w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    {/* Title */}
                    <h5 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mt-6 md:mt-0">
                        Featured Mansion
                    </h5>
                    <h1 className="text-3xl md:text-5xl font-bold text-black mt-3">
                        The Retreat of Revelation Mansion
                    </h1>

                    {/* Text */}
                    <div className="grid grid-cols-1 gap-6 mt-6">
                        <p className="text-black text-base leading-relaxed">
                            The R &amp; R Mansion by TotalMax Homes offers a luxurious stay in
                            Las Vegas, showcasing modern design with amenities like a resort
                            pool with waterfalls, a sports complex, and accommodations for 48
                            guests.
                        </p>
                        <p className="text-black text-base leading-relaxed">
                            This venue is perfect for hosting large events, offering
                            world-class amenities and stunning outdoor and indoor settings,
                            making it an ideal choice for family reunions, sports events, and
                            corporate gatherings.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                        <a
                            href="/rr/"
                            className="inline-block bg-[#373737] text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
                        >
                            More Info
                        </a>
                    </div>
                    {/* Mansion Image for md/lg screens only */}

                    <div className={`hidden md:block xl:hidden ${isVisible ? 'animate-slide-in-right' : ''}`}>
                        <Image
                            src="/Big-Image-1.jpg"
                            alt="Mansion"
                            width={1200}
                            height={600}
                            className="w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* CTA Grid for smaller screens */}
                    <div className="xl:hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:w-[46rem] md:absolute md:bottom-0">
                            {ctaItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    href="/rr/#RR-Gallery"
                                    className={`relative group h-[250px] sm:h-[300px] md:h-40 rounded-lg overflow-hidden shadow-lg animate-slide-in-left`}
                                    style={{
                                        animationDelay: `${idx * 0.2}s`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                    <h2 className="absolute bottom-3 left-3 text-white font-bold text-lg">
                                        {item.title}
                                    </h2>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* CTA Grid Overlay */}
                    <div className="mt-3 hidden xl:absolute xl:-bottom-10 xl:left-0 xl:w-[160%] z-100 xl:block">
                        <div className="grid grid-cols-4 gap-6">
                            {ctaItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    href="/rr/#RR-Gallery"
                                    className="relative group h-40 rounded-lg overflow-hidden shadow-lg animate-slide-in-left"
                                    style={{
                                        animationDelay: `${idx * 0.2}s`,
                                        animationFillMode: 'both',
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                    <h2 className="absolute bottom-3 left-3 text-white font-bold text-lg">
                                        {item.title}
                                    </h2>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column - Mansion Image with CTA Grid Overlay */}
                <div className="flex-1 hidden xl:block">
                    {/* change slides from right to left */}
                    <div className={`w-full h-[550px] rounded-lg shadow-lg z-1
                         transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                        }`}>
                        <Image
                            src="/Big-Image-1.jpg"
                            alt="Mansion"
                            width={1200}
                            height={600}
                            className="w-full h-full rounded-lg shadow-lg object-cover"
                        />
                    </div>

                </div>


            </div>
        </section>
    );
};

export default FeaturedMansion;





// "use client";

// import Image from "next/image";

// const FeaturedMansion = () => {
//   return (
//     <section
//       className="relative w-full py-12"
//       style={{
//         backgroundImage:
//           "url('/bg11.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="relative mx-auto px-6 max-w-6xl flex flex-col">
//         {/* Mansion Image for small screens only */}
//         <div className="mt-8 md:hidden block">
//           <Image
//             src="/Big-Image-1.jpg"
//             alt="Mansion"
//             width={1200}
//             height={600}
//             className="w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
//           />
//         </div>

//         {/* Title */}
//         <h5 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mt-6 md:mt-8">
//           Featured Mansion
//         </h5>
//         <h1 className="text-3xl md:text-5xl font-bold text-black mt-3">
//           The Retreat of Revelation Mansion
//         </h1>

//         {/* Text */}
//         <div className="grid grid-cols-1 gap-6 mt-6">
//           <p className="text-black text-base leading-relaxed">
//             The R &amp; R Mansion by TotalMax Homes offers a luxurious stay in
//             Las Vegas, showcasing modern design with amenities like a resort
//             pool with waterfalls, a sports complex, and accommodations for 48
//             guests.
//           </p>
//           <p className="text-black text-base leading-relaxed">
//             This venue is perfect for hosting large events, offering
//             world-class amenities and stunning outdoor and indoor settings,
//             making it an ideal choice for family reunions, sports events, and
//             corporate gatherings.
//           </p>
//         </div>

//         {/* Button */}
//         <div className="mt-6">
//           <a
//             href="/rr/"
//             className="inline-block bg-[#373737] text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
//           >
//             More Info
//           </a>
//         </div>

//         {/* Mansion Image for md/lg/xl screens only */}
//         <div className="mt-8 hidden md:block">
//           <Image
//             src="/Big-Image-1.jpg"
//             alt="Mansion"
//             width={1200}
//             height={600}
//             className="w-full h-[550px] rounded-lg shadow-lg object-cover"
//           />
//         </div>

//         {/* New CTA Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {[
//             {
//               title: "Front Yard",
//               img: "/Front-Yard.jpg",
//             },
//             {
//               title: "Pool",
//               img: "/Pool-scaled.jpg",
//             },
//             {
//               title: "Master Bedroom",
//               img: "/2858-Red-Rock-St-Las-Vegas-NV-print-106-114-Guest-House-Master-Bedroom-2700x1800-300dpi-scaled.jpg",
//             },
//             {
//               title: "Court",
//               img: "/Court-scaled.jpg",
//             },
//           ].map((item, idx) => (
//             <a
//               key={idx}
//               href="/rr/#RR-Gallery"
//               className="relative group h-[250px] sm:h-[300px] md:h-40 rounded-lg overflow-hidden shadow-lg"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${item.img})` }}
//               ></div>
//               <h2 className="absolute bottom-3 left-3 text-white font-bold text-lg">
//                 {item.title}
//               </h2>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedMansion;
