import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions - TotalMax Homes',
  description: 'Discover TotalMax Homes solutions for filming, event hosting, and luxury accommodations in Las Vegas. Perfect for conventions, exhibitions, and special events.',
}

function Solutions() {
    return (
        <>
            <Navbar />
            <section
                className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat py-24"
                style={{
                    backgroundImage:
                        "url('/6425-Darby-Ave-Las-Vegas-NV-print-098-66-Exterior-Hot-Tub-2700x1800-300dpi-1-scaled.jpg')",
                }}
            >
                {/* Overlay (optional for dimming) */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 mt-8 flex flex-col items-center justify-center text-center px-6 md:px-12">
                    <h1 className="text-white text-5xl md:text-6xl font-medium tracking-wide">
                        Solutions
                    </h1>
                </div>
            </section>
            <section className='w-full py-16 px-4 md:px-8 lg:px-16 bg-white'>
                <section
                    id="FilmingReqs"
                    className="border my-8 shadow-2xl max-w-7xl bg-cover bg-center bg-no-repeat relative px-4 md:px-6 lg:px-12 py-8"
                    style={{
                        backgroundImage:
                            "url('/background-5-luxury-mansion-las-vegas.jpg')",
                    }}
                >
                    <div className="bg-white/5 absolute inset-0"></div> {/* overlay */}
                    <div className="relative z-10 text-[#1c1c1c]">
                        {/* Heading 1 */}
                        <h1 className="text-4xl font-medium tracking-wide mb-4">
                            Governmental Site for Filming Requirements and Guidelines
                        </h1>

                        {/* Nevada Film */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">Nevada Film</h1>
                            <p className="text-base tracking-widest text-[#636363]">
                                Governmental office for filming movies/TV shows permits
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="https://www.nevadafilm.com/permit-info/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>

                        {/* KFTV */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">KFTV</h1>
                            <p className="text-base tracking-widest text-[#636363]">
                                Filming production guide in Vegas
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="http://www.kftv.com/country/usa/guide/production-guide/nevada"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>

                        {/* Nevada Film Incentive */}
                        <div>
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">
                                Nevada Film Incentive
                            </h1>
                            <p className="text-base tracking-widest text-[#636363]">
                                Provide information regarding the Incentives by States from Filming
                                productions
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="http://www.nevadafilmincentive.com/bginfo.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    id="PromotingLocations"
                    className="border my-8 shadow-2xl max-w-7xl bg-cover bg-center bg-no-repeat relative px-4 md:px-6 lg:px-12 py-8"
                    style={{
                        backgroundImage:
                            "url('/background-5-luxury-mansion-las-vegas.jpg')",
                    }}
                >
                    <div className="bg-white/5 absolute inset-0"></div> {/* overlay */}
                    <div className="relative z-10 text-[#1c1c1c]">
                        {/* Heading */}
                        <h1 className="text-4xl font-medium tracking-wide mb-4">
                            Promoting Locations
                        </h1>

                        {/* California Film Commission */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">
                                California Film Commission
                            </h1>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Provide you sites where to promote your property for rent to film production companies
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>

                        {/* All Pictures Media */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">
                                All Pictures Media
                            </h1>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Promote locations to rent by filming companies
                            </p>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Contact details: <strong>support@allpicturesmedia.com</strong>
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>

                        {/* Plan It Locations */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">
                                Plan It Locations
                            </h1>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Promote locations to rent by filming companies
                            </p>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Contact details: <strong>Ron@PlanItLocations.com</strong>
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>

                        {/* Image Locations, Inc. */}
                        <div>
                            <h1 className="text-2xl font-semibold tracking-wide mb-4">
                                Image Locations, Inc.
                            </h1>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Promote locations to rent by filming companies
                            </p>
                            <p className="text-base tracking-widest text-[#636363] mb-2">
                                Contact details: <strong>Carrie@imagelocations.com</strong>
                            </p>
                            <p>
                                <strong>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-[#636363]"
                                    >
                                        View website
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    id="WorldWide"
                    className="border my-8 shadow-2xl max-w-7xl bg-cover bg-center bg-no-repeat relative px-4 md:px-6 lg:px-12 py-8"
                    style={{
                        backgroundImage:
                            "url('/background-5-luxury-mansion-las-vegas.jpg')",
                    }}
                >
                    <div className="bg-white/5 absolute inset-0"></div> {/* overlay */}
                    <div className="relative z-10 text-[#1c1c1c]">
                        {/* Heading */}
                        <h1 className="text-4xl font-medium tracking-wide mb-4">
                            Biggest Event Worldwide Held in Vegas
                        </h1>

                        {/* Big Events */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold tracking-wide mb-4">Big Events:</h2>
                            <p className="text-base tracking-widest text-[#636363]">
                                World Series of Poker Finals (WSOP), Consumer Electronic Show (CES),
                                Electric Music Festival (EMF), Super Bowl, NAS Car Week, NBA Summer League
                            </p>
                        </div>

                        {/* Conventions */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold tracking-wide mb-4">Conventions:</h2>

                            {/* CES */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    Consumer Electronic Show (CES)
                                </h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> January<br />
                                    Launching point for the new electronic gadgets and products<br />
                                    <strong>No. of Attendees:</strong> Occupy 2.4 million square feet with 3,600 companies
                                </p>
                            </div>

                            {/* World of Concrete */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">World of Concrete</h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> February<br />
                                    Showcase the newest in the commercial construction innovations<br />
                                    <strong>No. of Attendees:</strong> Holding more than 18,000 companies and 60,000 attendees
                                </p>
                            </div>

                            {/* MAGIC */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    Men&apos;s Apparel Guild of California (MAGIC)
                                </h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> February<br />
                                    Offer a preview of the season&apos;s fashion offerings<br />
                                    <strong>No. of Attendees:</strong> Offering more than 85,000 attendees
                                </p>
                            </div>

                            {/* NAB */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    National Association of Broadcasters (NAB)
                                </h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    Largest event covering filmed entertainment<br />
                                    <strong>No. of Attendees:</strong> Brings more than 100,000 attendees
                                </p>
                            </div>

                            {/* JCK Trade Show */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">JCK Trade Show</h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> June<br />
                                    Jewelry industry’s premiere trade show<br />
                                    <strong>No. of Attendees:</strong> Brings about 40,000 people
                                </p>
                            </div>

                            {/* G2E */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    G2E &quot;Global Gaming Expo&quot;
                                </h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> September<br />
                                    To introduce new casino gaming machines equipped with the newest themes
                                </p>
                            </div>

                            {/* NFR */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    NFR &quot;National Finals Rodeo&quot;
                                </h3>
                                <p className="text-base tracking-widest text-[#636363]">
                                    <strong>Date:</strong> December<br />
                                    Host events such as Bareback riding, Steer Wrestling and Team Roping<br />
                                    <strong>No. of Attendees:</strong> Brings more than 175,000 spectators; estimated
                                    300,000 people that will pick Vegas to witness the event
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section
                className="w-full bg-cover bg-center bg-no-repeat py-8 px-4 md:px-16 relative"
                style={{
                    backgroundImage:
                        "url('/parallax-3.jpg')",
                }}
            >
                {/* Optional dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="max-w-5xl mx-auto text-center text-white relative z-10">
                    {/* Heading */}
                    <h1 className="text-xl font-medium tracking-wide mb-4">
                        Rental Disclaimer
                    </h1>

                    {/* Paragraph */}
                    <p className="text-xs tracking-wide md:text-sm leading-relaxed">
                        All rentals will need to be 32+ days to 6 months (MTR). Other Clark
                        County ordinances on noise level, public parking, etc. are also
                        required to be observed. For details please refer to our Property
                        Rental Agreement.
                    </p>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default Solutions