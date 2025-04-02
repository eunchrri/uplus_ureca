// rsc
import React from "react";
import Welcome from "./Welcome";

const style = {
  backgroundColor: "black",
  color: "pink",
  fontSize: "30px",
  fontWeight: "bold",
  padding: 6,
};

const App = () => {
  return (
    <div>
      <Welcome style={style}></Welcome>
      <Welcome name="React Component">ureca</Welcome>
      <Welcome name={2}>ureca</Welcome>
    </div>
  );
};

export default App;
