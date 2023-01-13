import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserAsync, selectUser } from "../user/userSlice";
import { fetchUser, singleUser } from "./singleUserSlice";

const SingleUser = () => {
    const { userId } = useParams();
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserAsync(userId))
    }, [dispatch, userId])

    return (
        <div className="user">
            <h1>First Name: {user.first_Name}</h1>
            <h1>Last Name: {user.last_Name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Telephone:{user.telephone}</h1>
            <h1>Address: {user.address}</h1>
        </div>
    )
}

export default SingleUser;