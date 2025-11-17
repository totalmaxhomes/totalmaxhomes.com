// app/contact/page.tsx
'use client';
import { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MathCaptcha from '@/components/MathCaptcha';
import Image from 'next/image';
const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isCaptchaValid) {
            alert('Please solve the math captcha correctly.');
            return;
        }
        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            console.log('Form submission result:', result);
            if (result.error) {
                console.log('Form submission error:', result.error);
                alert(`Error: ${result.error}`);
            } else {
                setIsSubmitted(true);
                formRef.current?.reset();
                setIsCaptchaValid(false); // Reset captcha after successful submission
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className='bg-white text-[#636363]'>
                {/* Top Section: Contact Header */}
                <section
                    className="relative flex items-center justify-center w-full h-[350px] bg-cover bg-center bg-no-repeat py-24"
                    style={{
                        backgroundImage: "url('/Contact.jpg')",
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-white text-6xl font-medium tracking-widest">
                            Contact
                        </h1>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Get in Touch Section */}
                    <section className="relative w-full py-12 md:py-24">
                        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                        {/* <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"> */}
                            {/* Left Column: Form */}
                            <div className="px-0 md:px-8">
                                <h1 className="text-3xl text-[#1C1C1C] md:text-5xl font-medium mb-6">Get in Touch</h1>
                                {isSubmitted && (
                                    <div className="text-center py-8">
                                        <h2 className="text-2xl font-semibold text-[#1C1C1C]">Thank you for your message!</h2>
                                        <p className="text-[#636363] mt-4">We will get back to you soon.</p>
                                    </div>
                                )}
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="w-full p-3 border border-gray-300 text-sm font-light"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email Address *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            className="w-full p-3 border border-gray-300 text-sm font-light"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone Number *</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            className="w-full p-3 border border-gray-300 text-sm font-light"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Message"
                                            rows={5}
                                            className="w-full p-3 border border-gray-300 text-sm font-light"
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="consent"
                                            name="consent"
                                            type="checkbox"
                                            required
                                            className="mr-2"
                                        />
                                        <label htmlFor="consent" className="text-sm font-medium text-[#000000]">
                                            I consent to TotalMax Homes Privacy Policy. <u><a className='text-[#636363]' href="https://www.totalmaxhomes.com/privacy-policy" target="_blank">Please read first</a></u>.*
                                        </label>
                                    </div>
                                    <MathCaptcha onValidate={setIsCaptchaValid} />
                                    <button type="submit" className="px-12 text-sm text-white font-semibold tracking-widest py-3 bg-[#C19B77]">
                                        Submit
                                    </button>
                               </form>
                            </div>

                            {/* Right Column: Map and Headquarters */}
                            {/* <div className="text-sm font-light">
                                <div className="mb-6">
                                    <iframe
                                        loading="lazy"
                                        src="https://maps.google.com/maps?q=6425%20Darby%20Ave%2C%20Las%20Vegas%2C%20NV%2089146&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                                        title="6425 Darby Ave, Las Vegas, NV 89146"
                                        className="w-full h-64 md:h-80"
                                    ></iframe>
                                </div>
                                <h1 className="text-3xl text-[#1c1c1c] md:text-4xl xl:text-6xl font-medium mb-4">HEADQUARTERS</h1>
                                <div>
                                    <div className='grid grid-cols-2 py-4 border-b border-b-[#636363]'>
                                        <p className="text-xs text-[#1c1c1c] tracking-widest font-bold">ADDRESS :</p>
                                        <p className='text-sm text-[#636363] tracking-wider font-light'>6425 Darby Ave, Las Vegas, NV 89146</p>
                                    </div>
                                    <div className='grid grid-cols-2 py-4 border-b border-b-[#636363]'>
                                        <p className="text-xs text-[#1c1c1c] tracking-widest font-bold">PHONE NUMBER :</p>
                                        <p className='text-sm text-[#636363] tracking-wider font-light'>+1 702 592 6888</p>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </section>

                    {/* Mansions Sections */}
                    <section className="py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <Image
                                src="/D-D.png"
                                alt="Dreams & Desires Mansion"
                                width={580}
                                height={337}
                                className="w-full h-auto border-8 border-[#636363]"
                            />
                            <div
                                className="relative text-white py-8 px-6 text-sm font-light bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        "url('/bg-2.jpg')",
                                }}
                            >
                                {/* Overlay for better readability */}
                                <div className="absolute inset-0 bg-black/5"></div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl md:text-4xl font-medium mb-4">DREAMS & DESIRES MANSION</h1>
                                    <h1 className="text-2xl md:text-xl tracking-widest font-medium mb-4">
                                        Nearby Top Attractions:
                                    </h1>
                                    <ul className="space-y-2">
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>0.27 mi to C&C Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>0.4 mi to E&E Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>0.71 mi to R&R Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>1.57 mi to O&O Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>5.43 mi to McCarran Int’l Airport
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>4.61 mi to Las Vegas Convention Center
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div
                                className="relative text-white py-8 px-6 text-sm font-light bg-cover bg-center bg-no-repeat order-2 md:order-1"
                                style={{
                                    backgroundImage:
                                        "url('/bg-1.jpg')",
                                }}
                            >
                                {/* Overlay for better readability */}
                                <div className="absolute inset-0 bg-white/5"></div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl md:text-4xl font-medium mb-4">OASIS OAKEY MANSION</h1>
                                    <h1 className="text-2xl md:text-xl tracking-widest font-medium mb-4">
                                        Nearby Top Attractions:
                                    </h1>
                                    <ul className="space-y-2">
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            1.57 mi to D&D Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            1.35 mi to C&C Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            1.36 mi to E&E Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            0.96 mi to R&R Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            3.40 mi to Las Vegas Strip
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            6.02 mi to McCarran Int’l Airport
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            4.29 mi to Las Vegas Convention Center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Image
                                src="/O-O.webp"
                                alt="Oasis Oakey Mansion"
                                width={633}
                                height={330}
                                className="w-full h-auto border-8 border-[#636363] order-1 md:order-2"
                            />

                        </div>
                    </section>

                    <section className="py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <Image
                                src="/R-R.png"
                                alt="Retreat of Revelation"
                                width={633}
                                height={333}
                                className="w-full h-auto border-8 border-[#636363]"
                            />
                            <div
                                className="relative text-white py-8 px-6 text-sm font-light bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        "url('/bg-2.jpg')",
                                }}
                            >
                                {/* Overlay for better readability */}
                                <div className="absolute inset-0 bg-white/5"></div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl md:text-4xl font-medium mb-4">RETREAT OF REVELATION</h1>
                                    <h1 className="text-2xl md:text-xl tracking-widest font-medium mb-4">
                                        Nearby Top Attractions:
                                    </h1>
                                    <ul className="space-y-2">
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            0.71 mi to D&D Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            0.62 mi to C&C Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            0.42 mi to E&E Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            0.96 mi to O&O Mansion
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            3.07 mi to Las Vegas Strip
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            5.38 mi to McCarran Int’l Airport
                                        </li>
                                        <li className="flex text-sm font-light tracking-widest items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            4.13 mi to Las Vegas Convention Center
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div
                                className="relative bg-cover bg-center text-white px-6 py-8 text-sm font-light order-2 md:order-1"
                                style={{
                                    backgroundImage:
                                        "url('/bg-1.jpg')",
                                }}
                            >
                                {/* Dark overlay for better readability */}
                                <div className="absolute inset-0 bg-white/5"></div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl md:text-4xl font-medium mb-4">ENCHANTED ELEGANT MANSION</h1>
                                    <h1 className="text-2xl md:text-xl tracking-widest font-medium mb-4">
                                        Nearby Top Attractions:
                                    </h1>
                                    <ul className="space-y-2">
                                        {[
                                            "0.4 mi to D&D Mansion",
                                            "0.22 mi to C&C Mansion",
                                            "0.42 mi to R&R Mansion",
                                            "1.36 mi to O&O Mansion",
                                            "3.45 mi to Las Vegas Strip",
                                            "5.55 mi to McCarran Int’l Airport",
                                            "4.53 mi to Las Vegas Convention Center",
                                        ].map((text, i) => (
                                            <li
                                                key={i}
                                                className="flex text-sm font-light tracking-widest items-center"
                                            >
                                                {/* SVG map marker icon */}
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Image
                                src="/E-E.png"
                                alt="Enchanted Elegant Mansion"
                                width={629}
                                height={327}
                                className="w-full h-auto border-8 border-[#636363] order-1 md:order-2"
                            />

                        </div>
                    </section>

                    <section className="py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <Image
                                src="/C-C.png"
                                alt="Celestial Mansion Club"
                                width={636}
                                height={331}
                                className="w-full h-auto border-8 border-[#636363]"
                            />
                            <div
                                className="relative bg-cover bg-center text-white px-6 py-8 text-sm font-light"
                                style={{
                                    backgroundImage:
                                        "url('/bg-2.jpg')",
                                }}
                            >
                                {/* Dark overlay for better readability */}
                                <div className="absolute inset-0 bg-black/5"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-4xl font-medium mb-4">CELESTIAL MANSION CLUB</h1>
                                <h1 className="text-2xl md:text-xl tracking-widest font-medium mb-4">
                                    Nearby Top Attractions:
                                </h1>
                                <ul className="space-y-2">
                                    {[
                                        "0.27 mi to D & D Mansion",
                                        "0.22 mi to E & E Mansion",
                                        "0.62 mi to R & R Mansion",
                                        "1.35 mi to O & O Mansion",
                                        "3.62 mi to Las Vegas Strip",
                                        "5.66 mi to McCarran Int’l Airport",
                                        "4.71 mi to Las Vegas Convention Center",
                                    ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex text-sm font-light tracking-widest items-center"
                                    >
                                        {/* SVG map marker icon */}
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-map-pin mr-2"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        {text}
                                    </li>
                                        ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;