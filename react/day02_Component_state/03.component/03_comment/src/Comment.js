//rsf
import React from "react";
import UserInfo from "./component/UserInfo";

function Comment(props) {
  return (
    <div>
      <UserInfo author={props.author} />
      <div>{props.text}</div>
      <div>{props.date.toLocaleDateString()}</div>
      {/* toLocaleDateString 스펠링 주의!! */}
    </div>
  );
}

export default Comment;
