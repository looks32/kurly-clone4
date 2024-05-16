import React from "react";
import styles from "../styles/main-title.module.css";

export default function MainTitle(props) {
  return (
    <div className={styles.tit_area}>
        <strong>{props.mainTit}</strong>
        <span>{props.subTit}</span>
    </div>
    )
 ;
}
