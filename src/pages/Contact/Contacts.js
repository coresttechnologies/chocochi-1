// forfreelance3@gmail.com
// Forfreelance@3

import React, { useRef, useState } from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/Loading/Loading";

const Contacts = () => {
  const [loading,setLoading] = useState(false)
  const formRef = useRef()
  console.log(new FormData(formRef.current));
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzbVv4b4oUcyaB8FPfkmOCxLCABVbZgwKHNj_FcxU4xVFOwEOFVZFJjueAQY2rd9ZWDGQ/exec"

    const handleSubmit = (e) =>{
      setLoading(true)
        e.preventDefault()

        fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
        .then(res => {
            setLoading(false)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="contacts-page">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2838746030684!2d76.00640201480093!3d10.78955649231262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x162baf1285c6923a!2zMTDCsDQ3JzIyLjQiTiA3NsKwMDAnMzAuOSJF!5e0!3m2!1sen!2sin!4v1650027746929!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          <div className="contact-box-form">
            {/* it for from */}
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* <form method="POST" name="curtain-house"> */}
              <input
                type="text"
                name="firstname"
                className=" fname"
                placeholder="First Name"
                required
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
                required
                placeholder="Email"
              />
              <textarea
                placeholder="Message"
                name="message"
                className="msg"
                id=""
                rows="10"
                required
              ></textarea>
              <button type="submit" name="sendbutton"  className="btn">
                {loading ? "Loading..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
