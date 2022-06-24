import React from "react";
import Navbar from "../Navbar/Navbar";
import heroImg from '../../Images/heroImg.png'
import BackgroundOval from '../BackgroundOval/BackgroundOval'

const Hero = ({buttonHandler}) => {
  return (
    <div className="hero">
      <BackgroundOval/>      
      <BackgroundOval left={'100%'} top={'50%'} transX={'-50%'} transY={'-50%'}/>
      <Navbar />
      <div className="left-side">
        <h1>CHOCOCHI</h1>
        <p>
         Chocochi is a premium chocolatier, Chocolate fusion café brand presents a new world of premium chocolates, Authentic coffees, Desserts and more dedicated towards delivering Global chocolate richness within reach.
        </p>
        <button onClick={buttonHandler}>Let's Start</button>
      </div>
      <div className="right-side">
          <img className="hero-img" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
