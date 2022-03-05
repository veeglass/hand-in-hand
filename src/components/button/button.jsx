import React from 'react';
import "./button.scss";

import { useMoralis } from "react-moralis";

const Button = () => {
    const { authenticate, isAuthenticated, user } = useMoralis();
  if (!isAuthenticated) {
    return (
      <div>
        <button className="auth-butn" onClick={() => authenticate()}>Connect Wallet</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
    </div>
  );
}

export default Button;