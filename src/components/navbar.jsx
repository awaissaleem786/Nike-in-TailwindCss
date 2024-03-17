import React, { useState } from "react";
import { Button } from "@mui/material";
import logo from "../assets/brand_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
const Navlist = () => {
  return (
    <ul className="sm:flex sm:gap-6">
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <motion.nav
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
      className="container  mx-auto p-8 flex justify-between h-[70px]  items-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden sm:block">{<Navlist/>}</div>
        <div className="flex">
          <Button variant="contained">Login</Button>
          <div className="p-2 sm:hidden">
            {
              show ? <CloseIcon sx={{fontSize:40}} onClick={()=>setShow(false)}/>: <MenuIcon sx={{fontSize:40}} onClick={()=>{setShow(!false)}} />

            }
          </div>
        </div>
      </motion.nav>
      {
        show && <div>
          <Navlist/>
        </div>
      }
    </>
  );
};

export default Navbar;
