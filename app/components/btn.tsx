"use client";

import styles from "../styles/btn.module.css";
import { useFormStatus } from 'react-dom';
    
export default function Btn(props) {

    const { pending } = useFormStatus();

    let style

    if(props.color === 'basic'){
        style = styles.basic;
    }

    if(props.color === 'white'){
        style = styles.white;
    }

  return <button className={`${style} ${styles.btn}`} type={props.type} disabled={pending}>{pending ? 'loading' : props.tit}</button>;
}
