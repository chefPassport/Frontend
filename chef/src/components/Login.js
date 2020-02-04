import React, {useState, useEffect} from "react";
import { BrowserRouter as Router,
    Route,
    Link,
    Switch } from 'react-router-dom';
import styled ,{createGlobalStyle} from 'styled-components/macro';
import logo from './simmr.PNG'
import pot from './Pot.jpg'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import HomePage from "./HomePage";
import SignUp from './SignUp';
const LoginNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-content: center;

`

const Button = styled.button`
    color: white;
    font-size: 1em;
    margin: 3em;
    padding: 0.25em 12em;
    border: 2px solid #D81E05;
    background-color: #D81E05;
    border-radius: 6px;
`


const Login = () => {
return (
<Router>
    <LoginNav>
        <img src={pot}/>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
            <form>
                <p className="logo"><img src={logo}/></p>
                <p>Welcome! Sign in to see your recipes or upload a new one.</p>
                <div className="grey-text">
                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                <Button>
                    <Link to='/Homepage'>Login</Link>
                </Button>
                </div>
            </form>
            <p> Dont have an account?
                <Link to='SignUp'> Sign up!</Link>
            </p>
            </MDBCol>
        </MDBRow>
        </MDBContainer>

        <Switch>
            <Route path='/HomePage' className='link' component={HomePage}>          
            </Route>
            <Route path='/SignUp' className='link' component={SignUp}>
                    
            </Route>
        </Switch>
    </LoginNav>   
</Router>
 

    );
};

export default Login;