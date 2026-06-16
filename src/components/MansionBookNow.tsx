'use client';

import { usePathname } from 'next/navigation';
import { getMansionNameByPath } from '@/lib/inquiry';

interface MansionBookNowProps {
  link: string;
}

export default function MansionBookNow({ link }: MansionBookNowProps) {
  const pathname = usePathname();

  let targetLink = link;
  if (link === '/contact-us') {
    const mansionName = getMansionNameByPath(pathname || '');
    if (mansionName) {
      targetLink = `/#inquiry-form?mansion=${encodeURIComponent(mansionName)}`;
    } else {
      targetLink = '/#inquiry-form';
    }
  }

  const isInternal = targetLink.startsWith('/') || targetLink.startsWith('#');

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 flex justify-center">
        <a
          href={targetLink}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          className="bg-[#C19B77] hover:bg-[#b08968] transition text-white px-4 sm:px-6 py-2 sm:py-3 rounded "
        >
          Book Now
        </a>
      </div>
    </section>
  );
}