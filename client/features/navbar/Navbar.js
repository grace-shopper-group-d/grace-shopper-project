import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { fetchUserAsync } from '../user/userSlice';

const Navbar = () => {
  const { first_Name, last_Name } = useSelector((state) => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };



  useEffect(() => {



  },[dispatch] )

  return (
    <div className="top">
      <div className="top-left">
        <h1>GraceShopper</h1>
        <div className='top-center'>
          <Link className='top-item' to="/home">Home</Link>
          <Link className='top-item' to="/products">Products</Link>
          <Link className='top-item' to="/cart">Cart</Link>
          <Link className='top-item' to="/orders">Orders</Link>
          {isLoggedIn ? (
            <Link className='top-item' to="/useredit">Edit</Link>
          ) : null }
          {isLoggedIn && isAdmin ? (
            <div>
              <Link className='top-item' to="/users">Users</Link>
            </div>
          ) : null}
        </div>
      <nav className='top-right'>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <span>Welcome {first_Name} {last_Name} </span>
            <button className='logOutButton' type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div className='userInfo'>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup" className='signup'>Sign Up</Link>
          </div>
        )}
      </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
