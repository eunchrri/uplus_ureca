// "use client";
import BookTestCom from "@/components/book/BookTestCom";
import { Metadata } from "next";
import React from "react";

//server component
export const metadata: Metadata = {
  title: "도서정보 등록",
  description: "Generated by create next app",
};

const BookInsert = () => {
  return (
    <div>
      <h1>BookInsert Page!!!</h1>
      <BookTestCom />
    </div>
  );
};

export default BookInsert;
