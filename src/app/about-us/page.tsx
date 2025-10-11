import MansionSlider from '@/components/MansionSilder'
import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { mansions } from '@/data/mansion'

function About() {
    return (
        <>
            <Navbar />
            <section
                className="relative w-full h-[350px] flex items-center justify-center py-16 md:py-24 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/Ultimate-Utopia-Main.jpg')",
                }}
            >
                {/* Background overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-medium tracking-widest">
                        ABOUT US
                    </h1>
                </div>
            </section>
            <section className=" w-full bg-[url('/bg5.jpg')] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 lg:px-14">
                <div className=' max-w-7xl flex flex-col xl:flex-row items-center justify-between gap-8 mx-auto'>
                    {/* Left Side Image */}
                    <div className="w-full xl:w-[38%] flex justify-center">
                        <Image
                            src="/2858-Red-Rock-St-Las-Vegas-NV-print-106-114-Guest-House-Master-Bedroom-2700x1800-300dpi-scaled.jpg"
                            alt="TotalMax Homes Bedroom"
                            className="shadow-lg object-cover w-full h-[400px] md:h-[500px]"
                            width={500}
                            height={400}
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="w-full xl:w-3/5 space-y-6 pl-0 xl:pl-10 mt-10 md:mt-0">
                        {/* Small Heading */}
                        <h5 className="text-[#c19b77] tracking-widest text-sm font-semibold">
                            About
                        </h5>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl font-medium text-[#1C1C1C]">
                            WHO WE ARE
                        </h1>

                        {/* Paragraph */}
                        <p className="text-[#636363] tracking-wider leading-7 text-base">
                            TotalMax Homes is a unique company dedicated to providing the best
                            Las Vegas Total Solution packages in the industry. We are recognized
                            as a leading pioneer in the Medium-Term Rental (MTR) sector, due to
                            our innovative TVS (Total Vegas Solution). We are committed to
                            ensuring that every facet of our clients’ Vegas experiences is high
                            quality and ultra-fine. Despite our high luxury and large capacity
                            offers, we strive for and achieve the best experience for our targeted
                            clients with regard to value and cost per person. Improving our
                            clients’ total value in relation to their Total Vegas Solution Value
                            Chain Benefits is what we focus on working on and improving on. Our
                            targets have been set high and right, so that we continuously improve,
                            achieve, and attain higher and higher value offers for our clients in
                            the present and the future, through our total solution value chain.
                        </p>

                        {/* Button */}
                        <div>
                            <a
                                href="/contact-us"
                                className="inline-block bg-[#c19b77] hover:bg-[#b08968] text-white font-semibold text-sm px-8 py-3  shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>
                <section className="w-full mt-8 xl:-mt-72 flex flex-col md:flex-row items-center justify-center">

                    {/* Center Column */}
                    <div className="w-full py-6 bg-[#c19b77] xl:w-2/12 flex flex-col items-center text-center">
                        {/* Icon Image */}
                        <Image
                            src="/icon-13.png"
                            alt="Luxury Suites Icon"
                            className="w-14 h-14 mb-4 object-contain"
                            width={56}
                            height={56}
                        />

                        {/* Counter Section */}
                        <div>
                            <div className="text-6xl font-medium text-white leading-none">
                                16<span className="text-white font-extralight text-[60px] align-top">+</span>
                            </div>
                            <p className="font-semibold text-white tracking-wider mt-2">
                                LUXURY SUITES
                            </p>
                        </div>
                    </div>

                    {/* Right Empty Column */}
                    <div className="hidden md:flex xl:w-1/3"></div>
                </section>

            </section>
            <section className="w-full bg-white py-12 md:py-24">
                <div className='max-w-7xl mx-auto'>
                    <MansionSlider mansions={mansions} />
                </div>
                <section
                    className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-10 py-16 px-6 md:px-16 bg-[url('/bg5.jpg')] bg-cover bg-center bg-no-repeat"
                >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-white/5"></div>

                    {/* Left Column - VISION */}
                    <div className='relative z-10'>
                        <h1 className="text-5xl font-medium text-[#1C1C1C] mb-4">VISION</h1>
                        <p className="text-[#636363] tracking-widest leading-relaxed text-sm">
                            Las Vegas is the #1 exhibition and conference destination globally, not to mention one of the world’s best entertainment destinations. Visitors come to Vegas for Fun, Excitement, and Business, and experience all of that in the uniquely Vegas spirit. TotalMax Homes is recognized in the market as a leading provider in total solutions to clients coming to Las Vegas. We strive to excite, pamper, and inspire our clients, never forgetting the overall cost per person per day. With our unique and innovative Total Vegas Solution (TVS), we are dedicated to offer and attain the best combination of experiences for all of our wonderful clients, all at reasonable costs. We at TotalMax Home aim to always excite, inspire, and entertain our guests from all over the world.
                        </p>
                    </div>

                    {/* Right Column - MISSION */}
                    <div className='relative z-10'>
                        <h1 className="text-5xl font-medium text-[#1C1C1C] mb-4">MISSION</h1>
                        <p className="text-[#636363] tracking-widest leading-relaxed text-sm mb-4">
                            TotalMax Homes is a leading entertainment real estate company focused on total solutions and dedicated to providing the ideal experience/value/cost combinations to our clients in Las Vegas, the entertainment and exhibition capital of the world.
                        </p>
                        <p className="text-[#636363] tracking-widest leading-relaxed text-sm">
                            Working together with our strategic value partners and our well-trained, dedicated, and carefully selected team members, we strive to continue pioneering and improving our Total Vegas Solution (TVS) to provide world travelers with the best Las Vegas experiences.
                        </p>
                    </div>
                </section>
                {/* FIXED IMAGE SECTION */}
                <section
                    className="relative max-w-full w-full h-[90vh] bg-fixed bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('/Pool-scaled.jpg')",
                    }}
                >
                    {/* Optional overlay for dimming */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </section>

                <section
                    className="max-w-7xl mx-auto relative py-16 px-6 md:px-16 bg-[url('/bg5.jpg')] bg-cover bg-center bg-no-repeat"
                >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-white/40"></div>

                    <div className='relative z-10'>
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl font-medium text-center text-[#1C1C1C] mb-12">
                            OUR CORE VALUES
                        </h1>

                        {/* Two Column Section 1 */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Left */}
                            <div>
                                <h2 className="text-2xl font-medium mb-4 text-[#1C1C1C] tracking-wide">
                                    Total Solution on the Complete Value Chain
                                </h2>
                                <p className="text-[#636363] text-sm tracking-wider leading-6 mb-4">
                                    Las Vegas remains a unique experience in all clients’ minds as time goes by. The reaction to the word “Vegas,” is a certain excitement passing through, meaning Fun, Fun, Fun, alongside all the conferences and exhibitions that make Vegas the number one destination in the world.
                                </p>
                                <p className="text-[#636363] text-sm tracking-wider leading-6 mb-4">
                                    What Total Solution means for a Vegas trip is: Luxurious yet affordable accommodations; fun under the sun with pools and beaches, even within a desert setting; amazing food in abundance; proximity to The Strip and 24-hour excitement, especially at night; nightclubbing with discos and singing well into the wee hours of the morning; easy access to all exhibition venues and great conference/meeting facilities at the place of stay; and much, much more, all providing great value and within a manageable budget and overall cost compared to other destinations.
                                </p>
                                <p className="text-[#636363] text-sm tracking-wider leading-6 mb-4">
                                    At TotalMax Homes, we recognize the uniqueness of Vegas experiences and all the high expectations our potential guests possess.
                                </p>
                                <p className="text-[#636363] text-sm tracking-wider leading-6">
                                    Based on all the stated facts and beliefs, we have innovated and built our TVS solution-based facilities and services, together with our strategic partners up and down the value chain, in order to offer the absolute best living, moving, eating, and entertainment packages to our clients. Not only is this the best that money can buy, but we are proud to say that we have the best total per person, per day value in the fun capital of the world.
                                </p>
                            </div>

                            {/* Right */}
                            <div>
                                <h2 className="text-2xl font-medium mb-4 text-[#1C1C1C] tracking-wide">
                                    Teamwork—internally and externally; up and down the total values chain
                                </h2>
                                <p className="text-[#636363] text-sm tracking-wider leading-6 mb-4">
                                    Learning from the best practices of great companies this world over, we gain a deep understanding that, from a customer’s perspective, whether the experience is good or not, is not just based on performance; rather, it is based on the overall experiences of a customer in a particular establishment. That is why we follow the precedence of the best companies in our field, to learn and improve on what we can provide to our clients.
                                </p>
                                <p className="text-[#636363] text-sm tracking-wider leading-6 mb-4">
                                    We dedicate to find the best total solution partners—and train together with them—so that together with our suppliers and vendors; our property management company; our guest star chefs, transportation companies, and many other value-added partners—we continue to learn and improve the customer’s overall Vegas experience with each passing day.
                                </p>
                                <p className="text-[#636363] text-sm tracking-wider leading-6">
                                    We strive to provide the best total solution for our guests that is beyond satisfactory; for us, “satisfactory” is mediocrity. We aim for the best overall experience possible, together with a great deal of value for the customer’s Vegas trips in years to come.
                                </p>
                            </div>
                        </div>

                        {/* Two Column Section 2 */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Left */}
                            <div>
                                <h2 className="text-2xl font-medium mb-4 text-[#1C1C1C] tracking-wide">Learn from the BEST</h2>
                                <p className="text-[#636363] text-sm tracking-wider leading-6">
                                    Benchmarking the best business practices is but a means to our goal at TotalMax Homes. We aim to innovate the way businesses are conducted by learning from all successful companies. We recognize that we are still far from the world’s leading customer providers; we continue to observe, learn, benchmark and introduce best business practices from the great companies; we strive for excellence in everything we do. Nonetheless, we do understand that it is our customers and investors that can judge us best in our overall performance.
                                </p>
                            </div>

                            {/* Right */}
                            <div>
                                <h2 className="text-2xl font-medium mb-4 text-[#1C1C1C] tracking-wide">Integrity and Responsibility</h2>
                                <p className="text-[#636363] text-sm tracking-wider leading-6">
                                    We hold integrity at the highest regard. Our client’s values, and our reputation as a total solutions provider, are always ahead of our own profit. We strive for the perfect balance between customer values, team member values, and investor values. We believe in the proper training, organization and empowerment of our team members in order to provide the best possible solutions for our client’s stays in Vegas, as well as best ourselves with each client, regular or newcomers alike. The overall satisfaction of our customers will ultimately provide satisfaction to our investors, as well. As a company, this is what we work for, and continue to improve, without pause.
                                </p>
                            </div>
                        </div>

                        {/* Center Section with Button */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-medium mb-4 text-[#1C1C1C] tracking-wide">
                                Excellence in providing the best customer values
                            </h2>
                            <p className="text-[#636363] text-sm tracking-wider leading-6 mb-8">
                                From luxury living, fine food, entertainment and transportation; to providing conferencing facilities, meeting rooms, partying facilities and special event locations, we work tirelessly to visualize, organize and achieve the best total solutions possible—all within the best possible cost, along with our sister company, Total Vegas Solution (TVS). We are not just aiming to meet customer demands; we are here to visualize and provide what the customers love, and to think of countless other ways to provide only the best customer experience in this unique Vegas platform.
                            </p>

                            <a
                                href="/contact-us"
                                className="inline-block bg-[#C19B77] text-white font-bold py-3 px-8 text-sm"
                            >
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </section>
            </section >
            <section className="w-full bg-[#C19B77] py-16 px-4 md:px-16">
                <div className='max-w-7xl mx-auto text-center text-white'>
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-medium tracking-wide mb-6">
                        Rental Disclaimer
                    </h1>

                    {/* Paragraph */}
                    <p className=" text-sm tracking-wide md:text-lg leading-relaxed">
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

export default About