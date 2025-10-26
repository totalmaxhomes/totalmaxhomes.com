import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MansionHeader from '@/components/MansionHeader';
import MansionDescription from '@/components/MansionDescription';
import MansionCounters from '@/components/MansionCounters';
import MansionTitle from '@/components/MansionTitle';
import MansionFeatures from '@/components/MansionFeatures';
import MansionBookNow from '@/components/MansionBookNow';
import MansionGallery from '@/components/MansionGallery';
import galleriesData from '@/data/galleries.json';
import { GalleryTab, GalleryImage } from '@/types/mansion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Celestial Mansion Club - TotalMax Homes',
  description: 'Experience the Celestial Mansion Club, a world-class private nightclub mansion in Las Vegas with resort pools, spa, and industrial kitchen for unforgettable stays.',
  openGraph: {
    title: 'Celestial Mansion Club - TotalMax Homes',
    description: 'Experience the Celestial Mansion Club, a world-class private nightclub mansion in Las Vegas with resort pools, spa, and industrial kitchen for unforgettable stays.',
    url: 'https://www.totalmaxhomes.com/cc',
    siteName: 'TotalMax Homes',
    images: [
      {
        url: 'https://www.totalmaxhomes.com/W8A0456.jpg',
        width: 1200,
        height: 630,
        alt: 'Celestial Mansion Club',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CCPage() {

    const descriptionParagraphs = [
        "This luxurious property is likened to a luxurious, world-class private nightclub with a resort style pool, spa and full industrial kitchen. This C & C Mansion Club keeps you privately entertained while keeping you heavenly comfortable and settled to the fullest all throughout your stay while visiting Las Vegas.",
        "What’s there not to like? Everything is a blast! This amazing Mansion Club is fully equipped with 2 pools to choose from and either one can be heated. Enjoy a double waterfall, a slide for your youthful glee, a spa to relax your nerves, a swim-up bar for your favorite drink, a cave cabana and submersible bar stools and table.",
        "Inside, check in any of all 9 bedrooms and use any of 8 bathrooms. Each bedroom has bedsheets with an eighteen hundred thread count. There’s one large HD flat screen TV linked to cableTV and Netflix in every room. In the common areas, there are several large TV sets, too. For a game of ping pong and other games, the game room is waiting for you."
    ];

    const counters = [
        { title: 'BEDROOMS', value: 9 },
        { title: 'BATHROOMS', value: 8 },
        { title: 'GUEST CAPACITY', value: 31 },
        { title: 'LIVING AREA', value: 6300, suffix:'sq.ft' },
        { title: 'LOT AREA', value: 24000, suffix:'sq.ft' }
    ];

    const features1 = [
        { image: '/Private-Night-Club-large-004-7-Kitchen-1500x1000-72dpi.jpg', title: 'BATH', description: 'Indoor Kitchen: Equipped with 4 ovens, 2 microwaves, a dozen stove tops, multiple refrigerators, wine coolers, a double tap kegerator, ice machine, and multiple sinks Outdoor Kitchen: Includes 5-burner BBQs, an industrial work burner, huge 20 chicken rotisserie, and a 6-burner stove top' },
        { image: '/Private-Night-Club-large-064-64-Dining-Room-1500x1000-72dpi.jpg', title: 'Dining and Entertainment Areas', description: 'Several large HD flat-screen TVs with cable and Netflix in every room and common areas Game room with ping pong and other games' },
        { image: '/Private-Night-Club-large-049-4-Pool-Bar-1500x1000-72dpi.jpg', title: 'Pool Area', description: 'Two pools, both of which can be heated Features include a double waterfall, slide, spa, swim-up bar, cave cabana, and submersible bar stools and table' }
    ];

    const features2 = [
        { image: '/Private-Night-Club-large-002-12-Living-Room-1500x1000-72dpi.jpg', title: 'Luxury Amenities', description: 'Each bedroom has bedsheets with an eighteen hundred thread count Bath towels are soft, plush, and new Space-age shower heads, jacuzzi bathtubs, and steam showers' },
        { image: '/Private-Night-Club-large-034-6-Media-Room-1500x1000-72dpi.jpg', title: 'Appliances and Equipment', description: 'High-end appliances including a Ninja Blender, Keurig, InstaPot, and electric hot water kettle' },
        { image: '/W8A0516.jpg', title: 'Transportation', description: 'Just $10 for an Uber ride from the strip' }
    ];


    return (
        <>
            <Navbar />
            <div className='bg-white animate-fade-in-up'>


                <MansionHeader title="C & C" backgroundImage="/W8A0456.jpg" />
                <MansionDescription
                    title="The Celestial Mansion Club"
                    paragraphs={descriptionParagraphs}
                    backgroundImage="/bg5.jpg"
                    bookLink="/contact-us"
                />
                <MansionCounters
                    backgroundImage="/bg5.jpg"
                    barImage="/bg-2.jpg"
                    counters={counters}
                />
                <MansionTitle title="The C & C Mansion" />
                <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />
                <MansionGallery
                    tabs={galleriesData.cc.tabs.map((tab: GalleryTab) => ({
                        ...tab,
                        images: tab.images.map((img: GalleryImage, idx: number) => ({
                            ...img,
                            title: img.title ?? `Image ${idx + 1}`
                        }))
                    }))}
                />
                <MansionBookNow link="/contact-us" />
                {/* <MansionVirtualTour title="Virtual Tour" videos={videos} backgroundImage="/bg5.jpg" /> */}
                {/* <MansionBookNow link="/contact-us" /> */}

            </div>
            <Footer />
        </>
    );
}