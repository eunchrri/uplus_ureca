import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 280px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const BookImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 12px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const Author = styled.h4`
  color: #666;
`;

const Price = styled.h4`
  color: #007bff;
  font-weight: bold;
`;

function BookDetail({ book }) {
  return (
    <Card>
      <BookImage src={require(`../assets/images/${book.img}`)} alt={book.title} />
      <Info>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        <Price>{book.price}</Price>
      </Info>
    </Card>
  );
}

export default BookDetail;
