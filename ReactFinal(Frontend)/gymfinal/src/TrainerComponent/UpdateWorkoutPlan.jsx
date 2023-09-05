import React, { useState, useEffect } from 'react';
import TrainerServices from '../Services/TrainerServices';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateWorkoutComponent = () => {
    const [workoutname, setWorkoutName] = useState('');
    const [set1, setSet1] = useState('');
    const [set2, setSet2] = useState('');
    const [set3, setSet3] = useState('');

    const navigate = useNavigate();
    const { workoutid } = useParams();

    useEffect(() => {
        TrainerServices.getWorkoutPlanById(workoutid).then((response) => {
            const workoutplan = response.data;
            setWorkoutName(workoutplan.workoutname);
            setSet1(workoutplan.set1);
            setSet2(workoutplan.set2);
            setSet3(workoutplan.set3);
        });
    }, [workoutid]);

    const updateWorkoutplan = (e) => {
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

            TrainerServices.updateWorkoutplan(workoutplan, workoutid).then(() => {
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
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <br />
                        <h2 className="text-center">Update Workout Form</h2>
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
                                <center>
                                <button className="signup-button-cancel" onClick={cancel}>
                                    Cancel
                                </button>|
                            
                                <button type="submit" className="signup-button-save" onClick={updateWorkoutplan}>
                                    Save
                                </button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateWorkoutComponent;
