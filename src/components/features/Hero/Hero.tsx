import React, { useEffect } from "react";
import CountdownTimer from "./CountDown";
import RadialGradient from "@/components/common/RadialGradient";
import AOS from "aos";
import "aos/dist/aos.css";

const heroHeads = "/images/heads-b.webp";

export default function Hero(): React.JSX.Element {
  useEffect(() => {
    AOS.init({ disable: "phone" });
  }, []);
  return (
    <section className="hero-container h-svh relative items-start isolate">
      <div className="flex max-w-[1440px] w-full xl:px-12 pt-8 mx-auto">
        <img src="/images/logo-vda.svg" className="max-h-[56px]" alt="" />
      </div>

      {/* Softer outer glow */}
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={800}
        centerOpacity={0.3}
        outerOpacity={0}
        className="absolute -top-[100px] -left-[800px] -z-10 select-none"
      />
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={1200}
        centerOpacity={0.2}
        outerOpacity={0}
        className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 select-none"
      />
      <img
        data-aos="zoom-in-down"
        data-aos-delay="300"
        data-aos-duration="3000"
        className="select-none -z-20 w-full max-w-[60px] lg:max-w-[120px] opacity-40 absolute transform-gpu duration-300 -top-[300px] lg:-top-[800px] right-[4%]"
        src="/images/vertical-text.webp"
        alt=""
      />
      <img
        data-aos="zoom-in-down"
        data-aos-delay="900"
        data-aos-duration="3000"
        className="select-none w-full max-w-[40px] blur-sm opacity-80 absolute -top-[300px] right-[40%]"
        src="/images/vertical-text.webp"
        alt=""
      />
      <img
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="2000"
        className="select-none w-full max-w-[40px] blur-[6px] !opacity-10 absolute -bottom-[300px] right-2/3 translate-x-1/2 transform-gpu duration-300"
        src="/images/vertical-text.webp"
        alt=""
      />

      <img
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="3000"
        className="select-none z-10 md:w-full max-w-none md:max-w-[60%] opacity-25 md:opacity-100 absolute h-auto left-[10%] md:left-auto md:-right-[10%] -top-1/2 md:-top-[15%] transform-gpu duration-300"
        src={heroHeads}
        alt=""
      />

      <RadialGradient
        centerColor="#000000"
        outerColor="#000000"
        size={600}
        centerOpacity={0.7}
        outerOpacity={0}
        className="select-none absolute -bottom-[300px] right-1/2 translate-x-1/2 z-20"
      />
      <img
        className="select-none w-full max-w-[70px] lg:max-w-[120px] opacity-25 blur-sm lg:blur-0 lg:opacity-100 mix-blend-screen absolute top-2/3 -left-[1%] transform-gpu duration-300"
        src="/images/vertical-text.webp"
        alt=""
      />
      <div className="relative max-w-[1440px] w-full h-full flex flex-wrap items-center mx-auto z-20">
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="3000"
          className="hero-content w-full md:w-1/2 flex flex-col justify-center text-white"
        >
          <h1 className="flex flex-col pb-0 mb-0 mx-auto lg:ml-auto lg:mr-32 font-bold font-grotesk text-4xl md:text-5xl">
            <span>Duomenų</span> <span>konferencija</span>
          </h1>
          <h2 className="grid font-bold text-right mx-auto pb-0 mb-0 lg:mx-0 lg:mr-auto lg:ml-[10%] font-grotesk text-[64px] lg:text-[86px] leading-[1] gap-1">
            <span>Hekaton</span> <span>cheiras</span>
          </h2>
          <span className="text-xl mt-2 mx-auto lg:ml-auto lg:mr-16 font-grotesk">
            15 Hekatoncheiro žygdarbių <br /> valstybės iššūkių dirbtuvėse
          </span>
        </div>

        <div className="text-center flex flex-col items-center gap-4 w-full pb-12">
          <div
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-once="true"
            data-aos-duration="1200"
            className="text-2xl font-space-mono text-white"
          >
            2025m. Sausio 24d.
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
