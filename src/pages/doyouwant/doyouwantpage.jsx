
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./doyouwant.styles.scss";

const DoYoWantPage = () => {
  return (
    <div className="doyouwant-page">
      <h2>WELCOME!</h2>
      <div>
        <Link to="/donate" className="link-btn btn1">
          {" "}
          <Button colorScheme="blue">DONATE TO A CAMPAIGN</Button>
        </Link>
        <Link to="/create" className="link-btn">
          {" "}
          <Button colorScheme="blue">CREATE A CAMPAIGN</Button>
        </Link>
      </div>
    </div>
  );
}

export default DoYoWantPage;