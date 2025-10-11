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

export default function RRPage() {

    const descriptionParagraphs = [
        "The water wall in black limestone before you step into the R & R Mansion already reveals what’s in store for you. The European counterpart in design and comfort on this side of Vegas are what you’re bound to experience. Custom-designed and built for world-class travelers in mind, the shades of white, grey, black, stainless and natural wood highlight the complete contemporary, high-end design throughout the whole mansion.",
        "The wide open main hall beckons you to enter and be welcomed by huge glass doors that immediately offer you a view of the amazing pool with four water streams.",
        "In fact, the outdoor features of the R & R Mansion are even to die for. Guests will be surprised at the backyard where there’s a huge resort pool that's more than 12-feet deep. It’s connected by waterfalls, a water slide, a grotto, swim-up bar, and Hawaiian style Palapa shades. A built-in fogger and misting jets make the pool area most ideal for a fresh splash.",
        "Then for sports buffs, next to the pool, is a full basketball court built by one of the top sports court builders in the USA, and one of the few available amenities here in Vegas for sports-minded guests. Basketball teams come here for the NBA Summer league, NCAA games, including hundreds of teams for basketball camps."
    ];

    const counters = [
        { title: 'BEDROOMS', value: 12 },
        { title: 'GUEST CAPACITY', value: 48 },
        { title: 'BATHS', value: 12 },
        { title: 'LIVING AREA', value: 7158, suffix:'sq.ft' },
        { title: 'LOT AREA', value: 30000, suffix:'sq.ft' }
    ];

    const features1 = [
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-032-97-Kitchen-2700x1800-300dpi.jpg', title: 'Kitchens', description: 'Main Kitchen: Equipped with a 48” range, a 36” cooktop, 5 ovens, and two islands (20 feet and 15 feet long)Outdoor Kitchen: Includes cooking facilities for large events, a full kitchen with refrigerator, cook burners, hot plate, and a barbecue area' },
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-021-37-Dining-Room-2700x1800-300dpi.jpg', title: 'Dining Areas', description: 'Large areas for breakfast, formal dining, and outdoor dining' },
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-087-57-Exterior-Pool-2700x1800-300dpi.jpg', title: 'Entertainment Areas', description: 'Large resort pool with waterfalls, water slide, grotto, and swim-up bar Full basketball court and tennis court with additional lines for volleyball, badminton, and pickleball Children’s playground and large white sandbox' }
    ];

    const features2 = [
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-009-68-Living-Room-2700x1800-300dpi.jpg', title: 'Luxury Amenities', description: 'Master suite with view of the sports court and pool European style master bathroom with marble, limestone, pebble stone, Swedish sauna, and rain showers with massage systems High-security with 18 ultra HD cameras' },
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-100-125-Tennis-Court-2700x1800-300dpi.jpg', title: 'Outdoor Features', description: 'Sports court suitable for basketball, tennis, volleyball, badminton, and pickleball Large gazebo with mist jets Spacious areas for large gatherings and events' },
        { image: '/2858-Red-Rock-St-Las-Vegas-NV-print-072-48-Karaoke-Room-2700x1800-300dpi.jpg', title: 'Special Features', description: 'Property used for TV series and photo shoots Balcony with skyline views of Las Vegas from Rio to the Stratosphere' }
    ];

    const videos = [
        "https://www.youtube.com/embed/qCop8ujJGNQ", // R & R Bedrooms
        "https://www.youtube.com/embed/R1GeDoIV-eQ", // R & R Backyard
        "https://www.youtube.com/embed/IlQjQsJdLo8", // R & R Bathrooms
        "https://www.youtube.com/embed/zWY327Y-BwU", // R & R Dining Room
        "https://www.youtube.com/embed/uousyWTGSS4", // R & R Front Yard
        "https://www.youtube.com/embed/qSIMdwSjuhs", // R & R Kitchen
        "https://www.youtube.com/embed/nkle5QkTJUw", // R & R Living Room
        "https://www.youtube.com/embed/mIsoa_jE1Do", // R & R Main House
        "https://www.youtube.com/embed/qC1SVya1O7k", // R & R Other Areas
        "https://www.youtube.com/embed/CXmQEEi1hLo"  // R & R Mansion by TotalMax Homes
    ]

    return (
        <>
            <Navbar />
            <div className='bg-white animate-fade-in-up'>


                <MansionHeader title="R & R" backgroundImage="/540A4189.jpg" />
                <MansionDescription
                    title="The Retreat of Revelation Mansion"
                    paragraphs={descriptionParagraphs}
                    backgroundImage="/bg5.jpg"
                    bookLink="/contact-us"
                />
                <MansionCounters
                    backgroundImage="/bg5.jpg"
                    barImage="/bg-2.jpg"
                    counters={counters}
                />
                <MansionTitle title="The R & R Mansion" />
                <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />
                <MansionGallery
                    tabs={galleriesData.rr.tabs.map((tab: GalleryTab) => ({
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