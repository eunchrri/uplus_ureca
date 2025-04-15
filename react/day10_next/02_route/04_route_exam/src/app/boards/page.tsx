import Link from "next/link";

const Board = () => {
  return (
    <div>
      <h1>Book View</h1>
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

export default Board;
