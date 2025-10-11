import React from "react";
import Image from "next/image";

// interface Feature {
//   image: string;
//   title: string;
//   description: string;
// }

// interface MansionFeaturesProps {
//   features: Feature[];
//   backgroundImage: string;
// }

// export default function MansionFeatures({
//   features,
//   backgroundImage,
// }: MansionFeaturesProps) {
//   return (
//     <section
//       className="relative w-full py-12 bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="w-full md:w-[30%] bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
//             >
//               {/* Image */}
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-full h-64 object-cover"
//               />

//               {/* Text box under image */}
//               <div className="flex-1 flex flex-col justify-center items-center text-center bg-[#373737] text-white p-6">
//                 <h2 className="text-xl font-semibold mb-2 text-[#C19B77]">
//                   {feature.title}
//                 </h2>
//                 <p className="text-sm leading-relaxed">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






interface Feature {
  image: string;
  title: string;
  description: string;
}

interface MansionFeaturesProps {
  features: Feature[];
  backgroundImage: string;
}

export default function MansionFeatures({
  features,
  backgroundImage,
}: MansionFeaturesProps) {
  return (
    <section
      className="relative w-full py-12 bg-cover bg-center flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-[30%] bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              {/* Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />

              {/* Text box under image */}
              <div className="flex-1 flex flex-col justify-center items-center text-center bg-white text-[#373737] p-6">
                <h2 className="text-xl font-semibold mb-2 text-[#C19B77]">
                  {feature.title}
                </h2>
                <p className="text-sm leading-relaxed">
                  {feature.description.split('<br />').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
