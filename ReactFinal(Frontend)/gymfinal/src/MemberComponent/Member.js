import React from 'react'
import { useNavigate}from "react-router-dom";

import MemberNavbar from '../NavbarComponent/MemberNavbar';


 const Member =() =>{
  
    const navigate = useNavigate();

    const logout = () => {
        
        localStorage.removeItem('member_name')
        localStorage.removeItem('member_email')
        localStorage.removeItem('member_contact')
        localStorage.removeItem('member_address')
        localStorage.removeItem('member_password')
        localStorage.removeItem('member_role')
        navigate('/login')
        
    }
        return (
            <div className='container'>

                <MemberNavbar/>   
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <div className="container">
                <h4 style={{textAlign:'center'}}> Hello Member, {localStorage.getItem('member_name')}</h4>
                </div> 
  
                <br/>
              
                <br/>
                
               
            </div>
        )
    
}

export default Member