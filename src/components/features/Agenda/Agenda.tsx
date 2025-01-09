import { Agenda } from "../../../interfaces/models/Agenda.ts";
import DOMPurify from "dompurify";

interface AgendaListProps {
  items: Agenda[];
}

export default function AgendaList({ items }: AgendaListProps): JSX.Element {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[1000px] w-full divide-y-2 divide-white border-2 border-white rounded-3xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start py-3 px-10 space-y-2 md:space-y-0 md:space-x-4"
          >
            <div className="w-full md:w-60 text-white">
              <h3 className="text-lg font-bold">{item.time}</h3>
            </div>

            <div className="flex-1 text-white">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              {item.description && (
                <p
                  className="text-lg"
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
