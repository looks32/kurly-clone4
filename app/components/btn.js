import React from "react";
import styles from "../styles/btn.module.css";

export default function Btn(props) {

    let style

    if(props.color === 'basic'){
        style = styles.basic;
    }

    if(props.color === 'white'){
        style = styles.white;
    }

  return <button className={`${style} ${styles.btn}`}>{props.tit}</button>;
}
