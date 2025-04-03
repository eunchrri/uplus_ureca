// 함수형 컴포넌트로 바꿔보기 rsc

import React, { useRef } from "react";

const OneWayBind = () => {
  const inputId = useRef(null); // 클래스형: inputId = React.createRef();
  const inputPw = useRef(null);

  const handleClick = () => {
    const id = inputId.current.value; // 클래스형: const id = this.inputId.current.value;
    const pw = inputPw.current.value;
    console.log("id:", id, "pw:", pw);
    inputId.current.value = ""; // 클래스형: this.inputId.current.value = "";
    inputPw.current.value = "";
  };

  return (
    <div>
      <label htmlFor="id">
        아이디:
        <input type="text" id="id" ref={inputId} />
      </label>
      <label htmlFor="pw">
        비밀번호:
        <input type="password" id="pw" ref={inputPw} />
      </label>
      <button onClick={handleClick}>검증하기</button>
    </div>
  );
};

export default OneWayBind;
