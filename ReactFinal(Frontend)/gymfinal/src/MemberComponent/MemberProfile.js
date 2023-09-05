import React from 'react'
import MemberNavbar from '../NavbarComponent/MemberNavbar'


class MemberProfileComponents extends React.Component {

   

    render(){
        return(
            <div>
                <div className='container'>
                <MemberNavbar /> 
               
                <h2 style={{textAlign:'center', color:'blue'}}>Member Profile</h2>
                <br/>
                <br/>

                    <table className = "table  table-striped" border="4">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{localStorage.getItem('member_name')}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{localStorage.getItem('member_email')}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{localStorage.getItem('member_address')}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{localStorage.getItem('member_contact')}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{localStorage.getItem('member_password')}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{localStorage.getItem('member_role')}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                   
            </div>
        )
    }
}

export default MemberProfileComponents