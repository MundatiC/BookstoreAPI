import React, { useEffect, useState } from "react";
import bookImage from "../images/product-item1.jpg";
import "../bookGrid.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReturnedBooks() {
  const navigate = useNavigate();
  const handleBookClick = (book) => {
    navigate(`/returnedbooks/${book.BookID}`, { state: { book } });
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getReturnedBooks = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        };

        const response = await axios.get(
          "http://localhost:5000/returnedbooks",
          config
        );
        console.log(response.data.data);
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getReturnedBooks();
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
                <img src={book.ImageUrl} alt="Book" className="book-item" />
                <button type="button" className="borrow">
                  View Details
                </button>
                <div className="details">
                  <h3>{book.Title}</h3>
                  <p>Author: {book.Author}</p>
                  <p>Date returned:{book.ReturnDate.split("T")[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnedBooks;
