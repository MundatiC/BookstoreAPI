import React, { useEffect, useState } from "react";
import bookImage from "../images/product-item1.jpg";
import "../bookGrid.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BorrowedBooks() {
  const navigate = useNavigate();
  const handleBookClick = (book) => {
    navigate(`/borrowedbooks/${book.BookID}`, { state: { book } });
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBorrowedBooks = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        };

        const response = await axios.get(
          "http://localhost:5000/borrowedbooks",
          config
        );
        console.log(response.data.data);
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBorrowedBooks();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="padding-large">
        <div className="container">
          <div className="books-grid">
            {books.map((book) => (
              <div
                className="book-style"
                key={book.BookID}
                onClick={() => handleBookClick(book)}
              >
                <img src={bookImage} alt="Book" className="book-item" />
                <button type="button" className="borrow">
                  Return
                </button>
                <div className="details">
                  <h3>{book.Title}</h3>
                  <p>by {book.Author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BorrowedBooks;
