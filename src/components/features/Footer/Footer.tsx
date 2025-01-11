

import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full relative flex flex-col md:flex-row py-10 px-6 bg-[#17191a] gap-8 justify-between">
      <img
        src={"./images/3 galvos.svg"}
        alt={"Partneriai"}
        className="absolute top-[-10%] md:top-[-20%] left-1/2 transform -translate-x-1/2  h-14 md:h-20 w-auto object-cover"
      />
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
              src={"./images/soc med-24.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-25.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-26.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-27.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
        </div>
        <p className="text-white text-sm mt-4 text-center md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </footer>
  );
}
