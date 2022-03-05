import React from "react";
import { Button } from "@mui/material";

import "./donatepage.scss";


const DonatePage = ({ logout, user }) => {
  
  return (
    <div className="donatepage">
      
        <h3>Welcome!</h3>
        <h4>{user.getUsername()}</h4>
        <Button variant="contained" onClick={logout}>
          LOG OUT
        </Button>
      <h4>sdjaksaj</h4>
    </div>
  );
};

export default DonatePage;
