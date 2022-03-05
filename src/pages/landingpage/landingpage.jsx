import React from "react";
import "./landingpage.scss";
import Header from "../../components/header/header";
import HomeComponent from "../../components/home/home";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HomeComponent/>
    </div>
  );
};

export default LandingPage;
