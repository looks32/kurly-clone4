"use server";

import db from "../lib/db";
import { redirect } from "next/navigation";
import getSession from "../lib/session";
import { cookies } from "next/headers";

export async function deleteAccount(){

	const session = await getSession();

	// // db 삭제
	const user = await db.user.delete({
		where : {
			id : session.id
		}
	})
	session.destroy();
	redirect("/members");
}


