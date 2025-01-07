import "./App.scss";
import { mockAgenda } from "./data/mock/agenda";
import AgendaList from "./sections/Agenda/Agenda";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <div className="grid gap-8">
      <Hero />
      <AgendaList items={mockAgenda} />
    </div>
  );
}

export default App;
