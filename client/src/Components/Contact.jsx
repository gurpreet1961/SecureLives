import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      window.alert(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  //Storing message

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  //send data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert("message not sent");
    } else {
      alert("Message Sent");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <div className="contact_info">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-1 ">
                  <div className="contact_info_item">
                    <span className="material-icons-sharp">call</span>
                    <div className="contatct_info_content">
                      <div className="contact_info_title">Phone</div>
                      <div className="contact_info_text">+91 1111-222-2198</div>
                    </div>
                  </div>

                  <div className="contact_info_item">
                    <span className="material-icons-sharp">
                      alternate_email
                    </span>
                    <div className="contatct_info_content">
                      <div className="contact_info_title">Email</div>
                      <div className="contact_info_text">abc012@gmaail.com</div>
                    </div>
                  </div>
                  <div className="contact_info_item">
                    <span className="material-icons-sharp">home</span>
                    <div className="contatct_info_content">
                      <div className="contact_info_title">Address</div>
                      <div className="contact_info_text">Himachal, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**Contact US form */}
          <div className="contact_form">
            <div className="form_container">
              <form method="POST" id="contact_form">
                <div className="contact_form_title">
                  <h2>Get in Touch</h2>
                </div>

                <div className="contact_form_data">
                  <input
                    type="text"
                    name="name"
                    id="contact_form_name"
                    className="contact_form_name input_field"
                    placeholder="Name"
                    onChange={handleInputs}
                    value={userData.name}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id="contact_form_email"
                    className="contact_form_email input_field"
                    onChange={handleInputs}
                    value={userData.email}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    id="contact_form_number"
                    className="contact_form_number input_field"
                    placeholder="Phone Number"
                    onChange={handleInputs}
                    value={userData.phone}
                    required
                  />
                </div>
                <div className="message">
                  <textarea
                    name="message"
                    id="contact_form_message"
                    className="contact_form_message"
                    cols="70"
                    rows="10"
                    onChange={handleInputs}
                    value={userData.message}
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div className="contact_form_button">
                  <button
                    className="contact_submit_button"
                    onClick={contactForm}
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
