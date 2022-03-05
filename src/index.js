import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider
    appId="6AEShcqwl1bR7ZNyhGaajXYq1YJmAeISTiCsjDzk"
    serverUrl="https://hchsjcjoctvo.usemoralis.com:2053/server"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoralisProvider>,
  document.getElementById("root")
);
