import React, { useEffect } from "react";
import { fetchAllUsers, selectUsers } from "./allUsersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);


  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  //this will return a table of all users
    return (
        <div>
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer View</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                {/*This will return a list of users.  We can also view a single user. */}
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/users/${user.id}`}>View</Link>
                            </td>
                            <td>{user.first_Name}</td>
                            <td>{user.last_Name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default AllUsers;
