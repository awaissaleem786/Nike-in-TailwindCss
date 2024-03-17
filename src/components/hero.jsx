import React from "react";
// import { red } from '@mui/material/colors';

import shoes from "../assets/shoe_image.png";
import { Button } from "@mui/material";
import filp from '../assets/flipkart.png'
import amazon from '../assets/amazon.png';
import{motion} from 'framer-motion'
// const color = red[500];

const Hero = () => {
  return (
    <>
      <div className="main row max-w-[1125px] pt-10 mx-auto flex items-center justify-center gap-14" styl={{height: "calc(100vh - 72px)"}}>
        <div className="max-w-[595px] flex flex-col gap-3 mx-auto">
          <div className="font-poppins text-[100px] font-extrabold leading-[102px]">
            <motion.h1 initial={{opacity:0,x:-100}} 
            animate={{opacity:1,x:0}} 
            transition={{duration:1,delay:0.5}}
            >YOUR FEET</motion.h1>
            <motion.h1 initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1,delay:1}}> DESERVE</motion.h1>
            <motion.h1 initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1,delay:1.5}}> THE BEST</motion.h1>
            </div>
          <motion.p
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          transition={{duration:1,delay:2}}
          className="text-lg">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </motion.p>
          <div className="button flex gap-8">
            <Button variant="contained" color="error">Shop Now</Button>
            <Button variant="outlined">Catagory</Button>
          </div>
            <p>Also Available On</p>
          <div className="down-section flex gap-3">
           <img src={filp} alt="" />
           <img src={amazon} alt="" />
          </div>
        </div>
        <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2.5}} >
          <img src={shoes} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
