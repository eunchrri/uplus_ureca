"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./detail.module.scss";
import { localAxios } from "@/utils/http-commons";
import { handleApi } from "@/utils/handleApi";
import { searchAllBooks, searchBook, updateBook, deleteBook } from "@/service/books";
import { useRouter } from "next/navigation";
import { Book } from "@/types/book";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function BookDetail({ params: { isbn } }: { params: { isbn: string } }) {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);
  //입력 form에 ref 달기 위해 선언
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const describRef = useRef<HTMLTextAreaElement>(null);

  //////////////////////todo1. useQuery에서 처리하므로 주석 처리
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  //////////////////////todo2. useQuery 선언하기
  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["book", isbn],
    queryFn: () => searchBook(isbn),
  });

  useEffect(() => {
    if (book) {
      if (titleRef.current) titleRef.current.value = book.title;
      if (authorRef.current) authorRef.current.value = book.author;
      if (priceRef.current) priceRef.current.value = book.price.toString();
      if (describRef.current) describRef.current.value = book.describ;
    }
  }, [book]);

  //////////////////////todo4. queryClient 생성하기
  const queryClient = useQueryClient(); // 수정, 삭제 후 갱신 요청을 위해서 queryClient 생성

  //////////////////////todo5. useMutation을 사용하여 수정, 삭제 처리하기
  const updateMutation = useMutation({
    mutationFn: (uBook: Book) => updateBook(uBook),
    onSuccess: (data) => {
      alert("수정되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["book", isbn] }); // 수정 후 해당 도서 정보 갱신 요청
    },
    onError: (error) => {
      alert("수정 실패");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: (data) => {
      alert("삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["books"] }); // 삭제 후 리스트 갱신
      router.push("/books"); // 삭제 후 도서 목록으로 이동
    },
    onError: (error) => {
      alert("삭제 실패");
    },
  });

  // 수정
  const handleUpdate = useCallback(async () => {
    console.log("수정 중..    isEditMode : ", isEditMode);
    if (isEditMode) {
      // edit mode에서 수정 버튼을 클릭했다면
      // 필수 입력 값 검증 하기
      const title = titleRef.current?.value.trim() || "";
      const author = authorRef.current?.value.trim() || "";

      if (!title) {
        alert("제목을 입력하세요");
        titleRef.current?.focus();
        return;
      }

      if (!author) {
        alert("저자를 입력하세요");
        authorRef.current?.focus();
        return;
      }

      const book: Book = {
        isbn,
        title,
        author,
        price: Number(priceRef.current?.value) || 0,
        describ: describRef.current?.value || "",
        img: "",
      };

      console.log("수정한 내용: ", book);
      updateMutation.mutate(book); // 수정 요청
    }
    setIsEditMode(!isEditMode);
  }, [isEditMode, isbn]);

  // 삭제
  const handleRemove = useCallback(async () => {
    console.log("도서 목록으로 이동");

    const confirmDelete = window.confirm("정말 이 도서를 삭제하시겠습니까?");
    if (!confirmDelete) return;

    deleteMutation.mutate(isbn); // 삭제 요청
    console.log("도서 목록으로 이동");
    // 목록 이동 로직
  }, [isbn]);

  //////////////////////todo4. loading, error에 대한 화면
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{(error as Error).message}</h1>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>도서 상세 정보</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>책 일련 번호</td>
            <td>
              <input
                className={styles.readonly}
                value={isbn}
                type="text"
                name="isbn"
                readOnly={true}
              />
            </td>
          </tr>
          <tr>
            <td>제목</td>
            <td>
              <input
                className={`${!isEditMode ? styles.readonly : styles.input}`}
                type="text"
                name="title"
                ref={titleRef}
                readOnly={!isEditMode}
              />
            </td>
          </tr>
          <tr>
            <td>저자</td>
            <td>
              <input
                className={`${!isEditMode ? styles.readonly : styles.input}`}
                type="text"
                ref={authorRef}
                name="author"
                readOnly={!isEditMode}
              />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input
                className={`${!isEditMode ? styles.readonly : styles.input}`}
                ref={priceRef}
                type="number"
                name="price"
                readOnly={!isEditMode}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.infoLabel}>책 정보</div>
      <textarea
        name="describ"
        ref={describRef}
        className={`${styles.textarea} ${!isEditMode ? styles.treadonly : ""}`}
        readOnly={!isEditMode}
      ></textarea>

      <div className={styles.buttonGroup}>
        <button onClick={handleUpdate}>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
}
