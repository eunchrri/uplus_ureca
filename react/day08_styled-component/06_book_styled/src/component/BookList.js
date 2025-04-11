import React from "react";
import styled from "styled-components";
import BookItem from "./BookItem";

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Thead = styled.thead`
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: center;
  border: 1px solid #ddd;
  height: 50px;
`;

function BookList({ books, bookSelect }) {
  return (
    <Table className="book-table">
      <Thead>
        <tr className="book-header">
          <th>이미지</th>
          <th>제목</th>
          <th>가격</th>
          <th>저자</th>
          <th>비고</th>
        </tr>
      </Thead>
      <tbody>
        {books.map((book) => (
          <BookItem key={book.ISBN} book={book} bookSelect={bookSelect} />
        ))}
      </tbody>
    </Table>
  );
}

export default BookList;
