import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import heroImg from '../../Images/heroImg.png'
import BackgroundOval from '../BackgroundOval/BackgroundOval'

const Hero = ({buttonHandler}) => {
  const [first, setfirst] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setfirst(Math.floor(Math.random() * 15))
    },5000)
  },[])
  return (
    <div className="hero">
      <BackgroundOval/>      
      <BackgroundOval left={'100%'} top={'50%'} transX={'-50%'} transY={'-50%'}/>
      <Navbar />
      <div className="left-side">
        <h1>CHOCOCHI</h1>
        <p>
        Chocochi is a premium chocolatier, chocolate fusion cafe brand presents a new world of premium chocolates, Authentic coffees, Desserts and more dedicated towards delivering <b style={{fontSize:"16px",fontWeight:800}}>Global chocolate richness within reach</b>.
        </p>
        <button onClick={buttonHandler}>Let's Start</button>
      </div>
      <div className="right-side">
          <img style={{objectFit:"cover"}} className="hero-img" src={`Productimg/${first}.jpg`} alt="" />
      </div>
    </div>
  );
};

export default Hero;
