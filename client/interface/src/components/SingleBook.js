import React, { useEffect, useState } from "react";
import "../SingleBook.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const location = useLocation();
  const { book } = location.state;
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        console.log(token)
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        };
      try {
        const response = await axios.get(`http://localhost:4040/books/${book.BookID}`, config);
        console.log(response)
        setBookData(response.data.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();
  }, [book.BookID]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-sand padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="#" className="product-image">
              <img src={bookData.ImageUrl} alt="Book Image" />
            </a>
          </div>

          <div className="col-md-6 pl-5">
            <div className="product-detail">
              <h1>{bookData.Title}</h1>
              <p>Fiction</p>

              <p>{bookData.Description}</p>

              <button type="submit" name="borrow" value="27545" className="button">
                Borrow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
