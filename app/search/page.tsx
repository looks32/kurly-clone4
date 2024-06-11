"use client"

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Goods from '../components/goods';
import goods from "../json/goods-slider.json";
import styles from '../styles/search.module.css';

export default function Search() {
  const [name, setName] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setName(nameParam);
    }
  }, [searchParams]);

  return (
    <div>
      <div className={styles.result}>'<strong>{name}</strong>'에 대한 검색결과</div>

      {goods && (name && goods.some(slide => slide.text.includes(name)) ? goods.filter(slide => slide.text.includes(name)).map(slide => (
      <div key={slide.id}>          
        <Goods id={slide.id} poster={slide.poster} text={slide.text} before={slide.before} per={slide.per} price={slide.price} review={slide.review}/>
      </div>
    )) :
    <p>검색된 상품이 없습니다.<br/>다른 검색어를 입력해주세요.</p>
  )
}


    </div>
  );
}