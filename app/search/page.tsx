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
    <div className={styles.search_wrap}>
      <div className={styles.result}>'<strong>{name}</strong>'에 대한 검색결과</div>
      {goods && (name && goods.some(p => p.text.includes(name)) ? (
        <>
          <div>총 {goods.filter(p => p.text.includes(name)).length}건</div>
          <ul>
            {goods
              .filter(p => p.text.includes(name))
              .map(p => (
                <li key={p.id}>          
                  <Goods id={p.id} poster={p.poster} text={p.text} before={p.before} per={p.per} price={p.price} review={p.review}/>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <div className={styles.no_data}>
          검색된 상품이 없습니다.<br/>다른 검색어를 입력해주세요.
        </div>
      ))}
    </div>
  );
}