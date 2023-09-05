import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerServices from '../Services/TrainerServices';
import TrainerNavbar from '../NavbarComponent/TrainerNavbar';

const TrainDietComponents = () => {
    const navigate = useNavigate();

    const [dietplan, setDietPlan] = useState([]);

    const deleteDietPlan = (planid) => {
        TrainerServices.deleteDietPlan(planid).then(() => {
            setDietPlan(dietplan.filter(dietplans => dietplans.planid !== planid));
        });
    }

    const updateDietPlan = (planid) => {
        navigate(`/trainer/updateDietplan/${planid}`);
    }

    const addDietPlan = () => {
        navigate('/trainer/adddietplan');
    }

    useEffect(() => {
        TrainerServices.getDietPlan().then((response) => {
            setDietPlan(response.data);
        });
    }, []);

    return (
        <div className='container'>
            <TrainerNavbar />
            <div>
            <br />
            <br />
            <h2 style={{ textAlign: 'center', color: 'purple' }}>Diet-Plans</h2>
            <div>
                <button className="btn btn-success" onClick={addDietPlan}>Add Diet-Plan</button>
                <br />
                <br />
            </div>
            <table className="table  table-striped" style={{ border: '2px solid black' }}>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Pre-Workout</th>
                        <th>Dinner</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dietplan.map(dietplan => (
                        <tr key={dietplan.planid}>
                            <td>{dietplan.planname}</td>
                            <td>{dietplan.breakfast}</td>
                            <td>{dietplan.lunch}</td>
                            <td>{dietplan.preworkout}</td>
                            <td>{dietplan.dinner}</td>
                            <td>
                                <button onClick={() => updateDietPlan(dietplan.planid)} className="btn btn-info">Update</button>
                                <button style={{ marginLeft: "50px" }} onClick={() => deleteDietPlan(dietplan.planid)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TrainDietComponents;
