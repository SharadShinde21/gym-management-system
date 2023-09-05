import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
    <wrapper>
      <div className='footer1'>


        < span className='text3'>
          Ready to get Started..?
        </span>
        <span className='text4'>
          Talk to us Today..!
        </span>

        <div className='footer-button1'>
          <NavLink to="/createuser" >
            <button className='navbar-button' style={{ fontSize: '16px' }}>Get Started</button>
          </NavLink>
        </div>

      </div>

      <footer   >
        <div className="container">
          <Row className='row1'>
            <Col md={4}  >
              <h4>Fit and Fab Gym</h4>
              <span>Address : IdealColony,Kothrud,Pune</span>
              <p>Email :  fitnfab@gmail.com </p>
              <p>Phone : +91- 9623857987</p>

            </Col>
            <Col md={4}>
              <h5>Subscribe to Get important updates!</h5>
              <form action='#' >
                <input type='email' required autoComplete='off' placeholder='Email' />
                <button className='navbar-button'> Subscribe</button>
              </form>
            </Col>
            <Col md={4}>
              <h5>Follow Us Here:</h5>
              <div className="icons">

                <NavLink>
                  <FaDiscord />
                </NavLink>

                <NavLink>

                  <FaInstagram />

                </NavLink>
                <NavLink>

                  <FaYoutube />

                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
        <br/>
        <div>
          <hr style={{color:'white'}}/>
          <div>
            <p style={{color:'white'}}>
              @{new Date ().getFullYear()}  Fit and Fab Gym . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </wrapper>
  )
}

export default Footer;