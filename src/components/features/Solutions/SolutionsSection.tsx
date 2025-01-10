import { Solution } from "../../../interfaces/models/Solutions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

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
}: SolutionsProps): JSX.Element {
  return (
    <section className="w-full overflow-hidden">
      <h1 className="">Issukiai</h1>
      <Swiper
        modules={[Grid, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        className="mySwiper max-w-[900px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
              rows: 2,
              fill: "row",
            }, // Disable grid for mobile
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            }, // Disable grid for tablet
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 2,
              fill: "row",
            }, // Disable grid for small desktop
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
      >
        {items.map(
          (solution: Solution): JSX.Element => (
            <SwiperSlide key={solution.id} className="!bg-transparent">
              <div className="text-white text-left font-grotesk mx-6 mb-8">
                <div className="font-bold text-xl pb-2 leading-tight text-secondary-dark">
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
