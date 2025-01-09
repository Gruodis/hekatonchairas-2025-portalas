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
      "<strong> \n " +
      "APLINKOS MINISTERIJOS SRITIS \n" + 
      "KRAŠTO APSAUGOS MINISTERIJOS SRITIS \n" + 
      "SUSISIEKIMO MINISTERIJOS SRITIS \n" + 
      "TEISINGUMO MINISTERIJOS SRITIS \n" + 
      "VIDAUS REIKALŲ MINISTERIJOS SRITIS \n" + 
      "VYRIAUSYBĖS / BENDROJI SRITIS \n" + 
      "ŽEMĖS ŪKIO MINISTERIJOS SRITIS \n\n" + 
      "Klausimai 5 min. \n\n" + 
      "EKONOMIKOS IR INOVACIJŲ MINISTERIJOS SRITIS \n" + 
      "ENERGETIKOS MINISTERIJOS SRITIS \n" + 
      "FINANSŲ MINISTERIJOS SRITIS \n" + 
      "SOCIALINĖS APSAUGOS IR DARBO MINISTERIJOS SRITIS \n" + 
      "ŠVIETIMO, MOKSLO IR SPORTO MINISTERIJOS SRITIS \n" + 
      "UŽSIENIO REIKALŲ MINISTERIJOS SRITIS \n" +
      "KULTŪROS MINISTERIJOS SRITIS \n " + 
      "SVEIKATOS APSAUGOS MINISTERIJOS SRITIS \n\n" + 
      "Klausimai  5 min." +
      "</strong>",
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
