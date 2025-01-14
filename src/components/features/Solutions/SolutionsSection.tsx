import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Autoplay, Navigation } from "swiper/modules";
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
    <div className="relative z-30 isolate mx-4 ">
      <h2 className="font-bold text-4xl w-full max-w-[900px] pb-4 pl-4 mx-auto">
        15 Iššūkių
      </h2>
      <section
        data-aos="zoom-in-up"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-easing="ease-in-out-cubic"
        className="w-full max-w-[900px] p-0 h-[400px] mx-auto relative isolate grid items-center justify-center"
      >
        <Swiper
          key={swiperKey}
          modules={[Grid, Pagination, Autoplay, Navigation]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          grid={{
            rows: 2,
            fill: "column",
          }}
          className="mySwiper overflow-hidden"
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
                <div className="text-white border-2 border-white/10 p-4 text-left font-grotesk h-full !bg-[#17191a] rounded-lg shadow-[inset_0_0px_10px_0px_theme(colors.primary-dark/0.1),0_0px_16px_4px_theme(colors.secondary-dark/0.1)]">
                  <div className="font-bold text-xl pb-2 leading-tight text-secondary-dark uppercase">
                    {solution.title}
                  </div>
                  <p>{solution.description}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        {/* Custom Navigation */}

        <div className="swiper-button-prev -ml-[15px] md:-ml-[28px]"></div>
        <div className="swiper-button-next -mr-[15px] md:-mr-[28px]"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination flex justify-center -mb-[20px]"></div>
      </section>
    </div>
  );
}
