import Link from "next/link";
import React from "react";

const Notice = () => {
  return (
    <div>
      <h1>Notice View</h1>
      <div>
        <div>
          <Link href="/boards/1">게시글 1</Link>
        </div>
        <div>
          <Link href="/boards/2">게시글 2</Link>
        </div>
      </div>
    </div>
  );
};

export default Notice;
