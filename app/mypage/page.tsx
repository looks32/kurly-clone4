import { getUser } from "../lib/getuser";
import Mypage from "../components/mypage";

export default async function MyPageArea() {
  const user = await getUser();

  if (!user) {
    return <div>로그인 후에 진입해주세요.</div>;
  }

  return <Mypage initialState={user} />;
}