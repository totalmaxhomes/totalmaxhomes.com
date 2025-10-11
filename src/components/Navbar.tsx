"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next"; // ✅ Import Route for type-safe internal links
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

const NAV: NavItem[] = [
  { title: "About", href: "/about-us/" },
  {
    title: "Mansions",
    href: "/mansions/",
    children: [
      { title: "Dreams & Desires Mansion", href: "/dd/" },
      { title: "Oasis Oakey Mansion", href: "/oo/" },
      // { title: "Retreat of Revelation Mansion", href: "/rr/" },
      { title: "Enchanted Elegant Mansion", href: "/ee/" },
      { title: "Celestial Mansion Club", href: "/cc/" },
      { title: "Ultimate Utopia Mansion", href: "/uu/" },
    ],
  },
  { title: "Blogs", href: "/blogs/" },
  { title: "Testimonials", href: "/testimonials/" },
  {
    title: "Solutions",
    href: "/solutions/",
    children: [
      { title: "Event Planning and Management", href: "/solutions/" },
      {
        title: "Corporate Booking Solutions",
        href: "https://www.vegasmeansbusiness.com/destination-calendar/?e_edate=09%2F15%2F2017&e_sdate=09%2F01%2F2017&formid=2",
      },
    ],
  },
  { title: "Contact Us", href: "/contact-us/" },
];

// ✅ Helper function to detect external URLs
const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* 🔹 Navbar Section */}
      <section
        aria-label="Top header"
        className={`md:sticky md:top-0 md:z-50 ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        } transition-all duration-600`}
        style={{ transitionTimingFunction: "cubic-bezier(.2,.9,.3,1)" }}
      >
        <div
          className="bg-cover bg-center text-sm relative"
          style={{
            backgroundImage:
              "url('/bg11.jpg')",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="grid grid-cols-12 items-center py-3 gap-4 container mx-auto relative z-50">
              {/* LEFT: Logo */}
              <div className="col-span-12 lg:col-span-4 flex items-center justify-center lg:justify-start">
                <Link href={"/" as Route} aria-label="Homepage - Total Max Logo">
                  <Image
                    src="/Total-Max-Logo.png"
                    alt="Total Max Logo"
                    width={180}
                    height={35}
                    priority
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* MIDDLE: Navigation */}
              <div
                className="col-span-12 lg:col-span-4 flex items-center justify-center relative"
              >
                <nav className="hidden lg:block">
                  <ul className="flex items-center gap-6">
                    {NAV.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative animate-fade-in-up group"
                        style={{
                          animationDelay: `${idx * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {item.children ? (
                          <div className="relative">
                            {isExternal(item.href) ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-black whitespace-nowrap hover:text-gray-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <Link
                                href={item.href as Route}
                                className="text-sm text-black whitespace-nowrap hover:text-gray-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                {item.title}
                              </Link>
                            )}

                            {/* Dropdown */}
                            <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white text-gray-800 rounded shadow-lg z-[9999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                              <ul className="py-2">
                                {item.children.map((c, i) => (
                                  <li key={i}>
                                    {isExternal(c.href) ? (
                                      <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 text-sm hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {c.title}
                                      </a>
                                    ) : (
                                      <Link
                                        href={c.href as Route}
                                        className="block p-4 text-sm hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {c.title}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : isExternal(item.href) ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-black whitespace-nowrap"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <Link
                            href={item.href as Route}
                            className="text-sm text-black whitespace-nowrap"
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile hamburger */}
                <button
                  aria-label="Open menu"
                  className="lg:hidden inline-flex items-center justify-center p-2 rounded"
                  onClick={() => setSidebarOpen(true)}
                >
                  <FaBars size={20} className="text-black" />
                </button>
              </div>

              {/* RIGHT: Book Now button */}
              <div className="col-span-12 lg:col-span-4 flex items-center justify-center lg:justify-end">
                <a
                  href="/contact-us"
                  className="inline-block bg-[#373737] text-white text-sm px-4 py-2 rounded scale-100 hover:scale-105 transform transition-transform font-medium"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Sidebar (Mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[99999]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[60%] bg-[#373737] text-white p-5 overflow-auto">
            <div className="flex items-center justify-end mb-6">
              <button
                aria-label="Close menu"
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded"
              >
                <FaTimes size={22} />
              </button>
            </div>

            <nav>
              <ul className="space-y-3">
                {NAV.map((item, idx) => (
                  <li key={idx}>
                    {item.children ? (
                      <details className="group">
                        <summary className="cursor-pointer font-medium py-2 flex items-center justify-between">
                          {isExternal(item.href) ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:underline"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {item.title}
                            </a>
                          ) : (
                            <Link
                              href={item.href as Route}
                              className="text-white hover:underline"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {item.title}
                            </Link>
                          )}
                          <FaChevronDown className="ml-2 text-sm" />
                        </summary>
                        <ul className="pl-4 mt-2 space-y-1">
                          {item.children.map((c, i) => (
                            <li key={i}>
                              {isExternal(c.href) ? (
                                <a
                                  href={c.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm py-1"
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {c.title}
                                </a>
                              ) : (
                                <Link
                                  href={c.href as Route}
                                  className="block text-sm py-1"
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {c.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : isExternal(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-medium py-2 text-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.href as Route}
                        className="block text-sm font-medium py-2 text-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

