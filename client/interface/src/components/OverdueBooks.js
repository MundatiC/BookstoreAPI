import React, { useEffect, useState } from "react";
import bookImage from "../images/product-item1.jpg";
import "../bookGrid.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OverdueLoans() {
  const navigate = useNavigate();
  const handleBookClick = (book) => {
    navigate(`/overdueloans/${book.BookID}`, { state: { book } });
  };
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const getOverdueLoans = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        };

        const response = await axios.get("http://localhost:5000/overdueloans", config);
        console.log(response.data.data);
        setLoans(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOverdueLoans();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="padding-large">
        <div className="container">
          <div className="books-grid">
            {loans.map((loan) => (
              <div
                className="book-style"
                key={loan.LoanID}
                onClick={() => handleBookClick(loan)}
              >
                <img src={bookImage} alt="Book" className="book-item" />
                <button type="button" className="borrow">
                  View Details
                </button>
                <div className="details">
                  <h3>{loan.Title}</h3>
                  <p>by {loan.Author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OverdueLoans;
