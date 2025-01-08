import { Agenda } from "../../../interfaces/models/Agenda.ts";
import DOMPurify from "dompurify";

interface AgendaListProps {
  items: Agenda[];
}

export default function AgendaList({ items }: AgendaListProps): JSX.Element {
  return (
    <div className="product-list">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <h3>{item.time}</h3>
          <h2>{item.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.description || ""),
            }}
          />
        </div>
      ))}
    </div>
  );
}
