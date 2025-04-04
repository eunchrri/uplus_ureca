/*
  간단한 상태는 useState를 사용해도 되지만 다양한 상태 변화를 관리하기 위해
  useReducer를 사용한다.

  useReducer
  - 다양한 컴포넌트의 상황에 따라 state의 상태 관리를 구조적으로 할 수 있는 Hook
  - 상태 변화 로직을 하나의 함수(리듀서)에서 관리할 수 있어서 복잡한 상태 로직을 처리할 때 유용

  const [state, dispatch] = useReducer(reducer, state객체)
  reducer   : dispatch에 의해 호출되어 state를 관리할 함수
  state객체  : 관리할 state

  reducer(state, action) => reducer를 직접 호출하지 않고 dispatch에 의해 호출됨.

  todo 관리할 때
  수정 삭제 등록할 때 3가지 상태일 때
  useReducer 활용하면 좋다.
*/

// rsc
import React, { useReducer, useState } from "react";

const INCREMENT = 1;
const DECREMENT = 2;
const INIT = 3;

// reducer
const reducer = (state, action) => {
  console.log("reducer.....action", action); // action의 타입에 따라 호출
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + parseInt(action.value) };

    case DECREMENT:
      return { value: state.value - parseInt(action.value) };

    case INIT:
      return { value: 1 };

    default:
      return state; // 지정한 action이 아닌 다른 action이 요청된 경우 변하지 않는 state를 전달
  }
};

// useReducer을 이용하여 state 만들기
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const [step, setStep] = useState(1);

  return (
    <div>
      <p>현재 카운터 값은 {state.value} 입니다.</p>
      step:{" "}
      <input
        type="text"
        value={step}
        onChange={(e) => {
          setStep(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: INCREMENT, value: step });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT, value: step });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: INIT, value: step });
        }}
      >
        초기화
      </button>
    </div>
  );
};

export default Counter;
