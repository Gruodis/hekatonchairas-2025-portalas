import { Agenda } from "../../../interfaces/models/Agenda.ts";
import DOMPurify from "dompurify";

interface AgendaListProps {
  items: Agenda[];
}

export default function AgendaList({ items }: AgendaListProps): JSX.Element {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[900px] w-full divide-y-2 divide-white/20 border-2 border-white/10 rounded-3xl shadow-[0_0px_60px_5px_rgba(0,0,0,0.3)]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start py-3 px-10 space-y-2 md:space-y-0 md:space-x-4"
          >
            <div className="w-full md:w-60 text-white">
              <h3 className="text-xl font-bold">{item.time}</h3>
            </div>

            <div className="flex-1 text-white">
              <h2 className="text-2xl font-semibold text-[#73ffc9]">
                {item.title}
              </h2>
              {item.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      item.description.replace(/\n/g, "<br>")
                    ),
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
