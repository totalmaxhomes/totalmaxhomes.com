import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Mansions - TotalMax Homes',
  description: 'Explore our collection of luxury mansions in Las Vegas. From Dreams & Desires to Ultimate Utopia, discover the perfect vacation rental for your stay.',
  openGraph: {
    title: 'Luxury Mansions - TotalMax Homes',
    description: 'Explore our collection of luxury mansions in Las Vegas. From Dreams & Desires to Ultimate Utopia, discover the perfect vacation rental for your stay.',
    url: 'https://www.totalmaxhomes.com/mansions',
    siteName: 'TotalMax Homes',
    images: [
      {
        url: 'https://www.totalmaxhomes.com/Enchanted-Elegant-Right.jpg',
        width: 1200,
        height: 630,
        alt: 'TotalMax Homes Mansions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function MansionsPage() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-white text-black">

                {/* Top Header Section */}
                <section
                    className="relative w-full flex items-center justify-center py-12 h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("/Enchanted-Elegant-Right.jpg")' }}
                >
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                            Mansions
                        </h1>
                    </div>
                </section>

                {/* Mansion Reusable Section */}
                {[
                    {
                        id: 'dd',
                        reverse: true,
                        title: 'The D&D Mansion',
                        heading: 'Dreams & Desires Mansion',
                        images: [
                            '/Dreams-Desires-Mansion-1.jpg',
                            '/Dreams-Desires-Mansion-2.jpg',
                            '/Dreams-Desires-Mansion-3.jpg',
                        ],
                        paragraphs: [
                            'Experience the grandeur of ancient Rome at the D&D Mansion in Las Vegas! Indulge in the elegance of Roman mythology, relax like royalty in tranquil waters, and enjoy a quintessential Venetian ambiance with modern amenities.',
                            'This world-class resort features superb water attractions, including waterfalls, a grotto, swim-up bars, and Hawaiian Palapa shades, all surrounded by palm trees for a touch of tropical paradise. Wander through the private Chinese garden with authentic Taihu stones, picturesque bridges, and a koi pond for stunning Instagram moments.',
                            'With accommodations for up to 39 guests, a dozen bedrooms and bathrooms, multiple 5-star kitchens, and a 3000-bottle wine cellar, the D&D Mansion is perfect for both work and leisure, offering luxurious living with a blend of Roman, Italian, Hawaiian, and Oriental influences.',
                        ],
                    },
                    {
                        id: 'oo',
                        reverse: false,
                        title: 'The O&O Mansion',
                        heading: 'Oasis Oakey Mansion',
                        images: [
                            '/Oasis-Oakey-Mansion-1.jpg',
                            '/Oasis-Oakey-Mansion-2.jpg',
                            '/Oasis-Oakey-Mansion-3.jpg',
                        ],
                        paragraphs: [
                            'Step into the elegance of the O&O Mansion, where 30-foot-high ceilings, colorful glass murals, and Italian-inspired architecture evoke the charm of old Hollywood. This luxurious retreat features a resort-style pool with waterfalls, a grotto, swim-up bars, a large spa, and lush landscaping with palm trees and bamboo.',
                            'Accommodating up to 34 guests, the mansion boasts 9 bedrooms, 8 full bathrooms, spacious living and dining areas, and grand kitchens both indoors and outdoors, fully equipped and approved by star chefs. Ideal for large gatherings, the O&O Mansion is a picture-perfect oasis in Las Vegas.',
                            'Frequently chosen for TV, movie, and professional photo shoots, the O&O Mansion by TotalMax Homes represents the epitome of modern luxury living.',
                        ],
                    },
                    // {
                    //     id: 'rr',
                    //     reverse: true,
                    //     title: 'The R&R Mansion',
                    //     heading: 'Retreat of Revelation Mansion',
                    //     images: [
                    //         '/Retreat-of-Revelation-Mansion-1.jpg',
                    //         '/Retreat-of-Revelation-Mansion-2.jpg',
                    //         '/Retreat-of-Revelation-Mansion-3.jpg',
                    //     ],
                    //     paragraphs: [
                    //         'The R & R Mansion welcomes you with a black limestone water wall and European-inspired design. Inside, shades of white, grey, black, stainless steel, and natural wood create a contemporary, high-end atmosphere. The main hall opens to a pool with four water streams.',
                    //         'Outdoor amenities include a 12-foot-deep resort pool, waterfalls, a water slide, a grotto, and a swim-up bar. Sports facilities feature a full basketball court, a tennis court, and areas for volleyball, badminton, and pickleball. There’s also a gazebo, barbecue kitchen, playground, and sandbox.',
                    //         'Accommodating up to 48 guests, the mansion boasts a dozen bedrooms, luxurious sitting areas, and a state-of-the-art kitchen. The master suite offers a modern design and a European-style bathroom. Enhanced security, filming credentials, and world-class amenities make the R & R Mansion by TotalMax Homes the epitome of modern luxury living.',
                    //     ],
                    // },
                    {
                        id: 'ee',
                        reverse: true,
                        title: 'The E&E Mansion',
                        heading: 'Enchanted Elegant Mansion',
                        images: [
                            '/Enchanted-Elegant-Mansion-1.jpg',
                            '/Enchanted-Elegant-Mansion-2.jpg',
                            '/Enchanted-Elegant-Mansion-3.jpg',
                        ],
                        paragraphs: [
                            'The E & E Mansion in Las Vegas blends contemporary design with traditional Chinese garden elements. Suzhou-inspired walls, a waterfall, and black lava bricks create a tranquil ambiance, while gold and red palace doors, white walls, and grey tiles showcase Eastern luxury in a modern setting.',
                            'The mansion features two large resort pools connected by waterfalls, a grotto, a swim-up bar, and Hawaiian Palapa shades.',
                            'Accommodating 25 guests, the mansion offers 7 bedrooms, 5 bathrooms, and a luxurious master suite. The main kitchen is equipped with top-of-the-line appliances, including a 48” indoor range and a Samsung Refrigerator with a touch screen. The E & E Mansion by TotalMax Homes: the epitome of modern luxury living.',
                        ],
                    },
                    {
                        id: 'cc',
                        reverse: false,
                        title: 'The C&C Mansion',
                        heading: 'Celestial Mansion Club',
                        images: [
                            '/Celestial-Mansion-Club-1.jpg',
                            '/Celestial-Mansion-Club-2.jpg',
                            '/Celestial-Mansion-Club-3.jpg',
                        ],
                        paragraphs: [
                            'The C & C Mansion Club is a luxurious property in Las Vegas, resembling a world-class private nightclub. It features a resort-style pool, spa, and a full industrial kitchen, ensuring guests are entertained and comfortable throughout their stay.',
                            'Guests can enjoy two heated pools, a double waterfall, a slide, a spa, a swim-up bar, and a cave cabana with submersible bar stools and table. Inside, the mansion offers 9 bedrooms with 1800-thread-count sheets, 8 bathrooms, large HD TVs with cable and Netflix, and a game room.',
                            'The kitchen is equipped with high-end appliances, including a Ninja Blender, Keurig, and InstaPot, as well as multiple ovens, refrigerators, and a kegerator. The outdoor kitchen features BBQs, a rotisserie, and a 6-burner stove top. Just $10 away from the strip by Uber, the C & C Mansion Club by TotalMax Homes offers modern luxury living with the feel of an exclusive nightclub.',
                        ],
                    },
                    {
                        id: 'uu',
                        reverse: true,
                        title: 'The U&U Mansion',
                        heading: 'Ultimate Utopia Mansion',
                        images: [
                            '/Ultimate-Utopia-Mansion-1.jpg',
                            '/Ultimate-Utopia-Mansion-2.jpg',
                            '/Ultimate-Utopia-Mansion-3.jpg',
                        ],
                        paragraphs: [
                            'Arriving at the U & U Mansion, you’re welcomed by an impressive mural wall depicting "Qingming Shan He Tu" and a grand circular driveway with three large sliding gates. Welcome to the Ultimate Utopia Mansion.',
                            'Inside, the mansion features 8 bedrooms, 8 bathrooms, a resort pool, a karaoke room, and hand-painted Chinese art blending East Asian and contemporary styles. Bedrooms have 1800-thread-count sheets and large HD TVs, while bathrooms offer space-age shower heads and plush towels.',
                            'The kitchen is equipped with high-end appliances and an outdoor kitchen with a BBQ and rotisserie. Enjoy a heated pool, four courtyards, and a game room. The U & U Mansion by TotalMax Homes offers luxurious comfort for your ultimate vacation.',
                        ],
                    },
                ].map((mansion) => (
                    <section
                        key={mansion.id}
                        className={`relative w-full py-12 bg-cover bg-center`}
                        style={{ backgroundImage: 'url("/bg3.jpg")' }}
                    >
                        <div className={`max-w-7xl mx-auto px-4 flex ${!mansion.reverse ? 'md:flex md:flex-row-reverse' : 'md:flex md:flex-row'} items-start justify-between gap-8`}>
                            {/* Text Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h5 className="text-lg font-semibold text-[#C19B77] mb-2">{mansion.title}</h5>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#373737] mb-4 space-y-10">
                                    {mansion.heading}
                                </h1>

                                {/* Mobile Images */}
                                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 md:hidden">
                                    {mansion.images.map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img}
                                            alt={`${mansion.heading} ${i + 1}`}
                                            width={1152}
                                            height={768}
                                            className={`w-full h-auto rounded-lg ${i === 2 ? 'xl:col-span-2' : ''
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Paragraphs */}
                                {mansion.paragraphs.map((p, i) => (
                                    <p key={i} className="text-lg text-[#373737] mb-4">
                                        {p}
                                    </p>
                                ))}

                                {/* Buttons */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <Link
                                        href={`/${mansion.id}` as `/${'oo' | 'ee' | 'cc' | 'uu' | 'rr'}`}
                                        className="bg-[#C19B77] text-white px-4 py-2 rounded hover:bg-[#b08968] transition"
                                    >
                                        View Details
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="bg-[#373737] text-white px-4 py-2 rounded hover:bg-[#4a4a4a] transition"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop Images */}
                            <div className="w-full md:w-1/2 grid grid-cols-1 xl:grid-cols-2 gap-4 hidden md:grid">
                                {mansion.images.map((img, i) => (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt={`${mansion.heading} ${i + 1}`}
                                        width={1152}
                                        height={768}
                                        className={`w-full h-auto rounded-lg ${i === 2 ? 'xl:col-span-2' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Contact Section */}
                <section
                    className="relative w-full py-16 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: 'url("/parallax-3.jpg")' }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Reach out to us with any questions or for more details about our luxurious mansions.
                        </h3>
                        <Link
                            href="/contact-us"
                            className="bg-[#C19B77] text-white px-4 py-2 rounded hover:bg-[#b08968] transition whitespace-nowrap"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}