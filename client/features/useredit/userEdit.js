import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, fetchUserAsync, selectUser } from '../user/userSlice'

const EditUser = () => {
    const dispatch = useDispatch();
    // const editUser = useSelector(selectUser);
    // const { userId } = useParams();
    const userId = useSelector((state) => state.auth.me.id);
    const Navigate = useNavigate();
    const [first_Name, setFirstName] = useState('');
    const [last_Name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        dispatch(fetchUserAsync(userId))
    }, [dispatch, userId])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(editUser({ id: userId, first_Name, last_Name, email, telephone, address }));
        Navigate('/');
    }

    return (
        <form id='edit-user' onSubmit={handleSubmit}>
            <label htmlFor='first-name'>First Name</label>
            <input name='first' value={first_Name} onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor='last-name'>Last Name</label>
            <input name='last' value={last_Name} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor='userEmail'>Email</label>
            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='userTelephone'>Telephone</label>
            <input name='telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            <label htmlFor='userAddress'>Address</label>
            <input name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
            <button type='submit'>Submit Edit</button>
        </form>
    )
}

export default EditUser;