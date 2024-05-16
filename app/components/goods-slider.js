"use client";

import Goods from "../components/goods";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

export default function GoodsSlider() {
  const slideData = [
    {
      id: 1,
      text: '배너1',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_1.png'
    },
    {
      id: 2,
      text: '배너2',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_2.png'
    },
    {
      id: 3,
      text: '배너3',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_3.png'
    },
    {
      id: 4,
      text: '배너4',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_4.png'
    },
    {
      id: 5,
      text: '배너5',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_5.png'
    },
    {
      id: 6,
      text: '배너6',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_6.png'
    },
    {
      id: 7,
      text: '배너7',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_7.png'
    },
    {
      id: 8,
      text: '배너8',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_8.png'
    },
    {
      id: 9,
      text: '배너9',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_9.png'
    },
    {
      id: 10,
      text: '배너10',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_10.png'
    }
  ];


  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={swiper => console.log(swiper)}
    >
      {slideData && slideData.map((slide) => (
          <SwiperSlide key={slide.id}>          
            <Goods/>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
