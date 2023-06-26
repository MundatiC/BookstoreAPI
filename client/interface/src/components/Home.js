import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../home.css"
import mainbanner1 from "../images/main-banner1.jpg";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import kigogo from "../images/kigogo.png";

const bookCards = [];
for (let i = 0; i < 4; i++) {
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

     

      <div className="main-slider pattern-overlay">
        <div className="slider-item">
          <div className="banner-content">
            <h2 className="banner-title">Welcome to Nuria Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
            <div className="btn-wrap">
             
            </div>
          </div> 
          <img src={mainbanner1} alt="banner" className="banner-image"/>
        </div>
      </div>
        
      
      
    </div>
  </div>
</div>

<div className="available-books">
      {/* create jsx for a grid tempalte*/}
      <h3>Featured Books</h3>
      <div className="book-grid">{bookCards}</div>
    </div>


</section>


    </div>
    
    
     
    </>
  );
  }
  

export default Home;
