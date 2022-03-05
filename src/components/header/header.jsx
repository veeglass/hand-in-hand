import React from "react";
import "./header.styles.scss";

import { Button } from "@mui/material";
// import Button from "../button/button";

import CleanHandsIcon from "@mui/icons-material/CleanHands";
const Header = () => {
  return (
    <div className="h2h-header">
      <CleanHandsIcon fontSize="large" className="h2h-icon" />
      <h3 className="h2h-title">Hand2Hand</h3>
      <Button variant="contained" href="/loginpage" className="h2h-btn">GET STARTED</Button>
    </div>
  );
};

export default Header;
