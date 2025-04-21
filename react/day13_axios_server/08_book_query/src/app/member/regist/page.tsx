"use client";
import { useRouter } from "next/navigation";
import styles from "./regist.module.scss";
import { useRef } from "react";
import { registerMember } from "@/service/member";
const MemberRegist = () => {
  const router = useRouter();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleRegister = async () => {
    const id = idRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";
    const name = nameRef.current?.value.trim() || "";

    if (!id || !password || !name) {
      alert("아이디, 비밀번호, 이름은 필수 입력 사항입니다.");
      return;
    }

    const member = {
      id,
      password,
      name,
      email: emailRef.current?.value.trim() || undefined,
      address: addressRef.current?.value.trim() || undefined,
      phone: phoneRef.current?.value.trim() || undefined,
    };

    try {
      await registerMember(member);
      alert("회원 가입이 완료되었습니다.");
      router.push("/"); // 홈으로 이동
    } catch (error) {
      alert("회원 가입에 실패했습니다. 다시 시도해 주세요.");
      console.error("회원 가입 실패:", error);
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption>회원 가입</caption>
        <tbody>
          <tr>
            <td>아 이 디</td>
            <td>
              <input type="text" ref={idRef} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" ref={passwordRef} />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" ref={nameRef} />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input type="email" ref={emailRef} />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input type="text" ref={addressRef} />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input type="text" ref={phoneRef} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonGroup}>
        <button className={styles.registerButton} onClick={handleRegister}>
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default MemberRegist;
