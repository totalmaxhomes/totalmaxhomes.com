"use client";

import { Streamdown } from "streamdown";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <Streamdown
      mode="static"
      className="
        prose prose-lg max-w-none
        prose-headings:font-playfair prose-headings:text-[#1c1c1c]
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-[#636363] prose-p:leading-8 prose-p:text-[15px]
        prose-a:text-[#C19B77] prose-a:no-underline hover:prose-a:underline
        prose-strong:text-[#1c1c1c]
        prose-ul:list-disc prose-ul:pl-6
        prose-li:text-[#636363] prose-li:leading-8 prose-li:text-[15px]
        prose-blockquote:border-l-4 prose-blockquote:border-[#C19B77] prose-blockquote:pl-4 prose-blockquote:italic
      "
    >
      {content}
    </Streamdown>
  );
}
