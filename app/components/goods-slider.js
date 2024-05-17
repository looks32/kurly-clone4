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
      text: '[부침명장] 한입아삭 김치전',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_1.png'
    },
    {
      id: 2,
      text: '[마더푸드] 오리지널 쪽갈비',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_2.png'
    },
    {
      id: 3,
      text: '당도선별 성주 참외 1.5kg (4~7입)',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_3.png'
    },
    {
      id: 4,
      text: '[외계인방앗간] 우리쌀 모닝빵 3종',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_4.png'
    },
    {
      id: 5,
      text: '[부침명장] 한입아삭 김치전',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_1.png'
    },
    {
      id: 6,
      text: '[마더푸드] 오리지널 쪽갈비',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_2.png'
    },
    {
      id: 7,
      text: '당도선별 성주 참외 1.5kg (4~7입)',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_3.png'
    },
    {
      id: 8,
      text: '[외계인방앗간] 우리쌀 모닝빵 3종',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_4.png'
    },
    {
      id: 9,
      text: '[부침명장] 한입아삭 김치전',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_1.png'
    },
    {
      id: 10,
      text: '[마더푸드] 오리지널 쪽갈비',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_2.png'
    },
    {
      id: 11,
      text: '당도선별 성주 참외 1.5kg (4~7입)',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_3.png'
    },
    {
      id: 12,
      text: '[외계인방앗간] 우리쌀 모닝빵 3종',
      poster : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1715834378/banner_4.png'
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
