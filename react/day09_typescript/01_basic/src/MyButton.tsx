import React from "react";

// const MyButton = ({ title }: { title: string }) => {
//   return (
//     <div>
//       <button>{title}</button>
//     </div>
//   );
// };

// props를 두 개 이상 받을 때 인터페이스 만들기
interface MyButtonProps {
  title: string;
  disabled: boolean;
}

const MyButton = ({ title, disabled }: MyButtonProps) => {
  return (
    <div>
      <button disabled={disabled}>{title}</button>
    </div>
  );
};

export default MyButton;
