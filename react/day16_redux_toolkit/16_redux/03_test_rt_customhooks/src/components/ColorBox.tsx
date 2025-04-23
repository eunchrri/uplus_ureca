"use client";

import { useColorHooks } from "@/store/colorhooks";

const ColorBox = () => {
  const { color, subColor } = useColorHooks();

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
