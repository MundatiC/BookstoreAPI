import React, { useEffect, useState } from "react";
import bookImage from "../images/product-item1.jpg";
import "../bookGrid.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BorrowedBooks() {
  const navigate = useNavigate();
  const handleBookClick = async (book) => {
    console.log(book);
   
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request headers
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/return`,
        { bookID: book.BookID },
        config
      );
      console.log(`Returning book with ID: ${book.BookID}`);
      console.log(response);
      navigate("/returned-books");
    
    } catch (error) {
      console.error(error);
    }
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

        const response = await axios.get("http://localhost:5000/borrowedBooksByID", config);
        console.log(response.data.data);
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBorrowedBooks();
  }, []);

  // const handleReturn = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token"); // Retrieve the token from localStorage
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Include the token in the request headers
  //     },
  //   };
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5000/return`,
  //       { bookID: books.BookID },
  //       config
  //     );
  //     console.log(`Borrowing book with ID: ${book.BookID}`);
  //     // console.log(response);
  //     navigate("/returnedbooks");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="padding-large">

        <div className="container">
          <div className="books-grid">
            {books?.map((book) => (
              <div
                className="book-style"
                key={book.BookID}
               
              >
                <img src={book.ImageUrl} alt="Book" className="book-item" />
                <button type="button" className="borrow"  onClick={() => handleBookClick(book)}>
                  Return
                </button>
                <div className="details">
                  <h3>{book.Title}</h3>
                  <p>by {book.Author}</p>
                </div>
              </div>
            ))  }
          </div>
        </div>
      </div>

    </>
  );
}

export default BorrowedBooks;
