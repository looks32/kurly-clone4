import { getIronSession } from 'iron-session';
import { cookies } from "next/headers";

interface SessionContent {
    id?:number
}

export default function getSession(){
    return getIronSession<SessionContent>(cookies(), {
        cookieName : "kully",
        password : "3oWsGGyNJk8yvzFdwC3cXNkGeJTR5EbxABDH6Vf"
        // 원래는 .env 파일 안에 넣어두어야함
    });
}