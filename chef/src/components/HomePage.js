import React from "react";
import { Link } from 'react-router-dom';
import styled ,{createGlobalStyle} from 'styled-components/macro';

const DesktopNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-content: center;

    background: #373534;
    color: black;

    hight: 15vh;

    .nav-links{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-content: center;
        width: 35vw;
        list-style: none;
    }

    .link{
        color:#ffffff;
        text-decoration: none;
    }

    .link:hover{
        text-decoration: underline;
        color: #aaf;
        text-shadow: none;
        -webkit-transition: 200ms linear 0s;
        -moz-transition: 200ms linear 0s;
        -o-transition: 200ms linear 0s;
        transition: 200ms linear 0s;
        outline: 0 none;
    }
`

const HomePage =() =>{
    return( 
        <DesktopNav>  
            <div className='logo'><h1>Simmr</h1></div>
            <ul className='nav-links'>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/' className='link'>Profile</Link>
                </li>
                <li>
                    <Link to='/' className='link'>My Recipes</Link>
                </li>
                <li>
                    <Link to='/' className='link'>Settings</Link>
                </li>
            </ul>
        </DesktopNav> 
    )
}

export default HomePage;