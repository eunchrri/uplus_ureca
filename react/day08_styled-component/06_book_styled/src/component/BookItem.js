import React from "react";
import styled from "styled-components";

const Row = styled.tr`
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }

  img {
    width: 50px;
    height: auto;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

function BookItem({ book, bookSelect }) {
  // const { book, bookSelect } = props;
  console.log("bookitem:", book);
  return (
    <Row>
      <td>
        <img
          className="book-thumbnail"
          src={require(`../assets/images/${book.img}`)}
          alt={book.title}
        />
      </td>
      <td>{book.title}</td>
      <td>{book.price}</td>
      <td>{book.author}</td>
      <td>
        <button className="select-button" onClick={() => bookSelect(book)}>
          선택
        </button>
      </td>
    </Row>
  );
}

export default BookItem;
