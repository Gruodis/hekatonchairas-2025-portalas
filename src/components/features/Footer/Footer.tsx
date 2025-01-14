import RadialGradient from "@/components/common/RadialGradient";
import React, { useState, useRef, useEffect } from "react";

export default function Footer(): React.JSX.Element {
  const [rotation, setRotation] = useState(0);
  const prevScrollY = useRef(0);
  const ROTATION_SPEED = 0.2; // Add speed control

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine scroll direction
      const isScrollingDown = currentScrollY > prevScrollY.current;

      // Update rotation based on scroll direction
      setRotation((prev) => {
        const newRotation =
          prev + (isScrollingDown ? ROTATION_SPEED : -ROTATION_SPEED);
        return newRotation;
      });

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative mt-12 md:mt-20">
      <div className="absolute w-full rounded-full -top-[900px] left-1/2 -translate-x-1/2">
        <img
          src="./images/rankos.svg"
          alt=""
          className="w-full relative z-10 select-none"
          style={{
            transform: `rotate(${rotation.toString()}deg)`,
            transition: "transform 2s ease-in-out",
          }}
        />
        <div className="absolute z-20 inset-0 shadow-[inset_0_0_120px_350px_rgba(10,13,15,1)] rounded-full" />
      </div>
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={800}
        centerOpacity={0.1}
        outerOpacity={0}
        className="absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 select-none !h-[800px] !w-[800px]"
      />
      <footer className="w-full relative z-10 flex flex-col md:flex-row bg-[#17191a] gap-8 justify-between">
        <img
          src={"./images/3 galvos.svg"}
          alt={"Partneriai"}
          className="select-none absolute z-20 -top-[30px] md:-top-[40px] left-1/2 transform -translate-x-1/2  h-14 md:h-20 w-auto object-cover"
        />

        <div className="bg-[#17191a] w-full h-full relative pt-8">
          <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row py-10 px-6 bg-[#17191a] gap-8 justify-between">
            <div className="flex w-full md:w-auto">
              <div className="flex flex-wrap space-x-6 items-end justify-center md:justify-start gap-4">
                <a href="">
                  <img
                    src={"./images/logo-vda.svg"}
                    alt={"Partneriai"}
                    className="max-h-12 w-full"
                  />
                </a>
                <a href="">
                  <img
                    src={"./images/logo-vd-ezeras.svg"}
                    alt={"Partneriai"}
                    className="max-h-12 w-full"
                  />
                </a>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-white col-span-full align-top leading-[1]">
                    Partneriai
                  </p>
                  <div className="flex space-x-4">
                    <a href="">
                      <img
                        src={"./images/partneriai-21.webp"}
                        alt={"Partneriai"}
                        className="max-h-5"
                      />
                    </a>
                    <a href="">
                      <img
                        src={"./images/partneriai-22.webp"}
                        alt={"Partneriai"}
                        className="max-h-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-4 w-full md:w-auto flex flex-col md:items-end items-center justify-between">
              <div className="flex space-x-4">
                <a href="">
                  <img
                    src={"./images/soc-med-facebook.webp"}
                    alt={"Social Media"}
                    className="h-5 w-auto object-cover"
                  />
                </a>
                <a href="">
                  <img
                    src={"./images/soc-med-linkedin.webp"}
                    alt={"Social Media"}
                    className="h-5 w-auto object-cover"
                  />
                </a>
                <a href="">
                  <img
                    src={"./images/soc-med-insta.webp"}
                    alt={"Social Media"}
                    className="h-5 w-auto object-cover"
                  />
                </a>
                <a href="">
                  <img
                    src={"./images/soc-med-youtube.webp"}
                    alt={"Social Media"}
                    className="h-5 w-auto object-cover"
                  />
                </a>
              </div>
              <p className="text-white text-sm text-center md:text-right leading-[1]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
