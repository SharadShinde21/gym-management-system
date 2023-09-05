import React from 'react'
import { useNavigate } from "react-router-dom";


import AdminNavbar from '../NavbarComponent/AdminNavbar';


const Admin = () => {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem('admin_name')
        localStorage.removeItem('admin_email')
        localStorage.removeItem('admin_contact')
        localStorage.removeItem('admin_address')
        localStorage.removeItem('admin_password')
        localStorage.removeItem('admin_role')
        navigate('/login')

    }

    return (
        <div>
           

                <div className='container'>
                    <AdminNavbar  />
                    <button className="btn btn-success" onClick={logout}>Sign Out</button>
                    <div >
                        <h4 style={{ textAlign: 'center' }}> Hello Admin, {localStorage.getItem('admin_name')}</h4>
                    </div>

                    
                </div>



           
            <br />
            <br />

        </div>
    )

}

export default Admin