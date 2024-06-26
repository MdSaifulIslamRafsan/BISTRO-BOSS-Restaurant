import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SharePage/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="" />
            <h3 className="text-3xl bg-opacity-50 bg-black w-full h-full uppercase absolute bottom-0 flex items-end justify-center left-1/2 -translate-x-1/2 pb-4 text-white">
              salads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="" />
            <h3 className="text-3xl bg-opacity-50 bg-black w-full h-full uppercase absolute bottom-0 flex items-end justify-center left-1/2 -translate-x-1/2 pb-4 text-white">
              Pizzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="" />
            <h3 className="text-3xl bg-opacity-50 bg-black w-full h-full uppercase absolute bottom-0 flex items-end justify-center left-1/2 -translate-x-1/2 pb-4 text-white">
              Soups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="" />
            <h3 className="text-3xl bg-opacity-50 bg-black w-full h-full uppercase absolute bottom-0 flex items-end justify-center left-1/2 -translate-x-1/2 pb-4 text-white">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide5} alt="" />
            <h3 className="text-3xl bg-opacity-50 bg-black w-full h-full uppercase absolute bottom-0 flex items-end justify-center left-1/2 -translate-x-1/2 pb-4 text-white">
              salads
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
