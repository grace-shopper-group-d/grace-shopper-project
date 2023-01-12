import React from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { useNavigate } from "react-router-dom";

const Register = ({ name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formName = evt.target.name;
        const first_Name = evt.target.first_Name.value;
        const last_Name = evt.target.last_Name.value;
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        const address = evt.target.address.value;
        const telephone = evt.target.telephone.value;
        dispatch(authenticate({ first_Name, last_Name, email, password, address, telephone, method: formName }))
        navigate('/home');
    };

    //returning the form for the user to fill out.  The form is a controlled component, so the values are stored in the state.
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} name={name} className="registerForm">
                <label htmlFor="first_Name">First Name</label>
                <input name="first_Name" className="registerInput" type="text" placeholder="Enter your first name..." />
                <label htmlFor="last_Name">Last Name</label>
                <input name="last_Name" className="registerInput" type="text" placeholder="Enter your last name..." />
                <label htmlFor="email">Email</label>
                <input name="email" className="registerInput" type="text" placeholder="Enter your email..." />
                <label htmlFor="password">Password</label>
                <input name="password" className="registerInput" type="password" placeholder="Enter your password..." />
                <label htmlFor="address">Address</label>
                <input name="address" className="registerInput" type="text" placeholder="Enter your address..." />
                <label htmlFor="telephone">Telephone</label>
                <input name="telephone" className="registerInput" type="text" placeholder="Enter your telephone..." />
                <button className="registerButton" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;