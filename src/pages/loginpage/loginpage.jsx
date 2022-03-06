import React, { useEffect, useState } from "react";
import "./loginpage.scss";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  rootContainer: {
    height: "95vh",
    paddingTop: "5vh",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#e5e5e5",
  },
  titleContainer: {
    marginBottom: "2rem",
  },
  textField: {
    marginBottom: "2rem",
  },
  button: {
    marginBottom: "4rem",
    marginRight: "2rem",
    height: "50px",
  },
  button1: {
    marginBottom: "2rem",
    marginRight: "2rem",
    height: "50px",
  },
  button2: {
    marginBottom: "2rem",
    height: "50px",
  },
});

const Login = () => {
    const navigate = useNavigate();
  const classes = useStyles();
  const { authenticate, login, isAuthenticated} = useMoralis();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onNonCryptoLogin = async ({ username, password }) => {
    const res = await login(username, password);

    // If no existing user found, create new one
    if (!res) {
      // throw error snackbar
        console.error("No user found");
        alert("User Not Found, Please create an account")
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/doyouwantpage")
  }, [isAuthenticated, navigate])

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={classes.rootContainer}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          className={classes.titleContainer}
        >
          <Typography variant="h3" className="logintext">
            LOGIN
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await onNonCryptoLogin(values);
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Username"
              value={values.username}
              required
              fullWidth
              className={classes.textField}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              required
              value={values.password}
              fullWidth
              className={classes.textField}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              //   style={{ width: "10rem" }}
              fullWidth
            >
              Login
            </Button>
          </form>
          <div className="loginbtns">
            <Button
              variant="contained"
              onClick={() => authenticate()}
              color="secondary"
              className={classes.button1}
            >
              Login with Metamask
            </Button>
            <Button
              variant="contained"
              onClick={() => authenticate()}
              color="primary"
              className={classes.button2}
            >
              Login with WalletConnect
            </Button>
          </div>

          <Link to="/register">HAVE NO ACCOUNT YET?</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
