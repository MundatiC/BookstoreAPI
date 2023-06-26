import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../home.css"
import mainbanner1 from "../images/main-banner1.jpg";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div>
     <section id="billboard">

<div className="container">
  <div className="row">
    <div className="col-md-12">

      <button className="prev slick-arrow">
        <i className="icon icon-arrow-left"></i>
      </button>

      <div className="main-slider pattern-overlay">
        <div className="slider-item">
          <div className="banner-content">
            <h2 className="banner-title">Life of the Wild</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
            <div className="btn-wrap">
             
            </div>
          </div> 
          <img src={mainbanner1} alt="banner" className="banner-image"/>
        </div>
      </div>
        
      <button className="next slick-arrow">
        <i className="icon icon-arrow-right"></i>
      </button>
      
    </div>
  </div>
</div>


</section>

    </div>
     
    </>
  );
  }
  

export default Home;
