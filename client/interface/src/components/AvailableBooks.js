import React from "react";
import kigogo from "../images/kigogo.png";
import "../AvailableBooks.css";

const bookCards = [];

for (let i = 0; i < 30; i++) {
  bookCards.push(
    <div className="book-card" key={i}>
      <img src={kigogo} alt="" />
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
      {/* create jsx for a grid tempalte*/}
      <h3>Here are some of the books available for borrowing:</h3>
      <div className="book-grid">{bookCards}</div>
    </div>
  );
}

export default AvailableBooks;
