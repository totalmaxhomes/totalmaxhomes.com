"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-CN", name: "Chinese", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

// Type declarations for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

declare const google: {
  translate: {
    TranslateElement: new (
      config: {
        pageLanguage: string;
        includedLanguages: string;
        autoDisplay: boolean;
      },
      elementId: string
    ) => unknown;
  };
};

export default function TranslationWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isReady, setIsReady] = useState(false);
useEffect(() => {
  const interval = setInterval(() => {
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      console.log("✅ Google Translate menu ready");
      clearInterval(interval);
      // Optionally, set default language here
      // select.value = 'ur';
      // select.dispatchEvent(new Event('change'));
    } else {
      console.log("⏳ Translate menu not ready yet");
    }
  }, 1000); // check every 1 second

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
    const saved = localStorage.getItem("selectedLanguage") || "en";
    setCurrentLang(saved);

    // ✅ Define callback before script loads
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "zh-CN,fr,ja,ko,es",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsReady(true);

      // Restore language
      setTimeout(() => triggerLanguage(saved), 1000);
    };

    // ✅ Inject script if not exists
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const s = document.createElement("script");
      s.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(s);
    } else if (typeof google !== "undefined") {
      window.googleTranslateElementInit();
    }

    // ✅ Hide Google’s default bar
    const css = document.createElement("style");
    css.innerHTML = `
      .goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame.skiptranslate,
      .goog-te-menu-value, #goog-gt-tt, .goog-te-balloon-frame, .goog-te-spinner-pos {
        display: none !important;
      }
      body { top: 0 !important; }
    `;
    document.head.appendChild(css);
  }, []);

  // ✅ Re-apply language after route change
  useEffect(() => {
    if (isReady && currentLang !== "en") {
      setTimeout(() => triggerLanguage(currentLang), 800);
    }
  }, [pathname, isReady, currentLang]);

  /** 
   * ✅ Function to trigger language change 
   * It finds the Google Translate iframe & clicks correct option
   */
  // const triggerLanguage = (lang: string) => {
  //   const iframe = document.querySelector(
  //     "iframe.goog-te-menu-frame"
  //   ) as HTMLIFrameElement;
  //   if (!iframe) {
  //     console.warn("⏳ Translate menu not ready yet");
  //     return;
  //   }
  //   const doc = iframe.contentDocument || iframe.contentWindow?.document;
  //   if (!doc) return;

  //   const items = doc.querySelectorAll(".goog-te-menu2-item span.text");
  //   items.forEach((el: Element) => {
  //     if (el.textContent) {
  //       const text = el.textContent.toLowerCase();
  //       const langName = getLangDisplayName(lang);
  //       if (text.includes(langName)) {
  //         (el as HTMLElement).click();
  //       }
  //     }
  //   });
  // };

  // ✅ When language is selected
  function triggerLanguage(lang: string) {
  const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change'));
  } else {
    console.log("⚠️ Translate menu still not loaded, please wait...");
  }
}
  const changeLanguage = (lang: string) => {
    setIsOpen(false);
    setCurrentLang(lang);
    localStorage.setItem("selectedLanguage", lang);

    if (lang === "en") {
      // Reset translation
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      window.location.reload();
      return;
    }

    setTimeout(() => triggerLanguage(lang), 600);
  };


  const langObj =
    LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      {/* Hidden Google element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Custom Widget */}
      <div className="relative z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/90 backdrop-blur border border-gray-200 rounded-lg px-3 py-2 shadow hover:shadow-lg transition"
        >
          <span className="text-lg">{langObj.flag}</span>
          <span className="text-sm font-medium text-gray-700">{langObj.name}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left transition ${
                    currentLang === lang.code
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {currentLang === lang.code && (
                    <svg
                      className="w-4 h-4 ml-auto text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}