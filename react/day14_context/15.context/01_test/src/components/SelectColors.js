import React, { useCallback } from "react";
import { useColorContext } from "../store/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { changeColor, changeSubColor } = useColorContext();

  const handleColor = useCallback(
    (color) => {
      changeColor(color);
    },
    [changeColor]
  );

  const handleSubColor = useCallback(
    (color) => {
      changeSubColor(color);
    },
    [changeSubColor]
  );

  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => handleColor(color)}
            onContextMenu={(e) => {
              e.preventDefault(); // 기본 동작 방지
              handleSubColor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
