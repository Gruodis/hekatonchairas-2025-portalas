import "./App.scss";
import { mockAgenda } from "./data/mock/agenda";
import AgendaList from "./components/features/Agenda/Agenda";
import Hero from "./components/features/Hero/Hero";
import SpeakerList from "./components/features/Speakers/SpeakersSection";
import { mockSpeakers } from "./data/mock/speakers";
// import { Participants } from "./components/features/Participants/Participants";
// import { participantsEntries } from "./data/participants";

function App() {
  return (
    <div className="grid gap-8 w-full overflow-hidden">
      <Hero />
      <AgendaList items={mockAgenda} />
      {/* <Participants entries={participantsEntries} /> */}
      <SpeakerList items={mockSpeakers} />
    </div>
  );
}

export default App;
