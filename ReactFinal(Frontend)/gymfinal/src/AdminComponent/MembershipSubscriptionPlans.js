import React, { useState, useEffect } from 'react';
import AdminServices from '../Services/AdminServices';
import { useNavigate } from 'react-router';
import AdminNavbar from '../NavbarComponent/AdminNavbar';

const MembershipplanComponent = () => {
    const [subplan, setSubplan] = useState([]);
    const navigate = useNavigate();
    const deleteSubplan = (subplanId) => {
        AdminServices.deleteSubplans(subplanId)
            .then(() => {
                setSubplan(subplan.filter(subplans => subplans.subplanId !== subplanId));
            });
    };

    useEffect(() => {
        AdminServices.getSubplans()
            .then((response) => {
                setSubplan(response.data);
            });
    }, []);

    const addSubplan = () => {
       navigate('/admin/addplan');
    };

    return (
        
        <div>
            <div className='container'>
                <AdminNavbar />
            
            <h2 style={{ textAlign: 'center', color: 'green' }}>Plan List</h2>
            <div>
                <button className="btn btn-success" onClick={addSubplan}>Add Subscription-Plan</button>
                <br />
                <br />
            </div>
            <table className="table table-striped" style={{ border: '2px solid black' }} textAlign='center'>

                <thead>
                    <tr >
                        <th>SUBPLAN-Id</th>
                        <th>PLAN-NAME</th>
                        <th>DURATION in month</th>
                        <th>AMOUNT</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        subplan.map(
                            subplan =>
                                <tr key={subplan.subplanId}>
                                    <td>{subplan.subplanId}</td>
                                    <td>{subplan.planName}</td>
                                    <td>{subplan.duration}</td>
                                    <td>{subplan.amount}</td>
                                    <td>
                                        <button onClick={() => deleteSubplan(subplan.subplanId)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MembershipplanComponent;
