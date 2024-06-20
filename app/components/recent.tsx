"use client";

import React, { useState, useEffect } from 'react';
import styles from '../styles/recent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


export default function Recent() {

	const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() === '') return;

        const newItems = [...items, inputValue];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        setInputValue('');
    };
	
  return (
	
	
	<>
		<input
			type="text"
			value={inputValue}
			onChange={handleChange}
			placeholder="값을 입력하세요"
		/>
		<button onClick={handleAddItem}>추가</button>

		{!items.length == 0 ?
			<div className={styles.recent_wrap}>
			<p className={styles.tit}>최근 본 상품</p>
				<Swiper
				slidesPerView={3}
				direction="vertical"
				loop={false}
				className={styles.recent_swiper}
				>
					{
						items.map((item, i)=>(
							<SwiperSlide key={i} className={styles.slide_cont}>
								<div>{item}</div>
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
