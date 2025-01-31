import React from "react";

export default function About(): React.JSX.Element {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-easing="ease-in-out-cubic"
      className="grid grid-cols-1 py-8 lg:bg-[#0a0d0f]/60 xl:bg-transparent md:backdrop-blur-sm xl:backdrop-blur-0 max-w-[calc(900px+2rem)] mx-auto rounded-xl overflow-hidden z-20"
    >
      <div className="grid gap-6">
        <h2 className="font-bold text-4xl col-span-full">Apie konferenciją</h2>

        <div className="flex flex-col space-y-8 text-white">
          <p>
            Jau tradicija tapusioje konferencijoje kviečiame susipažinti su
            Valstybės duomenų ežero ir moderniausių analitinių įrankių
            galimybėmis, leidžiančiomis efektyviai naudoti įvairius valstybės
            duomenis.
          </p>
          <p>
            Renginio metu pristatysime net 15 valstybės iššūkių ir jų sprendimų,
            kuriuos per 2 intensyvias dirbtuvių dienas kūrė įvairių įstaigų
            atstovai.
          </p>
          <p>
            Šiuos iššūkius balsuodami išrinko daugiau nei 800 viešojo sektoriaus
            darbuotojų – kiekvienai valstybės valdymo sričiai po vieną.
          </p>
          <p>
            Valstybės duomenų agentūros tikslas – paskatinti viešojo sektoriaus
            institucijas naudotis Valstybės duomenų ežero duomenimis ir įgalinti
            savo iššūkius spręsti naudojant moderniausius analitinius įrankius.
          </p>
        </div>
        <div className="col-span-full text-secondary-dark">
          <p>
            <strong>Vieta:</strong> „Cyber City“, Švitrigailos g. 34, B
            korpusas, Vilnius
          </p>
          <p>
            <strong>Data:</strong> 2025 m. Sausio 24 d.
          </p>
          <div className="bg-secondary-dark h-[2px] w-full mt-4 rounded-full" />
        </div>

        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.078433431233!2d25.266753577425803!3d54.67304777270375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9535434717bd%3A0xdef6f9daa7ac3252!2sCYBER%20CITY!5e0!3m2!1sen!2slt!4v1736507204527!5m2!1sen!2slt"
            className="w-full h-full min-h-[300px] rounded-xl overflow-hidden"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
