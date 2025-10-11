interface MansionBookNowProps {
  link: string;
}

export default function MansionBookNow({ link }: MansionBookNowProps) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C19B77] hover:bg-[#b08968] transition text-white px-4 sm:px-6 py-2 sm:py-3 rounded "
        >
          Book Now
        </a>
      </div>
    </section>
  );
}