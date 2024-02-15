import React from "react";
// import { red } from '@mui/material/colors';

import shoes from "../assets/shoe_image.png";
import { Button } from "@mui/material";
import filp from '../assets/flipkart.png'
import amazon from '../assets/amazon.png';

// const color = red[500];

const Hero = () => {
  return (
    <>
      <div className="main max-w-[1125px] pt-10 mx-auto flex items-center justify-center gap-14" styl={{height: "calc(100vh - 72px)"}}>
        <div className="max-w-[595px] flex flex-col gap-3 mx-auto">
          <h1 className="font-poppins text-[100px] font-extrabold leading-[102px]">YOUR FEET DESERVE THE BEST</h1>
          <p className="text-lg">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
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
        <div className="">
          <img src={shoes} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
