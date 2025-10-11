import LatestBlogs from "@/components/Blogs";
import BookMansionSection from "@/components/BookMansionSection";
import FeaturesSection from "@/components/Cards";
import FeaturedMansion from "@/components/FeaturedMansions";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InquiryForm from "@/components/InquiryForm";
import MansionSlider from "@/components/MansionSilder";
import Navbar from "@/components/Navbar";
import PoliciesSection from "@/components/Policies";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import { mansions } from "@/data/mansion";
 
export default function Home() {
  return (
    <> 
    <Navbar />
    <HeroSection />
    {/* <FeaturedMansion /> */}
    <InquiryForm />
    <MansionSlider mansions={mansions} />
    <TestimonialsCarousel />
    <WhoWeAre />
    <PoliciesSection />
    <FeaturesSection />
    <BookMansionSection />
    <LatestBlogs limit={3}/>
    <Footer />
    </>
  ); 
}
