"use client";
import { Book } from "@/types/book";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

/////todo1. 제공할 상태와 상태를 변경할 함수에 대한 타입 설정하기
interface BookMarkContextType {
  bookMark: Book[]; // 북마크를 저장할 배열
  loaded: boolean; // 북마크가 로드되었는지 여부
  addBookMark: (book: Book) => void; // 북마크 추가 함수
  removeBookMark: (isbn: string) => void; // 북마크 삭제 함수
  removeAllBookMark: () => void; // 모든 북마크 삭제 함수
}

/////todo2. createContext()함수로 제공할 context를 생성하기
const BookMarkContext = createContext<BookMarkContextType | null>(null);

/////todo3. 타입에 해당하는 구현부를 Provider로 작성해서 리턴하기
/////type에서 선언한 상태와 함수를 value에 필수로 작성하기
export const BookMarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookMark, setBookMark] = useState<Book[]>([]); // 북마크 상태
  const [loaded, setLoaded] = useState(false); // 북마크가 로드되었는지 여부

  // storage에 저장된 데이터가 있으면 loaded를 true로 설정 => useEffect로 처리 & 처음 한번만 load [] 대괄호 비워두면 한번만 load, 대괄호 없으면 매번 load
  useEffect(() => {
    const store = localStorage.getItem("bookmark"); // localStorage에서 key가 bookmark인 데이터 가져오기
    console.log(store);
    if (store) {
      try {
        setBookMark(JSON.parse(store)); // JSON.parse로 문자열을 객체로 변환하여 setBookMark에 저장
      } catch (error) {
        setBookMark([]); // JSON.parse가 실패하면 빈 배열로 초기화
      }
    }
    setLoaded(true); // 북마크가 로드되었음을 true로 설정
  }, []);

  // bookMark 상태가 변경될 때마다 localStorage에 저장 => useEffect로 처리
  useEffect(() => {
    console.log("useEffect ......... loaded", loaded);
    console.log("useEffect ......... bookMark", bookMark);
    if (loaded) {
      localStorage.setItem("bookmark", JSON.stringify(bookMark)); // bookMark 상태를 JSON.stringify로 문자열로 변환하여 localStorage에 저장
    }
  }, [bookMark, loaded]);

  const addBookMark = (book: Book) => {
    setBookMark((prev) =>
      // setBookMark((prev) => (prev.find((item) => (item.isbn === book.isbn)) ? prev: [...prev, book]));
      {
        // find로 중복 체크 후 추가
        const isExist = prev.find((item) => item.isbn === book.isbn); // 중복 체크
        if (isExist) {
          alert("이미 북마크에 추가된 책입니다.");
          return prev; // 중복이면 기존의 북마크를 그대로 리턴
        }
        return [...prev, book]; // 기존의 북마크에 추가
      }
    );
  };

  const removeBookMark = (isbn: string) => {
    setBookMark((prev) => prev.filter((item) => item.isbn !== isbn));
  };

  const removeAllBookMark = () => {
    setBookMark([]);
  };

  const returnValue = useMemo(
    () => ({ bookMark, loaded, addBookMark, removeBookMark, removeAllBookMark }),
    [bookMark, loaded]
  );

  return <BookMarkContext.Provider value={returnValue}>{children}</BookMarkContext.Provider>;
};

/////todo4 커스텀 훅: useMemberContext
export const useBookMarkContext = () => {
  const context = useContext(BookMarkContext);
  if (!context) {
    throw new Error("useBookMarkContext must be used within a BookMarkProvider");
  }
  return context;
};
