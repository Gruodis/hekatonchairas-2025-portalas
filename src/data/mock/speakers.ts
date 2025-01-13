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
    photoUrl: "./images/philosopher.png",
    name: "John Doe",
    institution: "Vinlnius University",
    position: "PHD in Philosophy",
  },
  {
    id: 1,
    photoUrl: "./images/host.webp",
    name: "Arnas Karužas",
    institution: null,
    position: "Renginio vedėjas",
  },
];
