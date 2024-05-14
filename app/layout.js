import "./styles/reset.css";
import Header from "./components/header";
import { Metadata } from "next";

export const metadata = {
  title: {
    template: "%s | 컬리마켓",
    default: "컬리마켓",
  },
  description: "컬리마켓 클론 사이트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
