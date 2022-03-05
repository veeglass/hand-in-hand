import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./landingpage.scss";
import Header from "../../components/header/header";
import HomeComponent from "../../components/home/home";

const LandingPage = ({ isAuthenticated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated) navigate ("/doyouwantpage")
  }, [isAuthenticated, navigate])
  return (
    <div>
      <Header />
      <HomeComponent/>
    </div>
  );
};

export default LandingPage;
