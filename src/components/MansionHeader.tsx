interface MansionHeaderProps {
  title: string;
  backgroundImage: string;
}

export default function MansionHeader({ title, backgroundImage }: MansionHeaderProps) {
  return (
    <section
      className="relative w-full h-[350px] flex items-center justify-center py-12 bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{title}</h1>
      </div>
    </section>
  );
}