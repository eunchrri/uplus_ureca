/**
 * ref
 * react에서 DOM요소에 직접 접근할 수 있도록 연결하는 기능
 * - input 요소에 단방향으로 연결하기
 * - input 요소에 focus 주기
 * - 스크롤 박스 조작하기
 * - canvas 요소에 그림 그리기
 *
 * 클래스형 컴포넌트
 * 형식 1]
 * <요소  ref={ ref =>{this.input=ref}}/>
 *
 * 형식 2]
 * 속성명 =  React.createRef();
 * <요소  ref={this.속성명}/>
 *
 * 함수형
 * const 변수명 = useRef(null);
 * <요소  ref={변수명}/>
 */

import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  // data 검증 실패 시 focus를 주기 위한 ref 설정
  inputId = React.createRef();
  inputPw = React.createRef();

  // 폼 검증 => 양방향
  // est
  state = {
    id: "", // id input 양식의 양방향을 위한 state
    password: "", // password input 양식의 양방향을 위한 state
    clicked: false, // 검증하기 버튼이 클릭됐는지 여부를 확인하기 위해 추가
    validated: false, // validation을 통과했는지  여부를 확인하기 위해 추가
  };

  validation = () => {
    if (this.state.password === "" || this.state.password.length < 8) {
      alert("비밀번호를 8자 이상 입력하세요");
      this.inputPw.current.focus();
      return false;
    }
    if (this.state.id === "") {
      alert("아이디를 입력하세요");
      this.inputId.current.focus();
      return false;
    } else {
      return true;
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value, // 동적으로 KEY 변경하려면 대괄호 사용하기
    });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.validation(),
    });
  };

  render() {
    const { id, password, clicked, validated } = this.state;

    return (
      <div>
        {/* JSX에서 label을 작성할 때 for가 아닌 htmlFor를 사용한다. */}
        <label htmlFor="id">
          아이디 :
          <input
            type="text"
            className={clicked ? (validated ? "success" : "failure") : ""}
            id="id"
            ref={this.inputId}
            value={id}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          비밀번호 :
          <input
            type="password"
            className={clicked ? (validated ? "success" : "failure") : ""}
            id="password"
            ref={this.inputPw}
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
