"use client";

import React, { useEffect, useState } from "react";
import Goods from "./goods";
import styles from "../styles/specialgoods.module.css";

export default function SpecialGoods(props) {

    const [hour, setHour] = useState(23 - new Date().getHours());
    const [minute, setMinute] = useState(59 - new Date().getMinutes());
    const [second, setSecond] = useState(59 - new Date().getSeconds());
  
    useEffect(() => {
      const time = setInterval(() => {
        setHour(23 - new Date().getHours());
        setMinute(59 - new Date().getMinutes());
        setSecond(59 - new Date().getSeconds());
      }, 1000);
      return () => clearInterval(time);
    }, []);

  return (
    <div className={styles.goods_wrap}>
        <div className={styles.text_area}>
            <strong>{props.tit}</strong>
            <span className={styles.sub_text}>{props.subText}</span>
            <p className={styles.clock_area}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_2"><rect width="36" height="36" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,3.75,3.75)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,14.25,14.25)"><path fill="rgb(189,118,255)" fillOpacity="1" d=" M14,0 C14,7.73199987411499 7.73199987411499,14 0,14 C-7.73199987411499,14 -14,7.73199987411499 -14,0 C-14,-7.73199987411499 -7.73199987411499,-14 0,-14 C7.73199987411499,-14 14,-7.73199987411499 14,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="2" d=" M14.25,8.293999671936035 C14.25,8.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="2" d=" M20.25,14.293999671936035 C20.25,14.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035"></path></g></g></g></svg>
                <span className={styles.clock}>{hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</span>
            </p>
            <p className={styles.last_text}>{props.lastText}</p>
        </div>
        <div className={styles.goods_list}>
            {props.goods && props.goods.filter((slide) => slide.today === props.today).map((slide) => (
              <Goods key={slide.id} text={slide.text} poster={slide.poster} per={slide.per} before={slide.before} price={slide.price} review={slide.review}/>
            ))}
        </div>
    </div>
  );
}
