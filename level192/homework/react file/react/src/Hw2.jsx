import React from "react";

function Hw2() {
  const books = [
    { id: 1, title: "Harry Potter", pages: 350, author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", pages: 280, author: "Tolkien" },
    { id: 3, title: "Dune", pages: 600, author: "Frank Herbert" },
    { id: 4, title: "Animal Farm", pages: 120, author: "George Orwell" },
  ];

  const bookInfo = books.map((book) => (
    <div key={book.id}>
      <h1>{book.title}</h1>
      <p>{book.pages >= 300 ? "სქელი წიგნი" : book.pages <= 200 ? "მოკლე წიგნი" : "საშუალო ზომის წიგნი"}</p>
      <p>{book.author}</p>
    </div>
  ));

  return <div>{bookInfo}</div>;
}

export default Hw2;
