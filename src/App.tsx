import "./App.scss";
import { mockAgenda } from "./data/mock/agenda";
import AgendaList from "./components/features/Agenda/Agenda";
import Hero from "./components/features/Hero/Hero";

function App() {
  return (
    <div className="grid gap-8">
      <Hero />
      <AgendaList items={mockAgenda} />
    </div>
  );
}

export default App;
