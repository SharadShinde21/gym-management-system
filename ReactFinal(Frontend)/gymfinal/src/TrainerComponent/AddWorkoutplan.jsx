import React, { useState } from 'react';
import TrainerServices from '../Services/TrainerServices';
import { useNavigate } from 'react-router-dom';
import TrainerNavbar from '../NavbarComponent/TrainerNavbar';

const CreateWorkoutplanComponent = () => {
    const [workoutid] = useState('');  //,setWorkoutId
    const [workoutname, setWorkoutName] = useState('');
    const [set1, setSet1] = useState('');
    const [set2, setSet2] = useState('');
    const [set3, setSet3] = useState('');
    
    const navigate = useNavigate();

    const saveWorkoutPlan = (e) => {
        e.preventDefault();

        if (workoutname.length === 0) {
            alert('Please enter Workout name');
        } else if (set1.length === 0) {
            alert('Please enter Set 1');
        } else if (set2.length === 0) {
            alert('Please enter Set 2');
        } else if (set3.length === 0) {
            alert('Please enter Set 3');
        } else {
            const workoutplan = {
                workoutid,
                workoutname,
                set1,
                set2,
                set3,
            };

            TrainerServices.createWorkoutplan(workoutplan).then(() => {
                navigate('/trainer/workoutplan');
            });
        }
    };

    const cancel = () => {
        navigate('/trainer/workoutplan');
    };

    return (
        <div>
            <div className="contianer">
                <TrainerNavbar />
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Add Workout-plan Form</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Workout Name : </label>
                                    <input
                                        placeholder="Workout Name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={workoutname}
                                        onChange={(event) => setWorkoutName(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Set 1 : </label>
                                    <input
                                        placeholder="Set 1"
                                        type="text"
                                        name="contact"
                                        className="form-control"
                                        value={set1}
                                        onChange={(event) => setSet1(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Set 2 : </label>
                                    <input
                                        placeholder="Set 2"
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        value={set2}
                                        onChange={(event) => setSet2(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Set 3 : </label>
                                    <input
                                        placeholder="Set 3"
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        value={set3}
                                        onChange={(event) => setSet3(event.target.value)}
                                    />
                                </div>
                                <br />
                                <br />
                                <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                                <br />
                                <br />
                                <button type="submit" className="btn btn-success" onClick={saveWorkoutPlan}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateWorkoutplanComponent;
