import getSession from "./session";
import db from "./db";

export async function getUser(){
    const session = await getSession()
    if(session.id){
        const user = await db.user.findUnique({
            where:{
                id : session.id
            }
        });
        if (user) {
            return user;
        }
    }
    //notFound(); // section이 없으면 notfound 페이지로 보내준다 (근데 안됨;)
}