"use client";
import { useEffect, useRef } from "react";
import styles from "./member.module.scss";
import { useQuery } from "@tanstack/react-query";
import { searchMember } from "@/service/member";
export default function MemberDetail() {
  const id = "savagegal"; // 예시 고정 값, 실제로는 API 호출로 가져와야 함
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const {
    data: member,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["member", id],
    queryFn: () => searchMember(id),
  });

  useEffect(() => {
    if (member) {
      passwordRef.current!.value = member.password;
      nameRef.current!.value = member.name;
      emailRef.current!.value = member.email || "";
      addressRef.current!.value = member.address || "";
      phoneRef.current!.value = member.phone || "";
    }
  }, [member]);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>에러 발생: {(error as Error).message}</h1>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>아 이 디</td>
            <td>
              <input type="text" value={id} readOnly />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" ref={passwordRef} readOnly />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" ref={nameRef} readOnly />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input type="email" ref={emailRef} readOnly />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input type="text" ref={addressRef} readOnly />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input type="text" ref={phoneRef} readOnly />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonGroup}>
        <button className={styles.registerButton}>수정</button>
        <button className={styles.registerButton}>탈퇴</button>
      </div>
    </div>
  );
}
