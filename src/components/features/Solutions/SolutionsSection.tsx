import { Solution } from "../../../interfaces/models/Solutions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import RadialGradient from "../../common/RadialGradient";

// Import Swiper styles
import "swiper/css";
// Import Swiper and modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

interface SolutionsProps {
  items: Solution[];
}
const toGreekNumeral = (num: string) => {
  const greekNumerals: { [key: string]: string } = {
    "1": "Αʹ",
    "2": "Βʹ",
    "3": "Γʹ",
    "4": "Δʹ",
    "5": "Εʹ",
    "6": "Ϛʹ", // or 'ΣΤʹ'
    "7": "Ζʹ",
    "8": "Ηʹ",
    "9": "Θʹ",
    "10": "Ιʹ",
    "11": "ΙΑʹ",
    "12": "ΙΒʹ",
    "13": "ΙΓʹ",
    "14": "ΙΔʹ",
    "15": "ΙΕʹ",
    "16": "ΙϚʹ", // or 'ΙΣΤʹ'
    "17": "ΙΖʹ",
    "18": "ΙΗʹ",
    "19": "ΙΘʹ",
    "20": "Κʹ",
  };

  return greekNumerals[num] || num;
};
export default function SolutionsSection({
  items,
}: SolutionsProps): JSX.Element {
  return (
    <section className="w-full relative isolate">
      <RadialGradient
        centerColor="#73ffc9"
        outerColor="#76dcff"
        size={1200}
        centerOpacity={0.1}
        outerOpacity={0}
        className="absolute -translate-y-[400px] right-1/2 translate-x-1/2"
      />
      <h1 className="">Issukiai</h1>
      <Swiper
        modules={[Grid, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={2}
        grid={{
          rows: 2,
          fill: "row",
        }}
        height={400}
        className="mySwiper max-w-[900px] !h-[300px]"
        breakpoints={{
          768: {
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
            <SwiperSlide key={solution.id} className="!bg-transparent p-4">
              <div className="text-white p-4 text-left font-grotesk h-full !bg-[#17191a] rounded-lg shadow-[inset_0_0px_10px_0px_theme(colors.primary-dark/0.1),0_0px_10px_0px_theme(colors.secondary-dark/0.1)]">
                <div className="font-bold text-xl pb-2 leading-tight text-secondary-dark uppercase">
                  <span
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="3000"
                  >
                    {toGreekNumeral(solution.id)}.
                  </span>{" "}
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
