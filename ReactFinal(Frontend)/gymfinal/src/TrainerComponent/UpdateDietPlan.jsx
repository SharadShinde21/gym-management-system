import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TrainerServices from '../Services/TrainerServices';

const UpdateDietComponent = () => {
    const [planname, setPlanName] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [lunch, setLunch] = useState('');
    const [preworkout, setPreworkout] = useState('');
    const [dinner, setDinner] = useState('');

    const navigate = useNavigate();
    const { planid } = useParams();

    useEffect(() => {
        TrainerServices.getDietPlanById(planid).then((response) => {
            let dietplan = response.data;
            setPlanName(dietplan.planname);
            setBreakfast(dietplan.breakfast);
            setLunch(dietplan.lunch);
            setPreworkout(dietplan.preworkout);
            setDinner(dietplan.dinner);
        });
    }, [planid]);

    const updateDietplan = (e) => {
        e.preventDefault();
        let dietplan = {
            planid,
            planname,
            breakfast,
            lunch,
            preworkout,
            dinner,
        };

        if (planname.length === 0 || breakfast.length === 0 || lunch.length === 0 || preworkout.length === 0 || dinner.length === 0) {
            alert('Please fill in all fields');
        } else {
            TrainerServices.updateDietplan(dietplan, planid).then(() => {
                navigate('/trainer/dietplan');
            });
        }
    };

    const cancel = () => {
        navigate('/trainer/dietplan');
    };

    return (
        <div>
            <div className="contianer">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br />
                        <br />
                        <h2 className="text-center">Update Diet Form</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Diet Name : </label>
                                    <input
                                        placeholder="Diet Name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={planname}
                                        onChange={(e) => setPlanName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Breakfast : </label>
                                    <input
                                        placeholder="Breakfast"
                                        type="text"
                                        name="contact"
                                        className="form-control"
                                        value={breakfast}
                                        onChange={(e) => setBreakfast(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Lunch : </label>
                                    <input
                                        placeholder="Lunch"
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        value={lunch}
                                        onChange={(e) => setLunch(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> PreWorkout : </label>
                                    <input
                                        placeholder="PreWorkout"
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        value={preworkout}
                                        onChange={(e) => setPreworkout(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Dinner : </label>
                                    <input
                                        placeholder="Dinner"
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        value={dinner}
                                        onChange={(e) => setDinner(e.target.value)}
                                    />
                                </div>
                                <br />
                               
                                <center>
                                <button className="signup-button-cancel" onClick={cancel}>Cancel</button>
                                
                                <button type="submit" className="signup-button-save" onClick={updateDietplan}>Save</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDietComponent;
