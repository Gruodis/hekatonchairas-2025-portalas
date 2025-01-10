export default function About(): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
      <h2 className="font-bold text-4xl col-span-full">Apie konferenciją</h2>
      <div className="col-span-full text-secondary-dark">
        <p>
          <strong>Vieta:</strong> „Cyber City“, Švitrigailos g. 34, B korpusas,
          Vilnius
        </p>
        <p>
          <strong>Data:</strong> 2025 m. Sausio 24 d.
        </p>
        <div className="bg-secondary-dark h-[2px] w-full mt-4 rounded-full" />
      </div>
      <div className="flex flex-col space-y-6 text-white">
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

        {/* <hr className="w-full h-[2px] border-secondary-dark" /> */}

        {/* <div className="flex justify-center">
          <img
            src="./images/profile.jpg"
            alt="Placeholder"
            className="w-full h-fit rounded-xl object-cover "
          />
        </div> */}
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
    </section>
  );
}
