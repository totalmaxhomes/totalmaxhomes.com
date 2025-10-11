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

export default function OOPage() {

    const descriptionParagraphs = [
        "You might have gawked at more than 30 feet high ceilings, multi-colored glass mural windows arch ways, columns and walkways that remind you of scenes from a romantic old Hollywood film. This is the O & O Mansion that reeks of Italian architecture, classic, yet modern.",
        "The water attractions are aplenty with various amenities such as a huge resort pool featuring waterfalls, a grotto, swim-up bars with bar benches in the water, a large jetted spa, Hawaiian style Palapa shades, a backyard lined up with palmed trees and bamboos, a water mist and covered sunscreen. Sitting areas are adjacent to the outdoor kitchen and swim-up bar.",
        "With star chefs as our strategic partners, they fully enjoy cooking for a whole delegation of up to 34 guests in grand kitchens inside, and a full kitchen outdoors by the resort pool, including a central industrial style bar."
    ];

    const counters = [
        { title: 'BEDROOMS', value: 9 },
        { title: 'GUEST CAPACITY', value: 33 },
        { title: 'BATHS', value: 8 },
        { title: 'LIVING AREA', value: 6000, suffix:'sq.ft' },
        { title: 'LOT AREA', value: 26000, suffix:'sq.ft' }
    ];

    const features1 = [
        { image: '/OO-Kitchen.jpg', title: 'Kitchens', description: 'Indoor Kitchen: Features 6 burners, 2 wall ovens, 2 long islands (each up to 10 feet), capable of serving over 20 guests Outdoor Kitchen: Full kitchen facilities adjacent to the resort pool' },
        { image: '/backyard-5.jpg', title: 'Dining Areas', description: 'Includes a large living room, family room, dining room, breakfast area, and Center O Bar' },
        { image: '/OO-Pool-Area.jpg', title: 'Pool Area', description: 'Large resort pool with waterfalls, a grotto, swim-up bars, and a large jetted spa Hawaiian style Palapa shades Water mist and covered sunscreen' }
    ];

    const features2 = [
        { image: '/6425-Darby-Ave-Las-Vegas-NV-print-104-105-Exterior-Pool-2700x1799-300dpi.jpg', title: 'Outdoor Features', description: 'Backyard with palm trees and bamboos Outdoor kitchen and seating areas near the swim-up bar' },
        { image: '/OO-Architecture.jpg', title: 'Architecture', description: 'Italian with high ceilings, multi-colored glass mural windows, archways, and columns' },
        { image: '/W8A0341.jpg', title: 'Additional Features', description: 'Used for TV, movies, and professional photo sessions Central industrial-style bar' }
    ];

    const videos = [
        "https://www.youtube.com/embed/K5ZOiJUQ3Ek", // O & O Backyard
        "https://www.youtube.com/embed/W1DDh88JRTM", // O & O Front Exterior
        "https://www.youtube.com/embed/Mze5grb9RMk", // O & O Kitchen
        "https://www.youtube.com/embed/tCuG5rZhCWE", // O & O Mansion
        "https://www.youtube.com/embed/6hR1QUMtapE"  // O & O Mansion by TotalMax Homes.
    ]

    return (
        <>
            <Navbar />
            <div className='bg-white animate-fade-in-up'>


                <MansionHeader title="O & O" backgroundImage="/family-room-4.jpg" />
                <MansionDescription
                    title="The Oasis Oakey Mansion"
                    paragraphs={descriptionParagraphs}
                    backgroundImage="/bg5.jpg"
                    bookLink="/contact-us"
                />
                <MansionCounters
                    backgroundImage="/bg5.jpg"
                    barImage="/bg-2.jpg"
                    counters={counters}
                />
                <MansionTitle title="The O & O Mansion" />
                <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />
                <MansionGallery
                    tabs={galleriesData.oo.tabs.map((tab: GalleryTab) => ({
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