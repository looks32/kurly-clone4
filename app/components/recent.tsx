import React from 'react';
import styles from '../styles/recent.module.css';

export default function Recent() {
  return (
	<div className={styles.recent_wrap}>최근 본 상품</div>
	// 일정 높이 이상 되면 fixed로 움직이게.
	// 1개 이상 부터 출현
	// 3개 이상부터 slide 활용
  )
}
