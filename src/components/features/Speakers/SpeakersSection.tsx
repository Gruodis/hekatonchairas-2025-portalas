import React from "react";
import { Speakers } from "@/interfaces/models/Speakers.ts";

interface SpeakerListProps {
  items: Speakers[];
}

export default function SpeakerList({
  items,
}: SpeakerListProps): React.JSX.Element {
  return (
    <section className="max-w-[900px] w-full mx-auto">
      <h2 className="font-bold text-4xl pb-4">Pranešėjai</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12 justify-center">
        {items.map(
          (item: Speakers): React.JSX.Element => (
            <div
              key={item.id}
              className="text-white font-grotesk mb-8 flex flex-col gap-2 group "
            >
              <div className="mb-2 rounded-full max-w-[200px] md:max-h-[300px] md:max-w-[300px] max-h-[200px] mx-auto overflow-hidden aspect-square m-2 scale-100 group-hover:scale-105 transform-gpu duration-300 shadow-[0_0px_20px_10px_theme(colors.secondary-dark/0.1)] group-hover:shadow-[0_0px_20px_10px_theme(colors.secondary-dark/0.3)]">
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
