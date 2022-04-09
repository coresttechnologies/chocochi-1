import React from "react";
import aboutImg from "../../Images/aboutImg.png";
import BackgroundOval from "../BackgroundOval/BackgroundOval";

const About = () => {
  return (
    <div className="about">
      <div className="about-page-background"></div>
      <div className="about-page-box">
        <div className="image-container">
          <img src={aboutImg} alt="" />
        </div>
        <div className="content-container">
          <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
           <br /> <span>Mission</span> n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
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
