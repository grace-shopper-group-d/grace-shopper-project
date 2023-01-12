import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const { first_Name, last_Name } = useSelector((state) => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="top">
      <div className="top-left">
      <h1>GraceShopper</h1>
      <div className='top-center'>
      <Link className='top-item' to="/home">Home</Link>
      <Link className='top-item' to="/products">Products</Link>
      <Link className='top-item' to="/cart">Cart</Link>
      <Link className='top-item' to="/orders">Orders</Link>
      </div>
      <nav className='top-right'>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <span>Welcome {first_Name} {last_Name}</span>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div className='userInfo'>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
