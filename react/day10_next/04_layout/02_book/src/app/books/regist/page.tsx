"use client";
import React, { useCallback, useRef } from "react";
import { Book } from "@/types/book";
import styles from "./regist.module.scss";
import { useRouter } from "next/navigation";

const BookRegister = () => {
  const isbnRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const describRef = useRef<HTMLTextAreaElement>(null);

  // 등록하는 경우에는 list로 가면 되므로 router 등록하기.
  const router = useRouter();

  const handleRegister = useCallback(() => {
    const isbn = isbnRef.current?.value.trim() || "";
    const title = titleRef.current?.value.trim() || "";
    const author = authorRef.current?.value.trim() || "";
    // const price = priceRef.current?.value.trim() || "";
    // const describ = describRef.current?.value.trim() || "";

    if (!isbn) {
      alert("책 일련번호를 입력하세요");
      isbnRef.current?.focus();
      return;
    }

    if (!title) {
      alert("책 제목을 입력하세요");
      titleRef.current?.focus();
      return;
    }

    if (!author) {
      alert("책 저자를 입력하세요");
      authorRef.current?.focus();
      return;
    }

    const newBook: Book = {
      isbn,
      title,
      author,
      price: Number(priceRef.current?.value || "0"),
      describ: describRef.current?.value || "",
      img: "",
    };
    // 비동기 통신
    console.log("등록한 도서 정보: ", newBook);
    router.push("/books");
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>도서 등록</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>책 일련 번호</td>
            <td>
              <input type="text" name="isbn" ref={isbnRef} />
            </td>
          </tr>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="title" ref={titleRef} />
            </td>
          </tr>
          <tr>
            <td>저자</td>
            <td>
              <input type="text" name="author" ref={authorRef} />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input type="number" name="price" ref={priceRef} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.infoLabel}>책 정보</div>
      <textarea name="describ" className={styles.textarea} ref={describRef}></textarea>

      <div className={styles.buttonGroup}>
        <button onClick={handleRegister}>등록</button>
      </div>
    </div>
  );
};

export default BookRegister;
