import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import book1 from "../images/book1.png";
import book2 from "../images/book2.jpeg";

function Home() {
  return (
    <div>
      {/* <Carousel
        autoPlay={true}
        transitionTime={0}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div className="slider">
          <img src={book1} />
        </div>
        <div className="slider">
          <img src={book2} />
        </div>
  </Carousel> */}
      <h1>Home</h1>
    </div>
  );
}

export default Home;
