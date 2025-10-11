interface MansionVirtualTourProps {
  title: string;
  videos: string[];
  backgroundImage?: string;
}

export default function MansionVirtualTour({ title, videos, backgroundImage }: MansionVirtualTourProps) {
  return (
    <section
      className="w-full py-12 flex justify-center  bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : {}}
    >
      <div className="w-full  max-w-7xl px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#373737]">
          {title}
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h- mb-4">
          {videos.slice(0, 3).map((src, index) => (
            <iframe
              key={index}
              width="100%"
              height="260"
              src={src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          ))}
        </div>

        {/* Additional Videos */}
        {videos.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.slice(3).map((src, index) => (
              <iframe
                key={index + 3}
                width="100%"
                height="260"
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
