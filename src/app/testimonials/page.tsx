'use client';

import { useState } from 'react';
import Image from 'next/image';
import testimonialsData from '@/data/testimonials.json';
import MansionHeader from '@/components/MansionHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MathCaptcha from '@/components/MathCaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  content: string;
  name: string;
  job: string;
  image?: string;
}

interface RawTestimonial {
  text: string;
  author: string;
  role: string;
  image?: string;
}

interface Tab {
  id: string;
  title: string;
  icon: string;
  testimonials: Testimonial[];
}

// Transform the imported data to match the expected structure
const transformedTestimonialsData: Tab[] = Object.entries(testimonialsData).map(
  ([key, testimonials]) => ({
    id: key,
    title: key.toUpperCase().replace('&', '&'),
    icon: 'fas fa-home',
    testimonials: (testimonials as RawTestimonial[]).map((testimonial) => ({
      content: testimonial.text,
      name: testimonial.author,
      job: testimonial.role,
      image: testimonial.image || undefined,
    })),
  })
);

export default function TestimonialsPage() {
   const [activeTab, setActiveTab] = useState(transformedTestimonialsData[0]?.id || '');
   const [formData, setFormData] = useState({
     name: '',
     mansion: 'D&D Mansion',
     testimony: '',
   });
   const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      alert('Please solve the math captcha correctly.');
      return;
    }
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your testimonial!');
        setFormData({
          name: '',
          mansion: 'D&D Mansion',
          testimony: '',
        });
        setIsCaptchaValid(false);
      } else {
        alert('Failed to submit testimonial. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Network error. Please try again.');
    }
  };

  const currentTab = transformedTestimonialsData.find((tab) => tab.id === activeTab);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <MansionHeader
          title="Testimonials"
          backgroundImage="/Testimonial.jpg"
        />

        {/* Submit Testimonial Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/bg5.jpg')",
          }}
        >
          <div className="relative py-20 text-center text-black">
            <h1 className="text-4xl font-bold">Submit Your Testimonial</h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6">
                {/* Full Name */}
                <div className="md:w-3/5 w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full Name"
                  />
                </div>

                {/* Mansion */}
                <div className="md:w-2/5 w-full mt-4 md:mt-0">
                  <label htmlFor="mansion" className="block text-sm font-medium text-black mb-1">
                    Testimonial for:
                  </label>
                  <select
                    id="mansion"
                    name="mansion"
                    value={formData.mansion}
                    onChange={handleFormChange}
                    className="w-full px-4 text-black py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="D&D Mansion">D&D Mansion</option>
                    <option value="O&O Mansion">O&O Mansion</option>
                    <option value="R&R Mansion">R&R Mansion</option>
                    <option value="E&E Mansion">E&E Mansion</option>
                    <option value="C&C Mansion">C&C Mansion</option>
                    <option value="U&U Mansion">U&U Mansion</option>
                    <option value="Y&Y Mansion">Y&Y Mansion</option>
                  </select>
                </div>
              </div>

              {/* Testimony */}
              <div>
                <label htmlFor="testimony" className="block text-sm font-medium text-gray-700 mb-1">
                  Testimony
                </label>
                <textarea
                  id="testimony"
                  name="testimony"
                  value={formData.testimony}
                  onChange={handleFormChange}
                  rows={8}
                  className="w-full px-4 py-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your experience..."
                ></textarea>
              </div>

              {/* Math Captcha */}
              <MathCaptcha onValidate={setIsCaptchaValid} />

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-[#C19B77] text-white font-medium py-3 px-10 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Tabs Section */}
        <section
          className="relative pt-20 pb-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/bg5.jpg')",
            backgroundPosition: 'center center',
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
          }}
        >
          {/* Tabs */}
          <section className="w-full py-10 bg-transparent">
            <div className="max-w-5xl mx-auto px-4">
              <ul role="tablist" className="flex justify-center items-center gap-4 flex-wrap">
                {transformedTestimonialsData.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <li
                      key={tab.id}
                      className={`group flex items-center justify-center gap-2 cursor-pointer py-3 px-6 min-w-[150px] font-medium text-base transition-all duration-300 border
                        ${isActive
                          ? 'bg-[#C19B77] border-[#C19B77]'
                          : 'bg-[#f1f1f1] border-gray-300 hover:bg-[#C19B77]'
                        }`}
                      onClick={() => handleTabChange(tab.id)}
                    >
                      <FontAwesomeIcon
                        icon={faHome}
                        className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}
                      />
                      <span
                        className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}
                      >
                        {tab.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* Tab Content */}
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mt-20">
              {currentTab && (
                <div className="columns-1 md:columns-2 space-y-8 mt-10 gap-8">
                  {currentTab.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-transparent p-6 border border-black rounded-lg shadow-md flex flex-col break-inside-avoid mb-8"
                      style={{ breakInside: 'avoid' }}
                    >
                      <div className="text-lg italic mb-4 text-[#636363] leading-relaxed">
                        {testimonial.content}
                      </div>
                      <div className="flex items-center mt-4">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full mr-4 object-cover flex-shrink-0"
                          />
                        )}
                        <div>
                          <div className="font-bold text-[#C19B77]">{testimonial.name}</div>
                          <div className="text-[#636363] text-sm">{testimonial.job}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
