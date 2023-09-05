import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../Services/UserServices';

const CreateUserComponent = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: '',
        name: '',
        contact: '',
        address: '',
        email: '',
        password: '',
        role: ''
    });

    const saveUser = (e) => {
        e.preventDefault();

        if (user.name.length === 0 || user.contact.length === 0 || user.email.length === 0 || user.address.length === 0 || user.password.length === 0) {
            alert('Please fill in all the required fields');
        }else if(!/^\d{10}$/.test(user.contact)){
            alert('Invalid phone number')
        }else if(!/\S+@\S+\.\S+/.test(user.email)){
            alert('Invalid email address')
        }else if(user.password.length < 6){
            alert('Password must be at least 6 characters')
        } else {
            UserServices.createUsers(user)
                .then(() => {
                    navigate('/login');
                })
                .catch(error => {
                    console.error('Error creating user:', error);
                });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const cancel = () => {
        navigate('/createuser');
    };

    return (
        <div style={{alignItems:'center',textAlign:'center'}}>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Registration-Form</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={user.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Contact : </label>
                                    <input placeholder="Contact"
                                        type="tel"
                                        name="contact"
                                        className="form-control"
                                        value={user.contact}
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id : </label>
                                    <input placeholder="Email Id"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Address : </label>
                                    <input placeholder="Address"
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        value={user.address}
                                        onChange={handleChange} />
                                </div>



                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                <br />
                                <br />
                                <center>
                                    <button className="signup-button-cancel" onClick={cancel}>Cancel</button>|

                                    <button type="submit" className="signup-button-save" onClick={saveUser}>Save</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUserComponent;
