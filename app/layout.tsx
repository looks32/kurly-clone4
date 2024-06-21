import "./styles/reset.css";
import Header from "./components/header";
import TopBtn from "./components/top-btn";
import { Metadata } from "next";
import { getUser } from "./lib/getuser";
import Recent from "./components/recent";
import RecoilRootWrapper from "./components/recoilWrapper";

export const metadata = {
  title: {
    template: "%s | 컬리마켓",
    default: "컬리마켓",
  },
  description: "컬리마켓 클론 사이트입니다.",
};

export default async function RootLayout({ children }) {

  const user = await getUser();

  return (
    <html lang="ko">
      <link rel="icon" href="https://res.kurly.com/favicon.ico"></link>
      <body>
        <RecoilRootWrapper>
          <Header user={user}/>
          {children}
          <Recent/>
          <TopBtn/>
        </RecoilRootWrapper>
      </body>
    </html>
  )
}
