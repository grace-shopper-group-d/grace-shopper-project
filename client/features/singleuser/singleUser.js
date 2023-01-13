import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, singleUser } from "./singleUserSlice";


const SingleUser = () => {
    const { userId } = useParams();
    const user = useSelector(singleUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [dispatch, userId])
    
    return (
        <div className="user">
            <h1>First Name: {user.firstName}</h1>
            <h1>Last Name: {user.lastName}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Telephone:{user.telephone}</h1>
            <h1>Address: {user.address}</h1>
            <h1>Password: {user.password}</h1>
        </div>
    )
}

export default SingleUser;