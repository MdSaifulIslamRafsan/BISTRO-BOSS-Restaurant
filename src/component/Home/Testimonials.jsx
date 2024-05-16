import SectionTitle from "../SharePage/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(()=>{
        const reviewsData = async () =>{
            const response = await fetch('reviews.json');
            const data = await response.json();
            setReviews(data);
        }
        reviewsData();
    },[]);
  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review => <SwiperSlide key={review?._id}>
                    <div className="mx-32 text-center space-y-8 my-10">
                    <Rating className="max-w-[150px] mx-auto" value={review?.rating}></Rating>
                    <FaQuoteLeft className="text-5xl mx-auto" />
                        <p>{review?.details}</p>
                        <h3 className="text-2xl text-[#CD9003]">{review?.name}</h3>
                    </div>
                </SwiperSlide>)
            }
          
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
