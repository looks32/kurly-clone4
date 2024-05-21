"use client";

import Goods from "../components/goods";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



export default function GoodsSlider(props) {

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      slidesPerGroup={4}
    >
      
      {props.goods && props.goods.filter((slide) => slide.cate === props.cate).map((slide) => (
          <SwiperSlide key={slide.id}>          
            <Goods poster={slide.poster} text={slide.text} before={slide.before} per={slide.per} price={slide.price} review={slide.review}/>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
