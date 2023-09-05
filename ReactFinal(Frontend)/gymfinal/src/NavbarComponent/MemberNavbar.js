import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../index.css';
import { useNavigate } from 'react-router-dom';





const MemberNavbar = () => {

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
<>

<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'#FCD20C'}}>
<div className="d-block d-sm-none " > </div> 
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div className="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="me-auto">
 
    <LinkContainer to="/member/memberprofile">
    <Nav.Link className="nav-links">Profile</Nav.Link>
    </LinkContainer>
    
      <LinkContainer to="/member/healthstatus">
    <Nav.Link className="nav-links">Health Status</Nav.Link>
    </LinkContainer>
      
    <LinkContainer to="/member/membsubplan">
    <Nav.Link className="nav-links">Plan List</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/member/membform">
    <Nav.Link className="nav-links">Membership Form</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/member/membworkoutplan">
    <Nav.Link className="nav-links">Workout Plan</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/member/membdietplan">
    <Nav.Link className="nav-links">Diet Plan</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/member/memberorder">
    <Nav.Link className="nav-links">Orders</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/login" onClick={logout}>
    <Nav.Link className="nav-links">Logout</Nav.Link>
    </LinkContainer>
    
    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default MemberNavbar;

