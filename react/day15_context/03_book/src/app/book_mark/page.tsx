"use client";
import styles from "@/app/book_mark/book_mark.module.scss";
import { useBookMarkContext } from "@/store/book-mark";

export default function BookMark() {
  // 북마크된 책 목록을 가져오는 로직을 여기에 추가
  const { bookMark, removeBookMark, removeAllBookMark } = useBookMarkContext();

  return (
    <div className={styles.bookList}>
      <button className={styles.registerButton} onClick={removeAllBookMark}>
        모두 삭제
      </button>
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
          {/* 북마크된 책 목록을 여기에 추가 */}
          {bookMark.length > 0 ? (
            bookMark.map((book) => (
              <tr key={book.isbn}>
                <td>
                  <img
                    src={`/assets/images/${book.img}`}
                    alt={book.title}
                    className="book-thumbnail"
                  />
                </td>
                <td>{book.isbn}</td>
                <td>
                  <a href={`/book/${book.isbn}`} className="book-link">
                    {book.title}
                  </a>
                </td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                  <button className={styles.searchButton} onClick={() => removeBookMark(book.isbn)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "20px" }}>
                북마크된 도서가 없습니다.
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
