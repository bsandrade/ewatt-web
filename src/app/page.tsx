"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import styles from "./page.module.css";
import { CarouselImage } from "@/components";
export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.carousel} >
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          enabled: true
        }}
        className={styles.swiper}
        style={{
          /* @ts-ignore */
          "--swiper-pagination-color": "var(--primary)",
          "--swiper-pagination-bullet-inactive-color": "var(--background)",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "13px",
          "--swiper-pagination-bullet-horizontal-gap": "0.5rem"
        }}
      >
        <SwiperSlide className={styles.swiperSlideMod}>
          <CarouselImage
            src='/asset1.jpg'
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlideMod}>
          <CarouselImage
            src='/asset1.jpg'
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlideMod}>
          <CarouselImage
            src='/asset1.jpg'
            alt="image1"
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </main>
  );
}
