import React, { useState } from "react";
/*
  배열.map(callback(currentValue, index, array)
          ,[this]) => 배열에 하나하나 처리하고 싶을 때 map
  callback
    currentValue : 현재 처리하고 있는 요소
    index : 현재 처리하고 있는 요소의 index
    array : 원본 배열 
  this : callback함수에서 사용할 this

  key : 
    컴포넌트의 배열을 랜더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위한 속성
    key는 컴포넌트를 식별할 유일값으로 사용해야 한다. 
    없다면 index를 사용하기 
*/

const IterationSample = () => {
  const handleRemove = (id) => {
    /* 
      배열.filter(callback)
      currentValue, index, array
      조건에 맞는 요소들로만 새로운 배열을 생성해서 리턴
    */
    const newNameList = names.filter((name) => id != name.id); // id !== name.id
    setNames(newNameList);
  };

  const handleClick = () => {
    //배열.concat() : 기존의 배열을 직접 수정하지 않고 새로운 배열을 생성해서 반환한다.
    const newNames = names.concat({ id: nextId, text: inputText });
    setNames(newNames);
    setNextId(nextId + 1);
    setInputText("");
  };

  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "바람" },
    { id: 4, text: "봄" },
    { id: 5, text: "꽃망울" },
  ]);

  // input 양식을 위한 state 선언
  const [inputText, setInputText] = useState(""); // 양방향 처리

  // names 배열의 id를 관리하는 state 선언
  const [nextId, setNextId] = useState(6);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onClick={() => {
        handleRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
