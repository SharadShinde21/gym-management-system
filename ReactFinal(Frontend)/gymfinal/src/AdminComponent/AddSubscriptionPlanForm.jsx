import React, { useState } from 'react';
import AdminServices from '../Services/AdminServices';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../NavbarComponent/AdminNavbar';

const CreateSubplanComponent = () => {
    const navigate = useNavigate();

    const [subplan, setSubplan] = useState({
        subplanId: '',
        planName: '',
        duration: '',
        amount: ''
    });

    const saveSubPlan = (e) => {
        e.preventDefault();

        if (subplan.planName.length === 0 || subplan.duration.length === 0 || subplan.amount.length === 0) {
            alert('Please fill in all the required fields');
        } else {
            AdminServices.createSubplans(subplan)
                .then(() => {
                    navigate('/admin/planlist');
                })
                .catch(error => {
                    console.error('Error creating subplan:', error);
                });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSubplan(prevSubplan => ({ ...prevSubplan, [name]: value }));
    };

    const cancel = () => {
        navigate('/admin/planlist');
    };

    return (
        <div>
            <div className="container">
                <AdminNavbar />
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Subscription plan Form</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Plan Name:</label>
                                    <input
                                        placeholder="Plan Name"
                                        type="text"
                                        name="planName"
                                        className="form-control"
                                        value={subplan.planName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Duration in Month:</label>
                                    <input
                                        placeholder="Duration"
                                        type="text"
                                        name="duration"
                                        className="form-control"
                                        value={subplan.duration}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Amount:</label>
                                    <input
                                        placeholder="Amount"
                                        type="text"
                                        name="amount"
                                        className="form-control"
                                        value={subplan.amount}
                                        onChange={handleChange}
                                    />
                                </div>
                                <br />
                                <br />
                                <center>
                                <button className="signup-button-cancel" onClick={cancel}>Cancel</button>|
                               
                                <button type="submit" className="signup-button-save" onClick={saveSubPlan}>Save</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSubplanComponent;
