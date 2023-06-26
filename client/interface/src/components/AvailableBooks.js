import React from "react";
import book from "../images/product-item1.jpg";
import "../AvailableBooks.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const bookCards = [];

for (let i = 0; i < 30; i++) {
  bookCards.push(
    <div className="book-card" key={i}>
      <img src={book} alt="" />
      <h6>
        Author:
        <span>Pauline Kea</span>
      </h6>
      <h6>
        Publication Year:
        <span>2018</span>
      </h6>
    </div>
  );
}

function AvailableBooks() {
  return (
    <div className="available-books">
      <TopBar />
      <Navbar />
      <h3>Here are some of the books available for borrowing:</h3>
      <div className="book-grid">{bookCards}</div>
    </div>
  );
}

export default AvailableBooks;
