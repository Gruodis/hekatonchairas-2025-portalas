import React from "react";
import { Speakers } from "@/interfaces/models/Speakers.ts";

import RadialGradient from "@/components/common/RadialGradient";

interface SpeakerListProps {
  items: Speakers[];
}

export default function SpeakerList({
  items,
}: SpeakerListProps): React.JSX.Element {
  return (
    <section className="relative z-20 isolate">
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={1200}
        centerOpacity={0.2}
        outerOpacity={0}
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 !w-[1200px] !h-[1200px]"
      />
      <img
        data-aos="zoom-in-down"
        data-aos-delay="300"
        data-aos-duration="3000"
        className="-z-20 w-full max-w-[60px] lg:max-w-[60px] opacity-40 absolute transform-gpu duration-300 -top-[300px] lg:-top-[800px] right-[4%]"
        src="/images/vertical-text.webp"
        alt=""
      />

      <div className="max-w-[900px] w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12 justify-center">
        <h2 className="font-bold text-4xl pb-4 col-span-full">Pranešėjai</h2>
        {items.map(
          (item: Speakers): React.JSX.Element => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-easing="ease-in-out-back"
              key={item.id}
              className="text-white font-grotesk mb-8 flex flex-col gap-2 group "
            >
              <div className="mb-2 border-2 border-white/30 rounded-full max-w-[200px] md:max-h-[300px] md:max-w-[300px] max-h-[200px] mx-auto overflow-hidden aspect-square m-2 scale-100 group-hover:scale-105 transform-gpu duration-300 shadow-[0_0px_20px_10px_theme(colors.secondary-dark/0.1)] group-hover:shadow-[0_0px_20px_10px_theme(colors.secondary-dark/0.3)]">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 mx-auto">
                <h3 className="font-semibold text-xl leading-[1.2] text-secondary-dark">
                  {item.name}
                </h3>
                {item.institution && (
                  <p className="leading-[1.2]">{item.institution}</p>
                )}
                <p className="font-semibold leading-[1.2]">{item.position}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
