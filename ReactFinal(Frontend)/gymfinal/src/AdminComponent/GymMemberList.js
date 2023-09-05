import React, { useState, useEffect } from 'react';
import AdminServices from '../Services/AdminServices';
import AdminNavbar from '../NavbarComponent/AdminNavbar';

const GymMemberComponent = () => {
    const [gymmember, setGymMember] = useState([]);


    useEffect(() => {
        AdminServices.getGymMembers().then((response) => {
            setGymMember(response.data);
        });
    }, []);

    return (
        <div className='container'>
            <AdminNavbar />
            <div>
            <h2 style={{ textAlign: 'center', color: 'green' }}>Gym Member List</h2>
            <div>
                <br />
                <br />
            </div>

            {gymmember.filter(gymer => gymer.user.role === "member").map(filteredGymer => (
                <table className="table table-striped" style={{ border: '2px solid black' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Join Date</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Plan Name</th>
                            <th>Duration (months)</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{filteredGymer.user.name}</td>
                            <td>{filteredGymer.joinDate}</td>
                            <td>{filteredGymer.weight}</td>
                            <td>{filteredGymer.height}</td>
                            <td>{filteredGymer.plan.planName}</td>
                            <td>{filteredGymer.plan.duration}</td>
                            <td>{filteredGymer.plan.amount}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            </div>
        </div>
    );
};

export default GymMemberComponent;
