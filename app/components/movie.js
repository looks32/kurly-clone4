"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Moive({title, id, poster_path}){
    const router = useRouter();
    const onClick = () => {
        router.push(`/goods/${id}`);
    };
    return(
        <li>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`goods/${id}`}>{title}</Link>
        </li>
    )
}