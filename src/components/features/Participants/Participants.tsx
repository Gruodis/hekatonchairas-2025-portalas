import { ParticipantsProps } from "./participants.types";

export function Participants({ entries }: ParticipantsProps) {
  return (
    <div className="max-w-[800px] w-full divide-y-2 divide-white border-2 border-white rounded-3xl">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start py-3 px-10 space-y-2 md:space-y-0 md:space-x-4"
        >
          <div className="w-full md:w-60 text-white">{entry.time}</div>
          <div className="text-white">{entry.description}</div>
        </div>
      ))}
    </div>
  );
}
