import { Book } from "@/types/book";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useCallback } from "react";

export const useBookMark = () => {
  //////////TODO B6. useAppDispatch 함수로 부터 dispatch 전달받기
  const dispatch = useAppDispatch();

  //////////TODO B7. useAppSelector 함수로 부터 books State 전달받기
  const bookMarkState = useAppSelector((state) => state.bookmark.bookmark);

  //////////TODO B8. dispatch함수로 registBookMark  선언하기
  const registBookMark = useCallback(
    (book: Book) => dispatch({ type: "bookmark/registBookMark", payload: book }),
    [dispatch]
  );
  //////////TODO B9. dispatch함수로 removeBookMark  선언하기
  const removeBookMark = useCallback(
    (isbn: string) => dispatch({ type: "bookmark/removeBookMark", payload: { isbn } }),
    [dispatch]
  );

  //////////TODO B10. dispatch함수로 clearBookMark  선언하기
  const clearBookMark = useCallback(() => dispatch({ type: "bookmark/clearBookMark" }), [dispatch]);

  //////////TODO B11. 상태와 action 함수들 리턴하기
  // isBookMarked: 특정 도서가 북마크에 등록되어 있는지를 확인하는 기능
  return {
    bookMarkState,
    registBookMark,
    removeBookMark,
    clearBookMark,
    isBookMarked: (isbn: string) => !!bookMarkState.find((book) => book.isbn === isbn),
  };
};
