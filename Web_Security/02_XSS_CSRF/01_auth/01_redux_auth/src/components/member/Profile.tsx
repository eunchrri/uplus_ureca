"use client";

import { useAuth } from "@/store/hooks/memberHook";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { memberState, logout } = useAuth();
  const router = useRouter();

  //////////TODO M7. 로그인 버튼을 위한 이벤트 처리
  const handleLogin = () => {
    router.push("/member/login");
  };

  const handleLogout = () => {
    logout();
    router.push("/books");
  };

  if (!memberState?.isLoggedIn)
    return (
      <div>
        <button onClick={handleLogin}>로그인</button>{" "}
        <Link href="/member/regist">
          <button>회원가입</button>
        </Link>
      </div>
    );

  return (
    <div>
      <span>{memberState?.id}님</span>
      <Link href="/member">
        <button>회원정보</button>
      </Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
