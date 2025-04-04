import { useState } from "react";
import "./App.css";
import Info from "./Info";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button
        onClick={(params) => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} {/* visible 값이 true면 Info가 보이게 */}
    </div>
  );
}

export default App;
