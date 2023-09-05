import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../index.css';
import { useNavigate } from 'react-router-dom';





const AdminNavbar = () => {

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
    <>

      <Navbar collapseOnSelect expand="lg" sticky="top" variant="" style={{ textAlign: 'center', backgroundColor: '#FCD20C' }}>
        <div className="d-block d-sm-none " > </div>
        <Navbar.Brand href="#home">

        </Navbar.Brand>

        <div className="container-xs">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: 'center' }} >

            <Nav className="me-auto">

              <LinkContainer to="/admin/adminprofile">
                <Nav.Link className="nav-links"><h6>Profile</h6></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/admin/userlist">
                <Nav.Link className="nav-links"><h6>User-List</h6></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/admin/planlist">
                <Nav.Link className="nav-links"><h6>Membership-Plans</h6></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/admin/gymmemberlist">
                <Nav.Link className="nav-links"><h6>GymMember List</h6></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login" onClick={logout}>
                <Nav.Link className="nav-links"><h6>Logout</h6></Nav.Link>
              </LinkContainer>

            </Nav>

          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
};


export default AdminNavbar;

