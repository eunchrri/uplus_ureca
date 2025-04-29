"use client";

import { useCallback, useRef } from "react";
import styles from "./login.module.scss";

import { useAuth } from "@/store/hooks/memberHook";

const MemberLogin = () => {
  //////////TODO M8. id, pssword input form을 위한 ref 선언하기

  //////////TODO M9. 인증을 위해 memberHook에서 함수와 상태 전달받기

  //////////TODO M10. 로그인 버튼을 위한 이벤트 handler 함수 작성하기

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption>로 그 인</caption>
        <tbody>
          <tr>
            <td>아 이 디</td>
            <td>
              <input type="text" placeholder="아이디를 입력하세요" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonGroup}>
        <button className={styles.registerButton}></button>
      </div>
    </div>
  );
};

export default MemberLogin;
