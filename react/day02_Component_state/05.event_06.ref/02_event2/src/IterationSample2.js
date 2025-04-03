/**
 * IterationSample.js => IterationSample2.js
 * => 함수형 컴포넌트를 클래스형 컴포넌트로 전환해보기
 *
 * ※ 기능 정리 (원래 함수형에서 했던 기능)
 *
 * 내가 구현해야 할 기능은 총 5가지:
 *    1. 초기 names 배열 상태 => state에서 정의
 *    2. inputText를 위한 입력 상태 => state에서 정의
 *    3. nextId로 고유 ID 관리 => state에서 정의
 *    4. handleChange, handleClick, handleRemove 메서드 => 각각 함수 구현하기
 *    5. render() 안에 입력창, 버튼, 리스트 렌더링
 */

// rcc
import React, { Component } from "react";

class IterationSample2 extends Component {
  // 1. state 정의 : est
  // names: 렌더링할 리스트 요소들
  // inputText: 입력 필드의 값
  // nextId: 새로 추가될 항목의 고유 ID

  state = {
    names: [
      { id: 1, text: "눈사람" },
      { id: 2, text: "얼음" },
      { id: 3, text: "바람" },
      { id: 4, text: "봄" },
      { id: 5, text: "꽃망울" },
    ],
    inputText: "",
    nextId: 6,
  };

  // 2. handleChange 구현
  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  // 3. handleClick 구현
  // concat()은 원본 배열을 수정하지 않고 새 배열을 반환 (불변성 유지)

  handleClick = () => {
    const { names, inputText, nextId } = this.state;
    const newNames = names.concat({ id: nextId, text: inputText });
    this.setState({
      names: newNames,
      inputText: "",
      nextId: nextId + 1,
    });
  };

  // 4. handleRemove 구현
  // filter(): 조건을 만족하는 요소만 남긴 새 배열 반환
  // 클릭된 항목의 id와 다른 항목만 남긴다 → 삭제 기능 구현

  handleRemove = (id) => {
    const newNames = this.state.names.filter((name) => name.id !== id);
    this.setState({ names: newNames });
  };

  // 5. render() JSX 작성
  // state가 변할 때마다 랜더링 됨.
  // 버튼 클릭 또는 항목 삭제 시 state 변경 → render() 자동 재호출되어 UI 갱신됨

  render() {
    /*
     * this.state.names 혹은 this.state.inputText 이렇게 접근해야 하지만
     * 귀찮은 작업이기 때문에 아래처럼 구조분해할당하여 로컬변수로 만들어서 사용하자.
     * => 구조 분해 할당으로 this.state를 매번 쓰지 않아도 되게 함 (코드 가독성 향상)
     */

    const { names, inputText } = this.state; // 여기가 구조분해 할당
    const nameList = names.map((name) => (
      <li key={name.id} onClick={() => this.handleRemove(name.id)}>
        {name.text}
      </li>
    ));

    return (
      <div>
        <input type="text" value={inputText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample2;

/**
 * 👉 클래스형 컴포넌트의 기본 구조와 상태 관리, 이벤트 처리, 리스트 렌더링 학습
 * 👉 함수형 vs 클래스형 차이를 직접 구현해보며 이해도 강화
 */
