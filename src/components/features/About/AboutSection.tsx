export default function About(): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col space-y-6 text-white text-lg">
        <p>
          Jau tradicija tapusioje konferencijoje kviečiame susipažinti su
          Valstybės duomenų ežero ir moderniausių analitinių įrankių
          galimybėmis, leidžiančiomis efektyviai naudoti įvairius valstybės
          duomenis.
          <br />
          <br />
          Renginio metu pristatysime net 15 valstybės iššūkių ir jų sprendimų,
          kuriuos per 2 intensyvias dirbtuvių dienas kūrė įvairių įstaigų
          atstovai.
          <br />
          <br />
          Šiuos iššūkius balsuodami išrinko daugiau nei 800 viešojo sektoriaus
          darbuotojų – kiekvienai valstybės valdymo sričiai po vieną.
          <br />
          <br />
          Valstybės duomenų agentūros tikslas – paskatinti viešojo sektoriaus
          institucijas naudotis Valstybės duomenų ežero duomenimis ir įgalinti
          savo iššūkius spręsti naudojant moderniausius analitinius įrankius.
        </p>

        <hr className="w-full h-[2px] bg-white" />

        <div className="flex justify-center">
          <img
            src="./images/profile.jpg"
            alt="Placeholder"
            className="w-full h-fit rounded-xl object-cover "
          />
        </div>

        <p>
          <strong>Vieta:</strong> Adreso g. 123
        </p>
        <p>
          <strong>Data:</strong> 0000.00.00
        </p>
      </div>

      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.9988506784484!2d25.22563439963226!3d54.67976594933101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94055529fabf%3A0xeeb29a2789fb0350!2sLITEXPO!5e1!3m2!1slt!2slt!4v1736503040561!5m2!1slt!2slt"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
