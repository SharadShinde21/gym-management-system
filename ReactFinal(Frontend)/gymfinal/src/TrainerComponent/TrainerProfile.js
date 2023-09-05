import React from 'react'
import TrainerNavbar from '../NavbarComponent/TrainerNavbar'


class TrainProfileComponents extends React.Component {

   

    render(){
        return(
            <div className='container'>
                <TrainerNavbar />
                <div>
                <br/>
                <br/>
                <h2 style={{textAlign:'center', color:'blue'}}>My Profile</h2>
                <br/>
                <br/>
                

                    <table className = "table  table-striped" border="2">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{localStorage.getItem('trainer_name')}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{localStorage.getItem('trainer_email')}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{localStorage.getItem('trainer_address')}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{localStorage.getItem('trainer_contact')}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{localStorage.getItem('trainer_password')}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{localStorage.getItem('trainer_role')}</td>
                        </tr>
                    </tbody>
                </table>
                
                </div>  
            </div>
        )
    }
}

export default TrainProfileComponents