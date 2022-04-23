import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handelToRemoveUser = id => {
        const procced = window.confirm("Are you sure delate this user");
        if (procced) {

            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                    }
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                })
        }

    }
    return (
        <div>
            <h3>this is home</h3>
            <h4>valid user::{users.length}</h4>
            {
                users.map(user => <p key={user._id}>Name: {user.name}, email: {user.email} <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handelToRemoveUser(user._id)}>X</button></p>)
            }

        </div>
    );
};

export default Home;