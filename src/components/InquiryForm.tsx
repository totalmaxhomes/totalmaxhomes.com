'use client';

import React, { useState, useEffect, useRef } from 'react';
import MathCaptcha from './MathCaptcha';

const ContactForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    mansion: '',
    fullName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    guests: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextPage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget.closest('form') as HTMLFormElement;
    if (form.checkValidity()) {
      setCurrentPage(2);
    } else {
      form.reportValidity();
    }
  };

  const handlePreviousPage = () => setCurrentPage(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      alert('Please solve the math captcha correctly.');
      return;
    }
    const form = e.currentTarget as HTMLFormElement;
    if (form.checkValidity()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setFormData({
            mansion: '',
            fullName: '',
            email: '',
            phone: '',
            checkInDate: '',
            checkOutDate: '',
            guests: ''
          });
          setCurrentPage(1);
          setShowThankYou(true);
          setIsCaptchaValid(false);
          setTimeout(() => setShowThankYou(false), 10000);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      form.reportValidity();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50 && currentPage === 2) {
      setCurrentPage(1);
    }
    setTouchStartX(null);
  };

  return (
    <>
      <div
        ref={sectionRef}
        className={`bg-white w-full py-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto bg-[#373737] rounded-lg shadow-sm px-6 py-8 my-10" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {/* Progress Bar */}
          <div className="mb-6">
            <p className="text-sm text-white mb-2">
              Step <span className="font-medium">{currentPage}</span> of 2
            </p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-[#C19B77] h-2.5 rounded-full transition-all duration-300"
                style={{ width: currentPage === 1 ? '50%' : '100%' }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Page 1 */}
            {currentPage === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Mansion */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Choose Mansion <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="mansion"
                      value={formData.mansion}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    >
                      <option value="">Select</option>
                      <option value="Dreams & Desires Mansion">Dreams & Desires Mansion</option>
                      <option value="Oasis Oakey Mansion">Oasis Oakey Mansion</option>
                      <option value="Retreat of Revelation Mansion">Retreat of Revelation Mansion</option>
                      <option value="Enchanted Elegant Mansion">Enchanted Elegant Mansion</option>
                      <option value="Celestial Mansion Club">Celestial Mansion Club</option>
                      <option value="Ultimate Utopia Mansion">Ultimate Utopia Mansion</option>
                    </select>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 bg-white py-2 border border-gray-500 rounded-md text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    onClick={handleNextPage}
                    className="px-6 py-2 bg-[#C19B77] text-white font-semibold rounded-md hover:bg-[#b08968] transition"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            )}

            {/* Page 2 */}
            {currentPage === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Check-out Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      required
                      min={formData.checkInDate || undefined}
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Check-in Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      required
                      max={formData.checkOutDate || undefined}
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      Guests <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="100"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-500 rounded-md bg-white text-[#373737] focus:outline-none focus:ring-[#C19B77] focus:border-[#C19B77]"
                    />
                    <p className="text-xs text-white">
                      Please enter a number between <strong>1</strong> and <strong>100</strong>.
                    </p>
                  </div>
                </div>

                {/* Math Captcha */}
                <MathCaptcha onValidate={setIsCaptchaValid} />

                <div className="flex justify-center gap-4 ">
                  <button
                    type="button"
                    onClick={handlePreviousPage}
                    className="px-6 py-2 bg-white cursor-pointer text-[#373737] font-medium rounded-md transition"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#C19B77] cursor-pointer text-white font-semibold rounded-md hover:bg-[#b08968] transition"
                  >
                    Inquire Availability
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        {showThankYou && (
          <div className="max-w-5xl mx-auto mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            Thank you for your inquiry. We will inform you via email about the availability.
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
