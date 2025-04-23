"use client";

import { useCallback } from "react";
import { useColorHooks } from "@/store/colorhooks";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  ////////////TODO 10.  useAppDispatch()를 통해 dispatch
  const { changeColor, changeSubColor } = useColorHooks();

  ////////////TODO 11. dispatch함수로 changeColor action 수행하기
  const handleSetColor = useCallback((color: string) => {
    changeColor(color);
  }, []);

  ////////////TODO 12. dispatch함수로 changeSubColor action 수행하기
  const handleSetSubColor = useCallback((subcolor: string) => {
    changeSubColor(subcolor);
  }, []);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
            onClick={() => handleSetColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              handleSetSubColor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
