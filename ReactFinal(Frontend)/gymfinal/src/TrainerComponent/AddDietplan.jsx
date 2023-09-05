import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerServices from '../Services/TrainerServices';

const CreateDietplanComponent = () => {
    const [planname, setPlanName] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [lunch, setLunch] = useState('');
    const [preworkout, setPreworkout] = useState('');
    const [dinner, setDinner] = useState('');

    const navigate = useNavigate();

    const saveDietPlan = (e) => {
        e.preventDefault();

        if (planname.length === 0) {
            alert('Please enter Plan name');
        } else if (breakfast.length === 0) {
            alert('Please enter breakfast');
        } else if (lunch.length === 0) {
            alert('Please enter lunch');
        } else if (preworkout.length === 0) {
            alert('Please enter preworkout');
        } else if (dinner.length === 0) {
            alert('Please enter dinner');
        } else {
            const dietplan = {
                planname,
                breakfast,
                lunch,
                preworkout,
                dinner,
            };

            console.log('dietplan =>', JSON.stringify(dietplan));

            TrainerServices.createDietPlan(dietplan).then(() => {
                navigate('/trainer/dietplan');
            });
        }
    };

    return (
        <div>
            <div className="contianer">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Diet-plan Form</h3>
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
                                        onChange={(event) => setPlanName(event.target.value)}
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
                                        onChange={(event) => setBreakfast(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Lunch : </label>
                                    <input
                                        placeholder="Lunch"
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        value={lunch}
                                        onChange={(event) => setLunch(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Preworkout : </label>
                                    <input
                                        placeholder="Preworkout"
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        value={preworkout}
                                        onChange={(event) => setPreworkout(event.target.value)}
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
                                        onChange={(event) => setDinner(event.target.value)}
                                    />
                                </div>
                                <br />
                              <center>
                                <button className="signup-button-cancel" onClick={() => navigate('/dietplan')}>Cancel</button>|
                                                                                    
                                <button type="submit" className="signup-button-save" onClick={saveDietPlan}>Save</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDietplanComponent;
