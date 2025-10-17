import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MansionHeader from '@/components/MansionHeader';
import MansionDescription from '@/components/MansionDescription';
import MansionCounters from '@/components/MansionCounters';
import MansionTitle from '@/components/MansionTitle';
import MansionFeatures from '@/components/MansionFeatures';
import MansionBookNow from '@/components/MansionBookNow';
import MansionGallery from '@/components/MansionGallery';
import MansionVirtualTour from '@/components/MansionVirtualTour';
import galleriesData from '@/data/galleries.json';
import { GalleryTab, GalleryImage } from '@/types/mansion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enchanted Elegant Mansion - TotalMax Homes',
  description: 'Discover the Enchanted Elegant Mansion, blending contemporary design with traditional Chinese garden elements in Las Vegas.',
  openGraph: {
    title: 'Enchanted Elegant Mansion - TotalMax Homes',
    description: 'Discover the Enchanted Elegant Mansion, blending contemporary design with traditional Chinese garden elements in Las Vegas.',
    url: 'https://www.totalmaxhomes.com/ee',
    siteName: 'TotalMax Homes',
    images: [
      {
        url: 'https://www.totalmaxhomes.com/2929-El-Camino-Rd-Las-Vegas-NV-print-013-15-Living-Room-3000x2000-300dpi.jpg',
        width: 1200,
        height: 630,
        alt: 'Enchanted Elegant Mansion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function EEPage() {

    const descriptionParagraphs = [
        "Right here is the one and only Chinese garden-style mansion in all of Vegas with a contemporary modern fusion design at the E & E Mansion. The Suzhou style walls and patterns immediately transport you to ancient gardens full of tranquil greenery. The front porch is built with a waterfall and black lava bricks, all under bamboo beams and ivory walls.",
        "As you step indoors, behold -- gold and red doors of a palace, combined with white walls and grey tile windows and pillars. It’s a world from long ago and far away with all the finest Hangzhou and Suzhou art designs of yesteryears in a modern setting. Subtle luxury is accentuated by white walls, grey tiles and pillars, emblems, spring trees and bamboos, along with Wu Guanzhong’s famous Southern China masterpieces in the main hall. Where modernity of the west marries ancient luxury of the east, the E & E Mansion is it.",
        "And so who gets to the pool first? There are, in fact, 2 huge resort pools connected by waterfalls, a grotto, swim-up bar, and Hawaiian style Palapa shades as you jump from one pool to another. The built-in fogger and mists jets add more fun splashes. Run a Hawaii type of luau any time after sun down on the fire pits. Meanwhile, the Dolphin Cove depicts mother and son dolphin figurines that play with the ball at the bottom of the first pool. The second pool is a Shark’s Reef that features a hammer head and sand shark figurines along with a big great white towards the bar."
    ];

    const counters = [
        { title: 'BEDROOMS', value: 7 },
        { title: 'BATHROOMS', value: 5 },
        { title: 'GUEST CAPACITY', value: 26 },
        { title: 'LIVING AREA', value: 4000, suffix:'sq.ft' },
        { title: 'LOT AREA', value: 25000, suffix:'sq.ft' }
    ];

    const features1 = [
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-080-62-Bbq-Grill-Area-2700x1800-300dpi.jpg', title: 'Pool Area', description: 'Two large resort pools connected by waterfalls, featuring a grotto and swim-up bar Hawaiian style Palapa shades Unique pool themes: Dolphin Cove and Shark’s Reef with themed figurines Built-in fogger and mist jets' },
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-073-75-Pool-Bar-2700x1800-300dpi.jpg', title: 'Additional Water Features', description: 'Tropical Forest with remote-controlled rain system and LED-lit floor jets' },
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-081-58-Front-Yard-2700x1800-300dpi.jpg', title: 'Outdoor Features', description: 'Fire pits for evening events Beautifully landscaped with black lava stones and tropical plants' }
    ];

    const features2 = [
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-026-55-Family-Room-2700x1800-300dpi.jpg', title: 'Luxury Amenities', description: 'Master suite with an accent wall of Chinese art, overlooking the pool Master bathroom with marble, limestone, and pebble stone, heated jet tub, and marble counter double sink vanity' },
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-009-45-Foyer-3000x2000-300dpi.jpg', title: 'Security', description: 'Equipped with 16-casino level ultra HD cameras for full security monitoring' },
        { image: '/2929-El-Camino-Rd-Las-Vegas-NV-print-020-70-Family-Room-2700x1800-300dpi.jpg', title: 'Design Themes', description: 'Fusion of modern Western design with traditional Eastern influences, featuring gold and red palace doors, white walls, grey tile, and Hangzhou and Suzhou art' }
    ];

    const videos = [
        "https://www.youtube.com/embed/1mPWwuzLYJk", // E & E Backyard
        "https://www.youtube.com/embed/qcwhof8o8BM", // E & E Bathrooms
        "https://www.youtube.com/embed/xM8IJsBTDGQ", // E & E Bedrooms
        "https://www.youtube.com/embed/fatRLU3Tezk", // E & E Dining Room
        "https://www.youtube.com/embed/_rDWiDX04kI", // E & E Frontyard
        "https://www.youtube.com/embed/OUTklSnONnM", // E & E Kitchen
        "https://www.youtube.com/embed/gbVdPPoJwTY", // E & E Living Room
        "https://www.youtube.com/embed/EeMRHqbC6q8"  // E & E Main House
    ]

    return (
        <>
            <Navbar />
            <div className='bg-white animate-fade-in-up'>


                <MansionHeader title="E & E" backgroundImage="/2929-El-Camino-Rd-Las-Vegas-NV-print-013-15-Living-Room-3000x2000-300dpi.jpg" />
                <MansionDescription
                    title="The Enchanted Elegant Mansion"
                    paragraphs={descriptionParagraphs}
                    backgroundImage="/bg5.jpg"
                    bookLink="/contact-us"
                />
                <MansionCounters
                    backgroundImage="/bg5.jpg"
                    barImage="/bg-2.jpg"
                    counters={counters}
                />
                <MansionTitle title="The E & E Mansion" />
                <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />
                <MansionGallery
                    tabs={galleriesData.ee.tabs.map((tab: GalleryTab) => ({
                        ...tab,
                        images: tab.images.map((img: GalleryImage, idx: number) => ({
                            ...img,
                            title: img.title ?? `Image ${idx + 1}`
                        }))
                    }))}
                />
                <MansionBookNow link="/contact-us" />
                <MansionVirtualTour title="Virtual Tour" videos={videos} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />

            </div>
            <Footer />
        </>
    );
}