import { useBookMarkContext } from "@/store/book-mark";
import { Book } from "@/types/book";
import Link from "next/link";

interface BookMarkItemProps {
  book: Book;
}

const BookMarkItem = ({ book }: BookMarkItemProps) => {
  const { removeBookMark } = useBookMarkContext(); // 북마크 삭제 함수

  const handleDelete = () => {
    removeBookMark(book.isbn); // 북마크 삭제
  };

  return (
    <tr className="book-row">
      <td>
        <img src={`/assets/images/${book.img}`} className="book-thumbnail" />
      </td>
      <td>{book.isbn}</td>
      <td>
        <Link href={`/book/${book.isbn}`}>{book.title}</Link>
      </td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>
        <button className="select-button" onClick={handleDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
};
