import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import { useMoralis } from "react-moralis";

import LandingPage from "./pages/landingpage/landingpage";
import DoYoWantPage from "./pages/doyouwant/doyouwantpage";
import LoginPage from "./pages/loginpage/loginpage";
import DonatePage from "./pages/donatepage/donatepage";
import CampaignPage from "./pages/campaignpage/campaignpage";

const App = () => {
  const { isAuthenticated, user, logout} = useMoralis();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/doyouwantpage" element={<DoYoWantPage />} />
        <Route exact path="/loginpage" element={<LoginPage />} />
        <Route
          exact
          path="/donate"
          element={
            <DonatePage
              logout={logout}
              user={user}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/create"
          element={
            <CampaignPage
              logout={logout}
              user={user}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
