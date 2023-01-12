import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>First Name</label>
                <input className="registerInput" type="text" placeholder="Enter your first name..." />
                <label>Last Name</label>
                <input className="registerInput" type="text" placeholder="Enter your last name..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;