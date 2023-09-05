import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';
import userservice from '../Services/UserServices';
import AdminNavbar from '../NavbarComponent/AdminNavbar';

const UserComponents = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAllUsers();
    }, []);

    const GetAllUsers = () => {
        userservice.getUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const addUser = () => {
        navigate('/admin/addUsers');

    };

    return (
        <div className='container'>
            <AdminNavbar     />
            <div>
            <h2 style={{ textAlign: 'center', color: 'green' }}>User List</h2>
            <div>
                <button className="btn btn-success" onClick={addUser}>Add User</button>
                <br />
                <br />
            </div>
            <table className="table table-striped" style={{ border: '2px solid black' }}>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(
                            user =>
                                <tr key={user.user_id}>
                                    <td>{user.user_id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    {/* <td><select >
                                        <option value="">Select an option</option>
                                        <option value="member">Member</option>
                                        <option value="trainer">Trainer</option>
                                        <option value="admin">Admin</option>
                                    </select></td> */}
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default UserComponents;
