"use client";

import { useAppSelector } from "@/store/hooks";

const ColorBox = () => {
  /////////TODO8. useAppSelector를 통해 color 전달 받기
  const color = useAppSelector((state) => state.color.color);

  /////////TODO9. useAppSelector를 통해 subcolor 전달 받기
  const subColor = useAppSelector((state) => state.color.subColor);

  return (
    <div>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: subColor,
        }}
      />
    </div>
  );
};

export default ColorBox;
