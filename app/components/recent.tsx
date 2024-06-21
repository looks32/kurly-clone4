"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/recent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";




export default function Recent() {

	const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, [])

   
  return (
	<>
		{items.length ?
			<div className={styles.recent_wrap}>
			<p className={styles.tit}>최근 본 상품</p>
				<Swiper
				// slidesPerView={'auto'}
				slidesPerView={2}
				direction="vertical"
				spaceBetween={10}
				loop={false}
				className={styles.recent_swiper}
				>
					{
						items.slice().reverse().map((item, i)=>(
							<SwiperSlide key={i} className={styles.slide_cont}>
								<Link href={`/goods/${item.no}`}>
									<div>
										<img src={item.poster} alt={item.no} />
									</div>
								</Link>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		: null}
	</>
	
	// 일정 높이 이상 되면 fixed로 움직이게.
	// 1개 이상 부터 출현
	// 3개 이상부터 slide 활용
  )
}
