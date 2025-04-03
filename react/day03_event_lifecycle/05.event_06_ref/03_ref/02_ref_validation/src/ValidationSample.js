// rsc
import React, { useRef, useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");
  // const [clicked, setClicked] = useState(false);
  // const [validated, setValidated] = useState(false);

  const inputId = useRef(null);
  const inputPw = useRef(null);

  const [data, setData] = useState({
    id: "", // id input 양식의 양방향을 위한 state
    password: "", // password input 양식의 양방향을 위한 state
    clicked: false, // 검증하기 버튼이 클릭됐는지 여부를 확인하기 위해 추가
    validated: false, // validation을 통과했는지  여부를 확인하기 위해 추가
  });

  const validation = () => {
    if (data.password.trim() === "" || data.password.length < 8) {
      alert("비밀번호를 8자 이상 입력하세요");
      inputPw.current.focus();
      return false;
    }
    if (data.id.trim() === "") {
      alert("아이디를 입력하세요");
      inputId.current.focus();
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = () => {
    setData({
      ...data,
      clicked: true,
      validated: validation(),
    });
  };

  const { id, password, clicked, validated } = data;
  return (
    <div>
      {/* JSX에서 label을 작성할 때 for가 아닌 htmlFor를 사용한다. */}
      <label htmlFor="id">
        아이디 :
        <input
          type="text"
          className={clicked ? (validated ? "success" : "failure") : ""}
          id="id"
          ref={inputId}
          value={id}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        비밀번호 :
        <input
          type="password"
          className={clicked ? (validated ? "success" : "failure") : ""}
          id="password"
          ref={inputPw}
          value={password}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
