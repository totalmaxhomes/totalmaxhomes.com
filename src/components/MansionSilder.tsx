'use client';

import { Mansion } from '@/types/mansion';
import React, { useState, useEffect, useRef } from 'react';

const MansionSlider: React.FC<{ mansions: Mansion[] }> = ({ mansions }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRefMd = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDraggingMd, setIsDraggingMd] = useState(false);
  const [startXMd, setStartXMd] = useState(0);
  const [scrollLeftStartMd, setScrollLeftStartMd] = useState(0);
  const [scrollPositionMd, setScrollPositionMd] = useState(0);

  const itemWidth = 610;
  const visibleItems = 3;
  const scrollStep = itemWidth;
  const autoScrollInterval = 3000;

  // Group mansions into slides of 4
  const slides: Mansion[][] = [];
  for (let i = 0; i < mansions.length; i += 4) {
    slides.push(mansions.slice(i, i + 4));
  }

  // Set slide width after mount
  useEffect(() => {
    if (containerRef.current) {
      slideWidthRef.current = containerRef.current.clientWidth;
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && containerRef.current && slideWidthRef.current > 0) {
        setScrollPosition(prev => {
          const newPos = prev + slideWidthRef.current;
          if (newPos >= slides.length * slideWidthRef.current) {
            return 0;
          }
          return newPos;
        });
      }
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isDragging, slides.length]);

  // Update scrollLeft when scrollPosition changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Auto-scroll for md+
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDraggingMd && containerRefMd.current) {
        setScrollPositionMd(prev => {
          const newPos = prev + scrollStep;
          if (newPos >= containerRefMd.current!.scrollWidth - containerRefMd.current!.clientWidth) {
            return 0;
          }
          return newPos;
        });
      }
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isDraggingMd]);

  // Update scrollLeft for md when scrollPositionMd changes
  useEffect(() => {
    if (containerRefMd.current) {
      containerRefMd.current.scrollLeft = scrollPositionMd;
    }
  }, [scrollPositionMd]);

  // Drag functionality for sm
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeftStart(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeftStart - walk;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeftStart(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeftStart - walk;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Drag functionality for md
  const handleMouseDownMd = (e: React.MouseEvent) => {
    setIsDraggingMd(true);
    setStartXMd(e.pageX - (containerRefMd.current?.offsetLeft || 0));
    setScrollLeftStartMd(containerRefMd.current?.scrollLeft || 0);
  };

  const handleMouseMoveMd = (e: React.MouseEvent) => {
    if (!isDraggingMd) return;
    e.preventDefault();
    const x = e.pageX - (containerRefMd.current?.offsetLeft || 0);
    const walk = (x - startXMd) * 1.5;
    if (containerRefMd.current) {
      containerRefMd.current.scrollLeft = scrollLeftStartMd - walk;
      setScrollPositionMd(containerRefMd.current.scrollLeft);
    }
  };

  const handleMouseUpMd = () => {
    setIsDraggingMd(false);
  };

  const handleTouchStartMd = (e: React.TouchEvent) => {
    setIsDraggingMd(true);
    setStartXMd(e.touches[0].pageX - (containerRefMd.current?.offsetLeft || 0));
    setScrollLeftStartMd(containerRefMd.current?.scrollLeft || 0);
  };

  const handleTouchMoveMd = (e: React.TouchEvent) => {
    if (!isDraggingMd) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (containerRefMd.current?.offsetLeft || 0);
    const walk = (x - startXMd) * 1.5;
    if (containerRefMd.current) {
      containerRefMd.current.scrollLeft = scrollLeftStartMd - walk;
      setScrollPositionMd(containerRefMd.current.scrollLeft);
    }
  };

  const handleTouchEndMd = () => {
    setIsDraggingMd(false);
  };

  return (
    <div>
      <div className="md:hidden lg:hidden xl:hidden">
        <div
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory bg-white rounded-md shadow-md"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full snap-center grid grid-cols-2 grid-rows-2 gap-2 p-2">
              {slide.map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-48 flex items-center justify-center bg-cover bg-center rounded-md `}
                  style={item.type === 'image' ? { backgroundImage: `url(${item.url})` } : {}}
                >
                  {item.type === 'text' && (
                    <div
                      className="w-full h-full flex items-center justify-center bg-cover bg-center rounded-md relative overflow-hidden"
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : 'none',
                      }}
                    >
                      <div className="max-w-full text-white text-center space-y-2">
                        <h3 className="font-['Playfair_Display'] text-xs font-semibold leading-tight mb-3">
                          {item.title}
                        </h3>
                        <p className="font-['Roboto'] w-44 text-center text-[8px] font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <div
          className="grid-container draggable bg-white overflow-x-hidden bg-cover bg-center rounded-md sm:rounded-lg shadow-md"
          ref={containerRefMd}
          onMouseDown={handleMouseDownMd}
          onMouseMove={handleMouseMoveMd}
          onMouseUp={handleMouseUpMd}
          onMouseLeave={handleMouseUpMd}
          onTouchStart={handleTouchStartMd}
          onTouchMove={handleTouchMoveMd}
          onTouchEnd={handleTouchEndMd}
        >
          {mansions.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-full grid-item `}
              style={item.type === 'image' ? { backgroundImage: `url(${item.url})` } : {}}
            >
              {item.type === 'text' && (
                <div
                  className="w-full h-full flex items-center justify-center bg-cover bg-center rounded-md relative overflow-hidden"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : 'none',
                  }}
                >
                  <div className="relative z-10 max-w-full text-white text-center space-y-2">
                    <h3 className="font-['Playfair_Display'] text-xl lg:text-4xl font-semibold leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="font-['Roboto']  w-3/4 mx-auto text-base lg:text-xl font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              )}


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MansionSlider;