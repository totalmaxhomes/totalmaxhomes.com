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

export default function DDPage() {

  const descriptionParagraphs = [
    "Do as the Romans do, right in your D & D Mansion in Las Vegas! Dream of Roman gods and goddesses or rule like the gods of Roman mythology. Or lay in tranquil water like royalty. The D & D Mansion gives in to your desires of a quintessential Venetian look, with touches of old Italy, combined with modern amenities that make your vacation stay worth your while.",
    "It’s a world-class resort that welcomes water pool buffs who want to wade, cool off or take a swim. Superb water attractions include waterfalls, a grotto, swim-up bars, bar benches in the water and Hawaiian Palapa shades. Palm trees provide shade by the pool side, reminiscent of Hawaiian sojourns.",
    "The private Chinese garden is lovely for leisurely strolls, famous for its design in the West Coast of the United States. Flown in directly from Suzhou, China, the Taihu stones are renowned in authentic Suzhou Gardens. Click away for great Instagram shots on any of the four bridges over a winding river, a koi pond and fresh water pool. Bamboo sprouts lend some Oriental feel to your surroundings."
  ];

  const counters = [
    { title: 'BEDROOMS', value: 12 },
    { title: 'BATHROOMS', value: 13 },
    { title: 'GUEST CAPACITY', value: 42 },
    { title: 'LIVING AREA', value: 13000, suffix:'sq.ft' },
    { title: 'LOT AREA', value: 38000, suffix:'sq.ft' }
  ];

  const features1 = [
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-018-6-Dining-Room-2700x1800-300dpi.jpg', title: 'Dining Areas', description: 'Includes a formal dining room and a breakfast area' },
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-058-54-2nd-Floor-Wine-Cellar-2700x1800-300dpi.jpg', title: 'Wine Cellar', description: 'Capacity for 3,000 bottles' },
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-057-28-2nd-Floor-Gym-2700x1800-300dpi.jpg', title: 'Fitness and Leisure', description: 'Indoor gym, library, and a playroom' }
  ];

  const features2 = [
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-020-4-Dining-Room-2700x1800-300dpi.jpg', title: 'Conference Facilities', description: 'Includes a conference room' },
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-104-105-Exterior-Pool-2700x1799-300dpi.jpg', title: 'Outdoor Features', description: 'Resort-style pool with waterfalls, grotto, and swim-up bars<br />Private Chinese garden with Taihu stones from Suzhou, China<br />Southern lawn for events, accommodating up to 500 seated guests' },
    { image: '/6425-Darby-Ave-Las-Vegas-NV-print-135-69-Driveway-2700x1800-300dpi.jpg', title: 'Parking', description: 'Ample space available' }
  ];

  const videos = [
    'https://www.youtube.com/embed/tny3BiGQw8I', // D & D Master Bedroom
    'https://www.youtube.com/embed/bYHI-nCPPFA', // D & D Reception & Dining
    'https://www.youtube.com/embed/DymNEx0Y_Ds'  // D & D Mansion by TotalMax Homes
  ];

  return (
    <>
      <Navbar />
      <div className='bg-white animate-fade-in-up'>


        <MansionHeader title="D & D" backgroundImage="/540A4189.jpg" />
        <MansionDescription
          title="The Dreams & Desires Mansion"
          paragraphs={descriptionParagraphs}
          backgroundImage="/bg5.jpg"
          bookLink="/contact-us"
        />
        <MansionCounters
          backgroundImage="/bg5.jpg"
          barImage="/bg-2.jpg"
          counters={counters}
        />
        <MansionTitle title="The D & D Mansion" />
        <MansionFeatures features={features1} backgroundImage="/bg5.jpg" />
        <MansionFeatures features={features2} backgroundImage="/bg5.jpg" />
        <MansionBookNow link="/contact-us" />
        <MansionGallery
          tabs={galleriesData.dd.tabs.map((tab: GalleryTab) => ({
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