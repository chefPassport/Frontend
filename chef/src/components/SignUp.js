import React from "react";
import { BrowserRouter as Router,
    Route,
    Link,
    Switch } from 'react-router-dom';
import styled ,{createGlobalStyle} from 'styled-components/macro';
import logo from './simmr.PNG'
import pot from './Pot.jpg'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


const Button = styled.button`
    color: white;
    font-size: 1em;
    margin: 3em;
    padding: 0.25em 12em;
    border: 2px solid #D81E05;
    background-color: #D81E05;
    border-radius: 6px;
`

const SignUp = () =>{
    return (
        <div>
            <MDBContainer>
            <MDBRow>
            <MDBCol md="6">
                <form>
                    <p className="logo"><img src={logo}/></p>
                    <p>Welcome! Sign Up to see recipes or upload new ones.</p>
                    <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <MDBInput label="Type your password" icon="lock" group type="password" validate />
                        <MDBInput label="Zip Code" group type="zip"/>
                        <MDBInput label="Phone Number" group type="number"/>
                    </div>
                    <div className="text-center">
                        <Button>
                            <Link to='/Homepage'>Login</Link>
                        </Button>
                    </div>
                </form>
                <p> Have an account?
                    <Link to='/Login'> Login</Link>
                </p>
            </MDBCol>
            </MDBRow>
            </MDBContainer>

        </div>
    );
};

export default SignUp;