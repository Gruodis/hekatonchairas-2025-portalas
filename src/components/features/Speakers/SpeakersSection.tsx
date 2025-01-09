import { Speakers } from "../../../interfaces/models/Speakers.ts";

interface SpeakerListProps {
  items: Speakers[];
}

export default function SpeakerList({ items }: SpeakerListProps): JSX.Element {
  return (
    <section className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-white w-52 font-grotesk mx-6 mb-8"
        >
          <div className="w-52 h-52 mb-4 rounded-full overflow-hidden">
            <img
              src={item.photoUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.institution}</p>
          <p className="font-semibold">{item.position}</p>
        </div>
      ))}
    </section>
  );
}
