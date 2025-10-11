interface MansionDescriptionProps {
  title: string;
  paragraphs: string[];
  backgroundImage: string;
  bookLink: string;
}

export default function MansionDescription({ title, paragraphs, backgroundImage, bookLink }: MansionDescriptionProps) {
  return (
    <section
      className="
        relative w-full
        bg-cover bg-center flex items-center justify-center
        py-16 sm:py-20 md:py-28 lg:py-32
      "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-5xl px-4 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          {title}
        </h1>
        {paragraphs.map((para, index) => (
          <p key={index} className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-3 md:mb-4">
            {para}
          </p>
        ))}
        <a
          href={bookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C19B77] hover:bg-[#b08968] transition text-white px-4 sm:px-6 py-2 sm:py-3 rounded inline-block mt-3 md:mt-4 text-sm sm:text-base md:text-lg"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
