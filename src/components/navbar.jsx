import React from 'react'
import { Button } from '@mui/material';
import logo from '../assets/brand_logo.png'
const Navbar = () => {
  return (
    <>
      <nav className='container  mx-auto p-8 flex justify-between h-[70px]  items-center'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className='flex gap-6'>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <div>
        <Button variant='contained'>Login</Button>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar;
