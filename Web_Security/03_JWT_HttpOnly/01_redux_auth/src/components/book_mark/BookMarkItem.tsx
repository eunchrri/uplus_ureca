"use client";

import "./BookMarkItem.scss";
import Link from "next/link";
import { useCallback } from "react";
import { useBookmark } from "@/store/hooks/bookmarkHook";
import { BookProps } from "@/types/book";

const BookMarkItem = ({ book }: BookProps) => {
  //////////Bookmark 커스텀 훅을 통해 removeBookMark 액션함수 전달 받기
  const { removeBookMark } = useBookmark();

  //////////삭제 버튼을 위한 이벤트 함수 작성하기
  const handleRemove = useCallback(() => {
    removeBookMark(book.isbn);
  }, [book, removeBookMark]);

  return (
    <tr className="book-row" key={book.isbn}>
      <td>
        <img src={`/assets/images/${book.img}`} alt={book.title} className="book-thumbnail" />
      </td>
      <td>{book.isbn}</td>
      <td>
        <Link href={`/books/${book.isbn}`}>{book.title}</Link>
      </td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>
        {/*  //////////이벤트 등록하기  */}
        <button className="select-button" onClick={handleRemove}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default BookMarkItem;
