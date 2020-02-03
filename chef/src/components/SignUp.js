import React, { useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
// dependancy imports

// material UI imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../index.css";

// material UI ////////////////////////////////
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="">
          Simmr
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage:
        "url(https://c1.wallpaperflare.com/preview/246/953/91/people-hand-chef-kitchen.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50],
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
// material UI ////////////////////////////////

const SignUp = (props) => {
    const classes = useStyles();

    const [ userReg, setUserReg ] = useState({
        name: '',
        email: '',
        password: '',
        zipcode: '',
        phoneNumber: ''
    });
    const handleChanges = (e) => {
        setUserReg({
            ...userReg,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios
            .post('', userReg)
            .then(res => {
                console.log('new user registered', res)
                // localStorage.setItem(,)
                props.history.push('./')
                setUserReg({
                    name: '',
                    email: '',
                    password: '',
                    zipcode: '',
                    phoneNumber: ''
                })
            })
            .catch(err => {
                console.log('could not register new user', err)
            })
    };

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="70px" />
            <Typography component="h1" variant="h5"></Typography>
            <Typography component="h1" variant="h5">
              👋🏾 Welcome! Sign up to start posting your recipes and connect with potential clients.
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} Validate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                color="secondary"
                onChange={handleChanges}
                value={userReg.name}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
                onChange={handleChanges}
                value={userReg.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                onChange={handleChanges}
                value={userReg.password}
              />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="zipcode"
                label="Zipcode"
                type="number"
                id="zipcode"
                color="secondary"
                onChange={handleChanges}
                value={userReg.zipcode}
              />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                color="secondary"
                onChange={handleChanges}
                value={userReg.phoneNumber}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2" color="secondary">
                    {"Already have an account? Sign in here"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
};

export default SignUp