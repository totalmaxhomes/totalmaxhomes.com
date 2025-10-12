// "use client";

// import { useEffect } from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaXTwitter,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa6";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// interface GoogleTranslate {
//   translate: {
//     TranslateElement: new (config: { pageLanguage: string }, element: string) => void;
//   };
// }

// declare global {
//   interface Window {
//     googleTranslateElementInit: () => void;
//     google: GoogleTranslate;
//   }
// }

// export default function TopBar() {
//   useEffect(() => {
//     if (!document.querySelector('script[src*="translate.google.com"]')) {
//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     if (!window.googleTranslateElementInit) {
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//           { pageLanguage: "en" },
//           "google_translate_element"
//         );
//       };
//     }
//   }, []);

//   return (
//     <div className="hidden xl:block relative text-white text-sm">
//       {/* Background Image with Blur */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('/parallax-2.jpg')",
//           filter: "blur(5px)",
//           zIndex: -2,
//         }}
//       />

//       {/* Optional Dark Overlay for better readability */}
//       <div className="absolute inset-0 bg-black opacity-30 z-[-1]" />

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
//         {/* Left Column */}
//         <div className="flex items-center gap-6">
//           <a href="https://totalmaxhome.com/crm/login" className="hover:text-blue-400 font-medium">
//             Login
//           </a>
//           <div className="flex gap-3">
//             <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
//             <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
//             <a href="#" className="hover:text-gray-300"><FaXTwitter /></a>
//             <a href="#" className="hover:text-red-500"><FaYoutube /></a>
//             <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
//           </div>
//         </div>

//         {/* Center Column: Google Translate */}
//         <div
//           id="google_translate_element"
//           className="flex items-center justify-center bg-white rounded px-2 py-0.5 text-black text-xs"
//         />

//         {/* Right Column */}
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-white/80" />
//             <a href="tel:7025926888" className=" font-medium">
//               702-592-6888
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-white/80" />
//             <a
//               href="mailto:info@example.com"
//               className="font-medium"
//             >
//               info@example.com
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaMapMarkerAlt className="text-white/80" />
//             <span className="font-medium">Las Vegas, NV</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import TranslationWidget from "./TranslationWidget";

interface GoogleTranslate {
  translate: {
    TranslateElement: new (config: { pageLanguage: string }, element: string) => void;
  };
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: GoogleTranslate;
  }
}

export default function TopBar() {
  useEffect(() => {
    // Google Translate is now handled by TranslationWidget
  }, []);

  return (
    <div className="relative text-white text-sm">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/parallax-2.jpg')",
          filter: "blur(5px)",
          zIndex: -2,
        }}
      />

      {/* Optional Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 gap-2 sm:gap-0">
        {/* Left Column */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <a href="https://totalmaxhome.com/crm/login" className="hover:text-blue-400 font-medium">
            Login
          </a>
          <div className="flex gap-2 sm:gap-3">
            <a href="https://www.facebook.com/totalmaxhomesvegas" target="_blank" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://www.instagram.com/totalmaxhomes/" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://twitter.com/totalmaxhomes" target="_blank" className="hover:text-gray-300"><FaXTwitter /></a>
            <a href="https://youtube.com/@TotalMaxHomes" target="_blank" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/104027744/admin/feed/posts/" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </div>

        {/* Center Column: Google Translate */}
        {/* <div
          id="google_translate_element"
          className="flex items-center justify-center bg-white rounded px-2 py-0.5 text-black text-xs my-1 sm:my-0"
        /> */}
        <TranslationWidget />

        {/* Right Column */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/90 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaPhoneAlt className="text-white/80" />
            <a href="tel:7025926888" className="font-medium text-xs sm:text-sm">
              702-592-6888
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <FaMapMarkerAlt className="text-white/80" />
            <span className="font-medium text-xs sm:text-sm">Las Vegas, NV</span>
          </div>
        </div>
      </div>
    </div>
  );
}