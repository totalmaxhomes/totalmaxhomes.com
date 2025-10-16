import type { Metadata } from "next";
import { Playfair_Display, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top";
import { Analytics } from "@vercel/analytics/next"
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ✅ URL must be a string
const url = "https://totalmaxhomes-com.vercel.app";

export const metadata: Metadata = {
  title: "TotalMax Homes",
  description: `A post from nicdark on TotalMax Homes provided by ${url}`,
  openGraph: {
    title: "TotalMax Homes",
    description: `A post from nicdark on TotalMax Homes provided by ${url}`,
    url: url,
    siteName: "TotalMax Homes",
    images: [
      {
        url: `${url}/totalmaxhomes.png`,
        width: 1200,
        height: 630,
        alt: "TotalMax Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${playfairDisplay.variable} ${roboto.variable} ${montserrat.variable} antialiased`}>
        <TopBar />
        {children}
        {/* Google Translate Widget */}
        <Analytics />
        
      </body>
    </html>
  );
}
