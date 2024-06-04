"use server";

import getSession from "./session";
import { redirect } from "next/navigation";

export const logOut = async () => {
    
    const session = await getSession();
    // seetion을 삭제하고 홈으로 보낸다.
    session.destroy();
    redirect('/');
}