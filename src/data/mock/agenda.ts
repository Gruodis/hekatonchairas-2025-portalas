import { Agenda } from "../../interfaces/models/Agenda";

export const mockAgenda: Agenda[] = [
  {
    id: "1",
    time: "09:30-10:10",
    title: "Pasitikimo kava",
  },
  {
    id: "2",
    time: "10:00-10:10",
    title: "Konferencijos atidarymas",
    description:
      "<strong> \n Dr. Jūratė Petrauskienė</strong>, Valtybės duomenų agentūros generalinė direktorė",
  },
  {
    id: "3",
    time: "10:10-10:30",
    title: "Mitai ir herojai",
    description: "Edukacinis ekskursas į graikų mitologiją",
  },
  {
    id: "4",
    time: "10:30-10:45",
    title: "Hekatoncheiras valstybės iššūkių dirbtuvėse",
  },
  {
    id: "5",
    time: "10:45-12:00",
    title: "Iššūkių sprendimų pristatymai",
    description:
      '<strong><ul className="list">' +
      "<li>APLINKOS MINISTERIJOS SRITIS</li>" +
      "<li>KRAŠTO APSAUGOS MINISTERIJOS SRITIS</li>" +
      "<li>SUSISIEKIMO MINISTERIJOS SRITIS</li>" +
      "<li>TEISINGUMO MINISTERIJOS SRITIS</li>" +
      "<li>VIDAUS REIKALŲ MINISTERIJOS SRITIS</li>" +
      "<li>VYRIAUSYBĖS / BENDROJI SRITIS</li>" +
      "<li>ŽEMĖS ŪKIO MINISTERIJOS SRITIS</li>" +
      "<li>Klausimai 5 min.</li>" +
      "<li>EKONOMIKOS IR INOVACIJŲ MINISTERIJOS SRITIS</li>" +
      "<li>ENERGETIKOS MINISTERIJOS SRITIS</li>" +
      "<li>FINANSŲ MINISTERIJOS SRITIS</li>" +
      "<li>SOCIALINĖS APSAUGOS IR DARBO MINISTERIJOS SRITIS</li>" +
      "<li>ŠVIETIMO, MOKSLO IR SPORTO MINISTERIJOS SRITIS</li>" +
      "<li>UŽSIENIO REIKALŲ MINISTERIJOS SRITIS</li>" +
      "<li>KULTŪROS MINISTERIJOS SRITIS</li>" +
      "<li>SVEIKATOS APSAUGOS MINISTERIJOS SRITIS</li>" +
      "<li>Klausimai 5 min.</li>" +
      "</ul></strong>",
  },
  {
    id: "6",
    time: "12:00-13:00",
    title: "Pietūs",
  },
  {
    id: "7",
    time: "13:00-14:00",
    title: "Susipažinimas su iššūkių sprendimais ir dalyviais",
  },
  {
    id: "8",
    time: "14:00",
    title: "Renginio pabaiga",
  },
];
