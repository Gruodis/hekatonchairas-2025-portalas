import React from "react";
import type { Participants } from "@/interfaces/models/Participants";

interface ParticipantsProps {
  entries: Participants[];
}

export function Participants({ entries }: ParticipantsProps) {
  return (
    <section className="relative z-20">
      <h2 className="font-bold text-4xl pb-4 col-span-full max-w-[900px] mx-auto">
        Dalyviai
      </h2>
      <div className="max-w-[900px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-auto gap-4 md:gap-8">
        {entries.map(
          (entry: Participants): React.JSX.Element => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={entry.photoUrl} alt="" className="" />
            </div>
          )
        )}
      </div>
    </section>
  );
}
