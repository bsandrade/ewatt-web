import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";

import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { CarouselImage } from "../CarouselImage";

export const Carousel = (): JSX.Element => {
    return (
        <Swiper
        className={styles.swiper}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          enabled: true,
        }}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        speed={500}
        watchSlidesProgress
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
    )
}