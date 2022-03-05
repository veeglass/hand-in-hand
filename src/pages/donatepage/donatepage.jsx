import React, { useState } from "react";
import { Button } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@mui/material/Alert";



import TextField from "@material-ui/core/TextField";

import "./donatepage.scss";
import { useNavigate } from "react-router";

import { useWeb3Transfer, useMoralis} from "react-moralis";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const DonatePage = ({ logout, user }) => {
  const [amount, setAmount] = useState();
  const [address, setAddress] = useState("");
  const Moralis = useMoralis();
  console.log(Moralis)

  const navigate = useNavigate();

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: address,
    type: "native",
  });

  const logoutbutton = () => {
    logout();
    navigate("/");
  };

  const handleChange1 = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  const handleChange2 = (event) => {
    const { value } = event.target;
    setAddress(value);
  };
  
  return (
    <div className="donatepage">
      {user ? (
        <div>
          <div className="donatepage-header">
            {" "}
            <h3>Welcome!</h3>
            <h4>{user.getUsername()}</h4>
            <Button variant="contained" onClick={logoutbutton}>
              LOG OUT
            </Button>
          </div>
          <div className="donatepage-content">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} className="content-container">
                <Grid
                  container
                  justifyContent="center"
                  alignContent="center"
                  className="content-title"
                >
                  <h3>DONATE FUNDS</h3>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <form
                    
                    className="content-container3"
                  >

                    
                    <TextField
                      variant="outlined"
                      placeholder="Amount of ETH"
                      type="number"
                      step={0.1}
                      onChange={handleChange1}
                      value={amount}
                      className="content-input"
                      required
                    />
                    <span>Balance: $</span>

                    <TextField
                      id="standard-basic"
                      type="text"
                      placeholder="Receiver's address"
                      variant="standard"
                      value={address}
                      onChange={handleChange2}
                      className="content-input"
                      required
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      className="content-input"
                      
                    >
                      DONATE
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};

export default DonatePage;
