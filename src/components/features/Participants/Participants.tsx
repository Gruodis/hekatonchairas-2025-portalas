import type { Participants } from "@/interfaces/models/Participants";

interface ParticipantsProps {
  entries: Participants[];
}

export function Participants({ entries }: ParticipantsProps) {
  return (
    <section className="relative z-20">
      <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-8">
        <h2 className="text-3xl font-bold pb-0 col-span-full">Dalyviai</h2>
        {entries.map((entry: Participants) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={entry.photoUrl} alt="" className="w-full max-h-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
