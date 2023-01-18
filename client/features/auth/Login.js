import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../app/store';

const Login = ({name}) => {
  const { error } = useSelector((state) => state.auth);
  const userId = useSelector((state) => state.auth.id)
    console.log(error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formName = evt.target.name;
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        dispatch(authenticate({ email, password, method: formName }))
        navigate('/home');
    };

    return (
        <div className='container'>
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form onSubmit={handleSubmit} name={name} className='loginForm'>
                <label htmlFor='email'>Email</label>
                <input name='email' className='loginInput' type='text' placeholder='Enter your email...' />
                <label htmlFor='password'>Password</label>
                <input name='password' className='loginInput' type='password' placeholder='Enter your password...' />
                <button className='loginButton' type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login;
