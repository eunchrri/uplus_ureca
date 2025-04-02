import logo from "./logo.svg";
import "./App.css";

/*
  component 
  - 기능 단위, 재사용 단위의 객체
  - react ui component를 만드는 방법 
    1. 함수형 
      
       function 함수명(){
         return jsx;
       }

    2. 클래스형
    import {Component} from 'react'
    Class 컴포넌트이름 extends Component{

      render(){ //필수 함수 

        return jsx;
      }
    }

 */

// 함수형 컴포넌트: rsc (props 없는)
// import React from "react";

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

// export default App;

// 클래스형 컴포넌트: rcc
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
*/
