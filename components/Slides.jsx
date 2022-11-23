import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slides() {
  return (
    <div className="h-[70vh] ">
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
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/Cambium.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/cisco.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/Mikrotik.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/mimosa.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/odoo.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/tp-link.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/ventajas/Empresas 1/Ubiquiti.png" className="bg-black dark:bg-transparent"/>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
