import React from "react";
import aboutImg from "../../Images/aboutImg.png";
import BackgroundOval from "../BackgroundOval/BackgroundOval";

const About = () => {
  return (
    <div className="about">
      <div className="about-page-background"></div>
      <h1>ABOUT US</h1>
      <div className="about-page-box">
        <div className="image-container">
          <img src={aboutImg} alt="" />
        </div>
        <div className="content-container">
          <p> <b>CHOCOCHI</b>  is a cafe based premium chocolate concept under MABCO VENTURES consisting of three founders Muhamed Basheer,Ashraf Kammili and Musthafa Pilassery </p>
          <p> <span>Our Mission - </span> To be the best café based chocolate Artisans in India, Middle East and Africa</p>
          <p> <span>Our Vision - </span> To deliver the best ‘Chi’ (The Vital Life Energy) uniting the Body, Mind and Spirit out of Premium Chocolate Blends globally</p>
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
