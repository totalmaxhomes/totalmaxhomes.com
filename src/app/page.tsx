import LatestBlogs from "@/components/Blogs";
import BookMansionSection from "@/components/BookMansionSection";
import FeaturesSection from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InquiryForm from "@/components/InquiryForm";
import MansionSlider from "@/components/MansionSilder";
import Navbar from "@/components/Navbar";
import PoliciesSection from "@/components/Policies";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import { mansions } from "@/data/mansion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TotalMax Homes - Luxury Vacation Rentals in Las Vegas",
  description: "Welcome to TotalMax Homes! Discover the world's best luxury vacation rentals in Las Vegas with TotalMax Homes' \"Las Hawaii\" mansions.",
  openGraph: {
    title: "TotalMax Homes - Luxury Vacation Rentals in Las Vegas",
    description: "Welcome to TotalMax Homes! Discover the world's best luxury vacation rentals in Las Vegas with TotalMax Homes' \"Las Hawaii\" mansions.",
    url: "https://www.totalmaxhomes.com",
    siteName: "TotalMax Homes",
    images: [
      {
        url: "https://www.totalmaxhomes.com/hero-image-luxury-vacation-rentals-las-vegas.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury vacation rentals in Las Vegas with TotalMax Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
