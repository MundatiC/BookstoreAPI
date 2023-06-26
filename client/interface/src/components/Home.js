import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../home.css"
import mainbanner1 from "../images/main-banner1.jpg";
import mainbanner2 from "../images/main-banner2.jpg";
import { Carousel } from "react-responsive-carousel";
import book1 from "../images/book1.png";
import book2 from "../images/book2.jpeg";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <h1>Home</h1>
    </>
  );
  }
  

export default Home;
