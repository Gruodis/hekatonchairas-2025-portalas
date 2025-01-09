import "./App.scss";
import { mockAgenda } from "./data/mock/agenda";
import AgendaList from "./components/features/Agenda/Agenda";
import Hero from "./components/features/Hero/Hero";
import { Participants } from "./components/features/Participants/Participants";
import { participantsEntries } from "./data/participants";

function App() {
  return (
    <div className="grid gap-8 w-full">
      <Hero />
      <AgendaList items={mockAgenda} />
      <Participants entries={participantsEntries} />
    </div>
  );
}

export default App;
