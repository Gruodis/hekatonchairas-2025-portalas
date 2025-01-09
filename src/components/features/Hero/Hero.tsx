import CountdownTimer from "./CountDown";
import RadialGradient from "../../common/RadialGradient";
import AOS from "aos";
import "aos/dist/aos.css";

const heroHeads = "/images/heads-b.webp";
AOS.init();
export default function Hero(): JSX.Element {
  return (
    <section className="hero-container h-screen flex flex-wrap relative items-start isolate">
      <div className="max-w-[1440px] w-full px-12 pt-8 mx-auto">
        <img src="/images/logo-w.svg" className="max-h-[56px]" alt="" />
      </div>

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
        data-aos="zoom-in-down"
        data-aos-delay="300"
        data-aos-duration="3000"
        className="w-full max-w-[120px] blur-0 opacity-80 absolute -top-[800px] right-[4%]"
        src="/images/vertical-text.webp"
        alt=""
      />
      <img
        data-aos="zoom-in-down"
        data-aos-delay="900"
        data-aos-duration="3000"
        className="w-full max-w-[40px] blur-sm opacity-80 absolute -top-[300px] right-[40%]"
        src="/images/vertical-text.webp"
        alt=""
      />
      <img
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="2000"
        className="w-full max-w-[40px] blur-[6px] opacity-80 absolute -bottom-[300px] right-2/3 translate-x-1/2"
        src="/images/vertical-text.webp"
        alt=""
      />

      <img
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="3000"
        className="w-full max-w-[60%] opacity-90 absolute -top-[15%] -right-[10%] animate-longer-zoom"
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
        className="w-full max-w-[140px] opacity-10 mix-blend-screen absolute top-2/3 -left-[1%]"
        src="/images/vertical-text.webp"
        alt=""
      />
      <div className="relative w-full h-full flex flex-wrap items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="3000"
          className="hero-content w-full md:w-1/2 flex flex-col justify-center text-white"
        >
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
          <div
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="1200"
            className="text-2xl"
          >
            2025m. Sausio 24d.
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
