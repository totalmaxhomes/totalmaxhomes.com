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

export default function UUPage() {

    const descriptionParagraphs = [
        "What’s it like to alight from your vehicle and arrive here, right at the foot of an awesome mural wall that stands at 8 feet tall and stretches up to 100 feet long? The wall mural depicts a Chinese treasure of “Qingming Shan He Tu” or “scenes along the river during the Qingming Festival”. Welcome to the U & U Mansion, the Ultimate Utopia Mansion. Greet your other visitors as they drive through the three 22-feet large sliding gates with a circular driveway. They’re in for a very pleasant surprise!",
        "Furnished with 8 bedrooms and 8 bathrooms, a resort pool, a huge kitchen, a karaoke room and automatic gated driveway, the interior lets you in to more ultimate splendor. Decorated with traditional Chinese art design that’s hand-painted, you’re in for a classic abode that blends traditional east Asian and contemporary style.",
        "For a restful sleep, the bedrooms take you to a land of blossoms with its wall art designs. All bedsheets are eighteen hundred thread counts for your utmost comfort. Watch your favorite TV shows on a large HD flat screen TV linked to cable. And in the common areas, you can still stay tuned to your TV programs where several large TV sets are located.",
        "After taking a shower with space age shower heads, dry up with bath towels that are fresh, new and soft."
    ];

    const counters = [
        { title: 'BEDROOMS', value: 8 },
        { title: 'BATHROOMS', value: 8 },
        { title: 'GUEST CAPACITY', value: 24 },
        { title: 'LIVING AREA', value: 4300, suffix:'sq.ft' },
        { title: 'LOT AREA', value: 25000, suffix:'sq.ft' }
    ];

    const features1 = [
        { image: '/W8A0146-1.jpg', title: 'BATH', description: 'Main Kitchen: Equipped with 3 ovens, 2 microwaves, 8 stove tops, 3 large refrigerators, multiple sinks, 2 dishwashers Outdoor Kitchen: Includes a 5-burner BBQ, industrial work burner, huge 20 chicken rotisserie, and an industrial sink' },
        { image: '/W8A0166-2.jpg', title: 'Entertainment Areas', description: 'Karaoke Room Gaming Room: Football table, double-shot basketball ring, exercise running machine' },
        { image: '/W8A0046-1.jpg', title: 'Living Areas', description: 'Large HD flat-screen TVs linked to cable in bedrooms and common areas Common areas with multiple large TV sets' }
    ];

    const features2 = [
        { image: '/W8A0056.jpg', title: 'Decor', description: 'Traditional East Asian hand-painted art and contemporary style' },
        { image: '/W8A0056-2.jpg', title: 'Luxury Features', description: 'Bedsheets are eighteen hundred thread count Space age shower heads and soft new bath towels' },
        { image: '/W8A0126-2.jpg', title: 'Outdoor Features', description: 'Resort pool with a waterfall, slide, cave, and spa Four courtyards, front yard, and backyard Four gazebo areas with tables, chairs, and a couch' }
    ];
    const features3 = [
        { image: '/W8A0306-1.jpg', title: 'Driveway', description: 'Circular, with automatic gates and three 22-feet large sliding gates' },
        { image: '/W8A0171-1.jpg', title: 'Wall Mural', description: '8 feet tall and 100 feet long, depicting “Qingming Shan He Tu”' },
        { image: '/W8A0311-1.jpg', title: 'Security', description: 'Automatic gated driveway' }
    ];

    const videos = [
        "https://www.youtube.com/embed/kAGpyUehZcE",
        "https://www.youtube.com/embed/uhc0785kvC8",
        "https://www.youtube.com/embed/2ajMiUn52gU",
        "https://www.youtube.com/embed/jEUGDOPVWkc",
        "https://www.youtube.com/embed/McOK28wPsyc",
        "https://www.youtube.com/embed/URu6DadVpRw",
        "https://www.youtube.com/embed/jytQ6xrQeuM",
        "https://www.youtube.com/embed/qn7LcJ4ENDM"
    ]

    return (
        <>
            <Navbar />
            <div className='bg-white animate-fade-in-up'>


                <MansionHeader title="U & U" backgroundImage="/W8A0111-2.jpg" />
                <MansionDescription
                    title="The Ultimate Utopia Mansion"
                    paragraphs={descriptionParagraphs}
                    backgroundImage="/bg5.jpg"
                    bookLink="/contact-us"
                />
                <MansionCounters
                    backgroundImage="/bg5.jpg"
                    barImage="/bg-2.jpg"
                    counters={counters}
                />
                <MansionTitle title="The U & U Mansion" />
                <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
                <MansionFeatures features={features3} backgroundImage="/bg5.jpg" />
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
                <MansionVirtualTour title="Virtual Tour" videos={videos} backgroundImage="/bg5.jpg" />
                <MansionBookNow link="/contact-us" />

            </div>
            <Footer />
        </>
    );
}