import React from "react";
import useInput from "./useInputs";

const Info = () => {
  const [state, onChange, reset] = useInput({ name: "", nickname: "" });

  // 구조 분해 할당
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <button onClick={reset}>확인</button>
      </div>
      <div>
        <b>이름: {name}</b>
      </div>
      <div>
        <b>닉네임: {nickname}</b>
      </div>
    </div>
  );
};

export default Info;
