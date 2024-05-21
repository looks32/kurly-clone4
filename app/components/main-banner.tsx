"use client";

import styled from "styled-components";

import Link from 'next/link';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import slideCont from "../json/main-banner.json";

const PrevArrow = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 50%;
  margin: auto 590px auto 0px;
  z-index: 10;
  width: 52px;
  height: 52px;
  text-indent: -9999em;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background: url(https://res.cloudinary.com/dup3ee8is/image/upload/v1716256451/banner_arrow.svg) 50% 50% no-repeat;
  transform: rotate(180deg);
`

const NextArrow = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  margin: auto 0px auto 590px;
  z-index: 10;
  width: 52px;
  height: 52px;
  text-indent: -9999em;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background: url(https://res.cloudinary.com/dup3ee8is/image/upload/v1716256451/banner_arrow.svg) 50% 50% no-repeat;
  transform: rotate(0deg);
`

const PagenationWrap = styled.div`
    position: relative;
    width: 1050px;
    margin: 0px auto;
`

const Pagenation = styled.div`
  position: absolute;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.15);
    z-index: 10;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 55px;
    height: 23px;
    left: unset;
    right: 109px;
    bottom: 20px;
    line-height: 23px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
`

export default function MainBanner() {

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      centeredSlides
      pagination={{ 
        type: 'fraction',
        el: '.swiper-pagination2',
      }}
      navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={swiper => console.log(swiper)}
    >
      {slideCont && slideCont.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={`/event/${slide.id}`}>
              <img src={slide.poster} alt={slide.text} />
            </Link>
          </SwiperSlide>
        ))}
        <PrevArrow className='swiper-prev'>prev</PrevArrow>
        <NextArrow className='swiper-next'>next</NextArrow>
        <PagenationWrap>
          <Pagenation className='swiper-pagination2'></Pagenation>
        </PagenationWrap>
    </Swiper>
  )
}
