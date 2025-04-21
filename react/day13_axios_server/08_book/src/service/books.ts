import { Book, BookSearchParams } from "@/types/book";
import { localAxios } from "@/utils/http-commons";

// 전체 도서 조회
export const searchAllBooks = async (params: BookSearchParams): Promise<Book[]> => {
  const axios = localAxios();
  const { data } = await axios.get("/book", { params });
  return data.books || [];
};

// 개별 도서 조회
export const searchBook = async (isbn: string): Promise<Book> => {
  const axios = localAxios();
  const { data } = await axios.get(`/book/${isbn}`);
  return data;
};

// 도서 수정
export const updateBook = async (book: Book): Promise<Book> => {
  const axios = localAxios();
  const { data } = await axios.put(`/book/${book}`, book);
  return data;
};

// 도서 삭제
export const deleteBook = async (isbn: string): Promise<void> => {
  const axios = localAxios();
  const { data } = await axios.delete(`book/${isbn}`);
  return data;
};
