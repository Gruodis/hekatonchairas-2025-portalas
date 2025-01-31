import "./App.scss";
import { mockAgenda } from "./data/mock/agenda";
import AgendaList from "./components/features/Agenda/Agenda";
import Hero from "./components/features/Hero/Hero";
import SpeakerList from "./components/features/Speakers/SpeakersSection";
import { mockSpeakers } from "./data/mock/speakers";

import { mockSolutions } from "./data/mock/solutions";
import SolutionsSection from "./components/features/Solutions/SolutionsSection";

import About from "./components/features/About/AboutSection";
import Footer from "./components/features/Footer/Footer";
import { Participants } from "./components/features/Participants/Participants";
import { mockParticipants } from "@/data/mock/participants";
import { socialMediaLinks } from "./data/mock/social-links";

function App() {
  return (
    <div className="grid gap-[60px] w-full overflow-hidden">
      <Hero />
      <About />
      <SolutionsSection items={mockSolutions} />

      <SpeakerList items={mockSpeakers} />
      <AgendaList items={mockAgenda} />
      <Participants entries={mockParticipants} />
      <Footer socialLinks={socialMediaLinks} />
    </div>
  );
}

export default App;
