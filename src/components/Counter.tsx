"use client";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  title: string;
  value: string;
  suffix?: string;
}

export const Counter = ({ title, value, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);

          if (!isIntersecting && timerRef.current) {
            // Pause animation when out of view
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hasCompleted) return;
    
    const end = parseInt(value);
    if (count >= end) {
      setHasCompleted(true);
      return;
    }

    // const remainingSteps = end - count; // Not needed for current logic
    const duration = 500; // 2 seconds total
    const stepTime = Math.abs(Math.floor(duration / end));

    timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        if (nextCount >= end) {
          setHasCompleted(true);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return end;
        }
        return nextCount;
      });
    }, stepTime);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [value, isVisible, count, hasCompleted]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center">
      <h3 className="text-4xl text-white transition-all duration-300 ease-out">
        {count}
        {suffix}
      </h3>
      <p className="text-xs font-light text-white tracking-widest mt-2">{title}</p>
    </div>
  );
};

export default function CounterSection() {
  return (
    <section
      className="relative z-10 w-[700px] py-10 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('/bg-2.jpg')",
      }}
    >

      {/* <div className="absolute inset-0 bg-black/60"></div> */}
      <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
        <Counter title="MANSIONS" value="6" />
        <Counter title="LUXURY SUITES" value="16" suffix="+" />
        <Counter title="SQUARE FEET" value="40" suffix="k+" />
        <Counter title="EXCLUSIVE VILLAS" value="10" />
      </div>
    </section>
  );
}
