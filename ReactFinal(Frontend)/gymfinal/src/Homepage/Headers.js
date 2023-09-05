import React from 'react'
import { Image } from 'react-bootstrap';
import Gymlogo from '../images/Gymlogo.jpg';


const Header = () => {
  return (

    <div className='logo'>
      <Image src={Gymlogo} width="130px" height="100px" alt='logo' className='image' />
   
      <h1 className='text'>Fit and Fab Gym </h1>
      <h2 className='text2'>Get Fit,Stay Fabulous!</h2>
    
    </div>

  )
}

export default Header;