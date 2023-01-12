import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input className='loginInput' type='text' placeholder='Enter your email...' />
                <label>Password</label>
                <input className='loginInput' type='password' placeholder='Enter your password...' />
                <button className='loginButton'>Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login;