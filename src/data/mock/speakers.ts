import { Speakers } from "../../interfaces/models/Speakers";

export const mockSpeakers: Speakers[] = [
  {
    id: 1,
    photoUrl: "./images/ceo.webp",
    name: "Dr. Jūratė Petrauskienė",
    institution: "Valstybės duomenų agentūra",
    position: "Generalinė direktorė",
  },
  {
    id: 2,
    photoUrl: "./images/lektorius.jpg",
    name: "Aidas Puklevičius",
    institution: null,
    position: "Lektorius",
  },
  {
    id: 3,
    photoUrl: "./images/host.webp",
    name: "Arnas Karužas",
    institution: null,
    position: "Renginio vedėjas",
  },
];
