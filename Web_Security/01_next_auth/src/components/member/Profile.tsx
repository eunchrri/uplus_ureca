"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("session.....", session);
  });
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  const handleLogout = () => {
    signOut();
    router.push("/books");
  };

  //////////todo12 state에 회원 정보가 없는 경우 로그인 버튼을 리턴
  if (!session)
    return (
      <div>
        <button onClick={handleLogin}> 로그인</button>
        <Link href="/member/regist">
          <button>회원가입</button>
        </Link>
      </div>
    );

  //////////todo13.state에 회원 정보가 있는 경우 회원정보 및 로그아웃 버튼 리턴하기
  return (
    <div>
      <span>{session.userId}님</span>
      <Link href="/member">
        <button>회원정보</button>
      </Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
