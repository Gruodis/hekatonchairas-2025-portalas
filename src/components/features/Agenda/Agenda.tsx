import { Agenda } from "../../../interfaces/models/Agenda.ts";
import DOMPurify from "dompurify";

interface AgendaListProps {
  items: Agenda[];
}

export default function AgendaList({ items }: AgendaListProps): JSX.Element {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[900px] w-full divide-y-2 divide-white/20 border-2 border-white/10 rounded-3xl shadow-[inset_0_0px_120px_0px_theme(colors.primary-dark/0.1),0_0px_120px_0px_theme(colors.secondary-dark/0.1)]">
        {items.map((item: Agenda) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start py-5 px-10 space-y-2 md:space-y-0 md:space-x-4"
          >
            <div className="w-full md:w-60 text-white">
              <h3 className="text-xl font-bold">{item.time}</h3>
            </div>

            <div className="flex-1 text-white">
              <h2 className="text-2xl font-semibold text-secondary-dark">
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
