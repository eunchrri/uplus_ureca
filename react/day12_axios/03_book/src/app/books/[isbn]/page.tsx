"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./detail.module.scss";
import { localAxios } from "@/utils/http-commons";
import { handleApi } from "@/utils/handleApi";
import { searchAllBooks, searchBook, updateBook, deleteBook } from "@/service/books";
import { useRouter } from "next/navigation";
import { Book } from "@/types/book";

export default function BookDetail({ params: { isbn } }: { params: { isbn: string } }) {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);
  //입력 form에 ref 달기 위해 선언
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const describRef = useRef<HTMLTextAreaElement>(null);

  //////////////////////todo1. loading, error에 대한 상태 선언하기
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //////////////////////todo3. useEffect로 비동기 통신 함수 호출하기
  // useEffect hook에는 async를 설정할 수 없기 때문에
  // useEffect 내부에 async 함수를 작성하고 호출한다.

  useEffect(() => {
    const loadBook = async () => {
      setLoading(true);
      const { data, error } = await handleApi(() => searchBook(isbn));
      console.log(data);
      if (error) {
        setError(error);
      } else if (data) {
        if (titleRef.current) titleRef.current.value = data.title;
        if (authorRef.current) authorRef.current.value = data.author;
        if (priceRef.current) priceRef.current.value = data.price.toString();
        if (describRef.current) describRef.current.value = data.describ;
      }
      setLoading(false);
    };
    loadBook();
  }, [isbn]);

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
      const { data, error } = await handleApi(() => updateBook(book));
      if (error) {
        setError(error);
      } else if (data) {
        alert("도서 정보가 수정되었습니다.");
      }
    }
    setIsEditMode(!isEditMode);
  }, [isEditMode]);

  // 삭제
  const handleRemove = useCallback(async () => {
    console.log("도서 목록으로 이동");

    const confirmDelete = window.confirm("정말 이 도서를 삭제하시겠습니까?");
    if (!confirmDelete) return;

    const { data, error } = await handleApi(() => deleteBook(isbn));
    if (data) {
      alert("도서가 삭제되었습니다.");
      router.push("/books");
    } else if (error) {
      setError(error);
    }
    console.log("도서 목록으로 이동");
    // 목록 이동 로직
  }, [isbn]);

  //////////////////////todo4. loading, error에 대한 화면
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error...</h1>;

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
