import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import logo from './simmr.PNG'
import styled ,{createGlobalStyle} from 'styled-components/macro';
import Post from './Post';

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

    form{
        magin: 3% 3;
    }
`

const PostDes = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const HomePage =() =>{
    const [api, setapi] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const names = api.map((x) =>(
        x.name
    ))

   useEffect(() => {
    const results = names.filter(names =>
      names.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return( 
        <div>
            <DesktopNav>  
                <div className='logo'><img src={logo}/></div>
                <form className='search'>
                    <label htmlFor="name">:</label>
                        <input
                        id="name"
                        type='text'
                        name='text'
                        placeholder='What are you hungry for?'
                        value={searchTerm}
                        onChange={handleChange}
                        autoComplete='off'
                        />
                </form>
                <ul className='nav-links'>
                    <li>
                        <Link to='/HomePage' className='link'>Home</Link>
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
            <PostDes>
                <main>
                    <Post/>
                </main>
            </PostDes>

        </div>
        
    )
}

export default HomePage;