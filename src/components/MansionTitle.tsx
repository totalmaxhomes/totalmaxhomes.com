interface MansionTitleProps {
  title: string;
}

export default function MansionTitle({ title }: MansionTitleProps) {
  return (
    <section className="w-full text-black py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">{title}</h1>
      </div>
    </section>
  );
}