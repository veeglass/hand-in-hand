import React from "react";
import "./home.styles.scss";


import Image1 from "../../images/hand2hand-img1.jpg";
import Image2 from "../../images/hand2hand-img2.jpg";
import Image3 from "../../images/hand2hand-img3.jpg";
import Image4 from "../../images/hand2hand-img4.jpg";

const HomeComponent = () => {
    // const ButtonFunc = () => {

    // }
  return (
    <div className="home">
      <div className="home-imggrp1">
        <img src={Image1} alt="image1"></img>
        <div className="line1">&nbsp;</div>
        <img src={Image2} alt="image2"></img>
      </div>

      <div className="home-content">
        <h4>Give Love, Spread Kindness</h4>
        <p>
          The world's first decentralized crowdfunding website that implements
          blockchain technology for easy fundraising and instant transactions.
        </p>
      </div>
      <div className="home-imggrp2">
        <img src={Image3} alt="image3"></img>
        <div className="line2">&nbsp;</div>
        <img src={Image4} alt="image4"></img>{" "}
      </div>
    </div>
  );
};

export default HomeComponent;
