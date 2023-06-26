import React from "react";
import "../SingleBook.css";
import bookImage from "./product-item3.jpg";

const SingleBook = () => {
  return (
    <section className="bg-sand padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="#" className="product-image">
              <img src={bookImage} alt="Book Image" />
            </a>
          </div>

          <div className="col-md-6 pl-5">
            <div className="product-detail">
              <h1>Simple Way of Peace</h1>
              <p>Fiction</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

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
