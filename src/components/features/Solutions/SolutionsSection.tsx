import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Autoplay } from "swiper/modules";
import RadialGradient from "@/components/common/RadialGradient.tsx";
import { Solution } from "@/interfaces/models/Solutions";

// Import Swiper styles
import "swiper/css";
// Import Swiper and modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

interface SolutionsProps {
  items: Solution[];
}

export default function SolutionsSection({
  items,
}: SolutionsProps): React.JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  // We'll increment this key each time we cross the 768px threshold
  const [swiperKey, setSwiperKey] = useState<number>(0);

  useEffect(() => {
    const handleResize = (): void => {
      const nowMobile: boolean = window.innerWidth < 768;
      if (nowMobile !== isMobile) {
        setIsMobile(nowMobile);
        // Force destroy & re-init by changing key
        setSwiperKey((prev: number): number => prev + 1);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section
      data-aos="zoom-in-up"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-easing="ease-in-out-cubic"
      className="w-full max-w-[900px] max-h-[400px] mx-auto relative isolate overflow-hidden flex flex-col items-center justify-center"
    >
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={1200}
        centerOpacity={1}
        outerOpacity={0}
        className="absolute -translate-y-[400px] right-1/2 translate-x-1/2"
      />
      <h2 className="font-bold text-4xl w-full pb-4">Iššūkiai</h2>
      <Swiper
        key={swiperKey}
        modules={[Grid, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        // autoplay={{
        //   delay: 3000,
        // }}
        // loop
        slidesPerView={1}
        slidesPerGroup={1}
        grid={{
          rows: 2,
          fill: "column",
        }}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
      >
        {items.map(
          (solution: Solution): React.JSX.Element => (
            <SwiperSlide key={solution.id} className="!bg-transparent p-4">
              <div className="text-white p-4 text-left font-grotesk h-full !bg-[#17191a] rounded-lg shadow-[inset_0_0px_10px_0px_theme(colors.primary-dark/0.1),0_0px_10px_0px_theme(colors.secondary-dark/0.1)]">
                <div className="font-bold text-xl pb-2 leading-tight text-secondary-dark uppercase">
                  {solution.title}
                </div>
                <p>{solution.description}</p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
}
