"use client";
import styles from "@/app/book_mark/book_mark.module.scss";
import { useBookMarkContext } from "@/store/book-mark";
import { useCallback } from "react";
import BookMarkItem from "@/components/book_mark/BookMarkItem";

export default function BookMark() {
  // 북마크된 책 목록을 가져오는 로직을 여기에 추가
  const { removeAllBookMark, bookMark, loaded } = useBookMarkContext();
  const handlerRemoveAll = useCallback(() => {
    removeAllBookMark();
  }, []);

  if (!loaded || bookMark === null) {
    return (
      <div className="styles.bookList">
        <p style={{ textAlign: "center", padding: "1rem" }}>즐겨찾기 목록을 불러오는 중....</p>
      </div>
    );
  }
  return (
    <div className={styles.bookList}>
      <div>
        <button className={styles.registerButton} onClick={handlerRemoveAll}>
          모두 삭제
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>이미지</th>
            <th>책 일련 번호</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {bookMark.length > 0 ? (
            bookMark.map((book) => <BookMarkItem key={book.isbn} book={book}></BookMarkItem>)
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                북마크 내용이 비었습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
  );
}
