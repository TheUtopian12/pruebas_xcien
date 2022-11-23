import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slides2() {
  return (
    <div className="h-[100vh]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/Aiisa.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/Assetel.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/Coeficiente.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/cogent.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/Evengroup.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 2/Sparkle.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
