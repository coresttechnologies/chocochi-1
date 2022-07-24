import React, { useEffect, useRef } from "react";
import aboutImg from "../../Images/aboutImg.png";
import BackgroundOval from "../BackgroundOval/BackgroundOval";

const About = ({setValue}) => {
  const about = useRef()
  useEffect(() => {
    setValue(about.current)
  },[])

  return (
    <div ref={about} className="about">
      <div className="about-page-background"></div>
      <h1>ABOUT US</h1>
      <div className="about-page-box">
        <div className="image-container-about">
          <img src={aboutImg} alt="" />
        </div>
        <div className="content-container">
          <p> Chocochi is a premium chocolatier, Chocolate fusion café brand under MABCO VENTURES consisting of three foundes Muhamed Basheer,Ashraf Kammili and Musthafa Pilassery </p>
          <p> <span>Our Mission - </span> To be the best premium chocolatier , Chocolate fusion cafe brand in India, Middle East and Africa</p>
          <p> <span>Our Vision - </span> To deliver the experience of best ‘Chi’ (The Vital Energy) uniting the Body, Mind and Spirit out of Premium Chocolate Blends globally</p>
        </div>
      </div>
      <BackgroundOval
        left={"50%"}
        top={"50%"}
        transX={"-50%"}
        transY={"-50%"}
      />
    </div>
  );
};

export default About;
