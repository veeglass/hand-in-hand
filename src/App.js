import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";

import LandingPage from "./pages/landingpage/landingpage";
import ProtectedRoute from "./components/protectedroute";
import DoYoWantPage from "./pages/doyouwant/doyouwantpage";
import LoginPage from "./pages/loginpage/loginpage";
import DonatePage from "./pages/donatepage/donatepage";

const App = () => {
  const { isAuthenticated, user, logout} = useMoralis();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (isAuthenticated ) {
      navigate("/doyouwantpage");
    } else if (!isAuthenticated && location.pathname === "/donate") {
      navigate("/")
    }
  }, [isAuthenticated]);
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
            <ProtectedRoute>
              <DonatePage logout={logout} user={user}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
