import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                    type='text'
                    name='name'
                    value={userReg.name}
                    onChange={handleChanges}/>
                </div>

                <div>
                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    value={userReg.email}
                    onChange={handleChanges}/>
                </div>

                <div>
                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    value={userReg.password}
                    onChange={handleChanges}/>
                </div>

                <div>
                    <label>Zipcode</label>
                    <input 
                    type='number'
                    name='zipcode'
                    value={userReg.zipcode}
                    onChange={handleChanges}/>
                </div>

                <div>
                    <label>Phone Number</label>
                    <input 
                    type='tel'
                    name='phoneNumber'
                    value={userReg.phoneNumber}
                    onChange={handleChanges}/>
                </div>
                <button>Sign Up</button>
                <h5>Have an account? <Link to=''>Sign in here</Link></h5>
            </form>
        </div>
    )
};

export default SignUp