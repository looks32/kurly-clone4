import Link from "next/link";
import styles from "../styles/btn.module.css";

export default function BtnLink(props) {

    let style

    if(props.color === 'basic'){
        style = styles.basic;
    }

    if(props.color === 'white'){
        style = styles.white;
    }

  return <Link href={props.link} className={`${style} ${styles.btn}`} type={props.type}>{props.tit}</Link>;
}
