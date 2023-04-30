import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import img_1 from "../../public/images/slider/img_6.png";
import img_2 from "../../public/images/slider/img_1.jpg";
import img_3 from "../../public/images/slider/img_2.jpg";
import img_4 from "../../public/images/slider/img_5.jpg";
import img_5 from "../../public/images/slider/img_12.jpg";
import { BsArrowRightShort } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="container hero ">
      <div className="text-center hero__content">
        <h1 className="hero__title">Grow your business online</h1>
        <p className="hero__paragragh">
          IDCode Software's specialization in web development and UI design
          offers a unique opportunity for employees looking to work in a dynamic
          and innovative field.
        </p>
        <div className="product__left__btns flex">
          <button className="main-btn flex-center ">
            Get the service
            <span className="flex-center">
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
      <div className="hero__inner">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={img_1} alt="img_1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_2} alt="img_1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_3} alt="img_1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_4} alt="img_1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_5} alt="img_1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
