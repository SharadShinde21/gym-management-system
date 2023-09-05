import React, { useState, useEffect } from 'react';
import TrainerServices from '../Services/TrainerServices';
import { useNavigate } from 'react-router-dom';
import TrainerNavbar from '../NavbarComponent/TrainerNavbar';

const TrainWorkoutComponents = () => {
    const [workoutplan, setWorkoutPlan] = useState([]);
    const navigate = useNavigate();

    const deleteWorkoutPlan = (workoutid) => {
        TrainerServices.deleteWorkoutplan(workoutid).then(() => {
            setWorkoutPlan(workoutplan.filter(workoutplans => workoutplans.workoutid !== workoutid));
        });
    }

    const updateWorkoutPlan = (workoutid) => {
        navigate(`/trainer/updateWorkoutplan/${workoutid}`);
    }

    useEffect(() => {
        TrainerServices.getWorkoutPlan().then((response) => {
            setWorkoutPlan(response.data);
        });
    }, []);

    const addWorkoutPlan = () => {
        navigate('/trainer/addworkout');
    }

    return (
        <div className='container'>
            <TrainerNavbar />
            <div>
            
            <h2 style={{ textAlign: 'center', color: 'purple' }}>Workout-Plans</h2>
            <div>
                <button className="btn btn-success" onClick={addWorkoutPlan}>Add Workout-Plan</button>
                <br />
                <br />
            </div>
            <table className="table  table-striped" style={{ border: '2px solid black' }}>
                <thead>
                    <tr>
                        <th>Workout Name</th>
                        <th>Set 1</th>
                        <th>Set 2</th>
                        <th>Set 3</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        workoutplan.map(workoutplan => (
                            <tr key={workoutplan.workoutid}>
                                <td>{workoutplan.workoutname}</td>
                                <td>{workoutplan.set1}</td>
                                <td>{workoutplan.set2}</td>
                                <td>{workoutplan.set3}</td>
                                <td>
                    
                                    <button onClick={() => updateWorkoutPlan(workoutplan.workoutid)} className="btn btn-info">Update</button>
                                    <button style={{ marginLeft: "50px" }} onClick={() => deleteWorkoutPlan(workoutplan.workoutid)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TrainWorkoutComponents;
