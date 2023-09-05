import React from 'react'
import { useNavigate} from "react-router-dom";

import TrainerNavbar from '../NavbarComponent/TrainerNavbar';




 const Trainer =() =>{

    
    const navigate = useNavigate();

    const logout = () => {
        
        localStorage.removeItem('train_name')
        localStorage.removeItem('train_email')
        localStorage.removeItem('train_contact')
        localStorage.removeItem('train_address')
        localStorage.removeItem('train_password')
        localStorage.removeItem('train_role')
        navigate('/login')
        
    }

        return (
            <div className='container'>
                
               
                <TrainerNavbar/>   
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <div className="container">
                <h4 style={{textAlign:'center'}}> Hello Trainer, {localStorage.getItem('trainer_name')}</h4>
                </div> 
         <br/>
                
                <br/>
                
               
            </div>
            
        )
    
}
export default Trainer













