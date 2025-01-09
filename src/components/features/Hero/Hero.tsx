import CountdownTimer from "./CountDown";
import RadialGradient from "../../common/RadialGradient";

const heroHeads = "/images/hero-heads.webp";

export default function Hero(): JSX.Element {
  return (
    <section className="hero-container h-screen flex flex-wrap relative items-start isolate">
      <img src="/images/logo-w.svg" className="max-h-[56px]" alt="" />
      {/* Softer outer glow */}
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={800}
        centerOpacity={0.3}
        outerOpacity={0}
        className="absolute -top-[100px] -left-[550px]"
      />
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={1200}
        centerOpacity={1}
        outerOpacity={0}
        className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      />

      <img
        className="w-full max-w-[50%] opacity-90 absolute top-0 right-0"
        src={heroHeads}
        alt=""
      />
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={600}
        centerOpacity={1}
        outerOpacity={0}
        className="absolute -bottom-1/2 -translate-y-1/3 right-1/2 translate-x-1/2"
      />
      <img
        className="w-full max-w-[100px] opacity-60 absolute top-2/3 left-0"
        src="/images/vertical-text.webp"
        alt=""
      />
      <div className="relative w-full h-full flex flex-wrap items-center">
        <div className="hero-content w-full md:w-1/2 flex flex-col justify-center text-white">
          <h1 className="flex flex-col mx-auto lg:ml-auto lg:mr-32 font-bold font-grotesk text-4xl md:text-5xl">
            <span>Duomenu</span> <span>konferencija</span>
          </h1>
          <h2 className="grid font-bold text-right mx-auto lg:mr-auto lg:ml-64 font-grotesk text-[64px] lg:text-[86px] leading-[1] gap-1">
            <span>Hekaton</span> <span>cheiras</span>
          </h2>
          <span className="text-xl mt-2 ml-auto mr-8 font-grotesk">
            Trūksta teksto
          </span>
        </div>

        <div className="text-center flex flex-col items-center gap-4 w-full pb-12">
          <div className="text-2xl">2025m. Sausio 24d.</div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
