import { Book } from "@/types/book";
import { localAxios } from "@/utils/http-commons";
import React from "react";
import styles from "@/app/page.module.scss";

const BookFetchAll = async () => {
  const axios = localAxios();
  const getBooks = async () => {
    console.log("fetch getBooks......");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axios.get("/book");
    // SSR이므로 console.log는 브라우저에 출력되지 않고 terminal에 출력된다.
    console.log(response.data);
    return response.data.books;
  };
  const books: Book[] = await getBooks();
  return (
    <div>
      <h1 className={styles.title}>{JSON.stringify(books)}</h1>
    </div>
  );
};

export default BookFetchAll;
