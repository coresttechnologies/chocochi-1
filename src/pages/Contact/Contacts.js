import React from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contacts = () => {
  return (
    <>
      <Navbar padding={"100px"} />
      <div className="contact">
        <div className="contact-box">
          {" "}
          {/* the contact box as cente */}
          <div className="contact-box-titleandmap">
            {/* it for map and title */}
            <div className="contact-box-titleandmap-title">
              <h2>
                Do You Have <br /> Any Questions ?
              </h2>
            </div>
            <div className="contact-box-titleandmap-map">
              {/* <MyComponent/> */}
              <iframe
                title="loc"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.472982448919!2d75.99975486295399!3d10.783082377070814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b976d4bc9669%3A0x6081e9175757a3a1!2sEdappal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1649692971798!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          <div className="contact-box-form">
            {/* it for from */}
            <form >
            {/* <form method="POST" name="curtain-house"> */}
              <input
                type="text"
                name="firstname"
                className=" fname"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                className="lname"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Email"
              />
              <textarea
                placeholder="Message"
                name="message"
                className="msg"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" name="sendbutton" className="btn">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contacts;
