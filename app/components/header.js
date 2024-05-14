"use client";   

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/login">login</Link> {path === "/login" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}