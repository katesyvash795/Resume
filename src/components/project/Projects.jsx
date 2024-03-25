'use client'
import Image from "next/image";
import styles from "./project.module.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

 export default function Projects (){
return(<div className={styles.containerImage}>
<h1 className={styles.title}>PROJECTS</h1>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg"  alt="img" width={300}  height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg"  alt="img" width={300}  height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="img" width={300}  height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg"  alt="img" width={300}  height={300}/>
        </SwiperSlide>
      </Swiper>
</div>)

 }
