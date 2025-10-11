'use client';
import { useEffect, useState } from 'react';

interface Counter {
  title: string;
  value: number;
  suffix?: string;
}

interface MansionCountersProps {
  counters: Counter[];
  backgroundImage: string; // Outer section background
  barImage: string;        // Inner bar background image
}

export default function MansionCounters({
  counters,
  backgroundImage,
  barImage,
}: MansionCountersProps) {
  const [counts, setCounts] = useState(counters.map(() => 0));

  // Count-up animation
  useEffect(() => {
    const intervals = counters.map((counter, i) => {
      const duration = 1200;
      const stepTime = 20;
      const steps = duration / stepTime;
      let current = 0;
      const increment = counter.value / steps;

      return setInterval(() => {
        current += increment;
        if (current >= counter.value) {
          current = counter.value;
          clearInterval(intervals[i]);
        }
        setCounts(prev =>
          prev.map((val, idx) => (idx === i ? Math.floor(current) : val))
        );
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [counters]);

  return (
    <section
      className="relative w-full py-16 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Counter Container with inner background image */}
      <div
        className="
          relative z-10
          w-full xl:max-w-5xl
          py-10 px-4
          rounded-sm shadow-lg
          flex flex-col sm:flex-row justify-around items-center text-center
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${barImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay on top of bar image */}
        <div className="absolute inset-0 bg-[#373737]/95"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row justify-around items-center text-center">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mb-6 sm:mb-0"
            >
              <p className="text-5xl sm:text-6xl font-bold text-white">
                {counts[index].toLocaleString()} <span className='text-sm'>{counter?.suffix}</span>
              </p>
              <p className="uppercase tracking-widest text-[#C19B77] text-sm mt-2">
                {counter.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
