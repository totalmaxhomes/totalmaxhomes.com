"use client";

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: 'Chinese Traditional', flag: '🇨🇳' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any;

export default function TranslationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    // Initialize Google Translate when component mounts
    const initGoogleTranslate = () => {
      if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement && google.translate.TranslateElement.InlineLayout) {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'zh-CN,fr,ja,ko,es',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        setIsGoogleLoaded(true);
      }
    };

    // Wait for Google Translate script to load
    if (typeof google !== 'undefined') {
      initGoogleTranslate();
    } else {
      const checkGoogle = setInterval(() => {
        if (typeof google !== 'undefined') {
          clearInterval(checkGoogle);
          initGoogleTranslate();
        }
      }, 100);
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    if (!isGoogleLoaded) return;

    setCurrentLanguage(langCode);
    setIsOpen(false);

    if (langCode === 'en') {
      // For English, reload to ensure original content
      window.location.reload();
      return;
    }

    // Use Google Translate API to change language
    try {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } catch (error) {
      console.warn('Google Translate not ready:', error);
    }
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <>
      {/* Hidden Google Translate Element for API */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Custom Translation Widget */}
      
        <div className="relative z-[9999]">
          {/* Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span className="text-lg">{currentLang.flag}</span>
            <span className="text-sm font-medium text-gray-700">{currentLang.name}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                <div className="py-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                        currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                      {currentLanguage === language.code && (
                        <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      
    </>
  );
}