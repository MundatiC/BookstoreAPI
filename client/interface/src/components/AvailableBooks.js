import React, { useEffect, useState } from "react";
import book from "../images/product-item1.jpg";
import "../AvailableBooks.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import axios from "axios";

function AvailableBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        console.log(response.data.data);
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="available-books">
      <TopBar />
      <Navbar />
      <h3>Here are some of the books available for borrowing:</h3>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.BookID}>
            <img src={book.ImageUrl} alt={book.Title} />
            <p className="title">{book.Title}</p>
            <p>Author: {book.Author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableBooks;
