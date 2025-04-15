import React from "react";

const BoardDetail = ({ params: { bno } }: { params: { bno: string } }) => {
  console.log("isbn:", bno);
  return (
    <div>
      <h1>Board Detail : {bno}</h1>
    </div>
  );
};

export default BoardDetail;
