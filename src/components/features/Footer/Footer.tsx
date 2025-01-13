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
    <footer className="w-full relative z-10 flex flex-col md:flex-row bg-[#17191a] gap-8 justify-between">
      <img
        src={"./images/3 galvos.svg"}
        alt={"Partneriai"}
        className="absolute z-20 top-[-10%] md:top-[-20%] left-1/2 transform -translate-x-1/2  h-14 md:h-20 w-auto object-cover"
      />

      <div className="absolute w-full rounded-full -top-[900px] left-1/2 -translate-x-1/2">
        <img
          src="./images/rankos.svg"
          alt=""
          className="w-full relative z-10"
          style={{
            transform: `rotate(${rotation.toString()}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        />
        <div className="absolute z-20 inset-0 shadow-[inset_0_0_120px_350px_rgba(10,13,15,1)] rounded-full" />
      </div>
      <div className="bg-[#17191a] w-full h-full relative">
        <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row py-10 px-6 bg-[#17191a] gap-8 justify-between">
          <div className="flex w-full md:w-auto">
            <div className="flex flex-wrap space-x-6 mt-4 items-end gap-4">
              <a href="">
                <img
                  src={"./images/partneriai-19.webp"}
                  alt={"Partneriai"}
                  className="max-h-12"
                />
              </a>
              <a href="">
                <img
                  src={"./images/partneriai-20.webp"}
                  alt={"Partneriai"}
                  className="max-h-12"
                />
              </a>
              <div className="grid grid-cols-2">
                <p className="font-bold text-white col-span-full">Partneriai</p>
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

          <div className=" w-full md:w-auto flex flex-col md:items-end items-center">
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
            <p className="text-white text-sm mt-4 text-center md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
