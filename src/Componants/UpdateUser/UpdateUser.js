import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id])
    const handelUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const updatedUser = { name, email, address };
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                alert('user Update successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <h5>This is user update Name: {user.name} </h5>
            <h1>Update user</h1>
            <form onSubmit={handelUpdateUser}>
                <input type="text" name='name' placeholder='name' required />
                <br />
                <input type="text" name='address' placeholder='address' required />
                <br />
                <input type="email" name='email' placeholder='email' required />
                <br />
                <input type="submit" value="update user" />
            </form>
        </div>
    );
};

export default UpdateUser;