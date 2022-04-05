import React from "react";
import Navbar from "./Navbar";

// import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
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
                    <span class="material-icons-sharp">call</span>
                    <div className="contatct_info_content">
                      <div className="contact_info_title">Phone</div>
                      <div className="contact_info_text">+91 1111-222-2198</div>
                    </div>
                  </div>

                  <div className="contact_info_item">
                    <span class="material-icons-sharp">alternate_email</span>
                    <div className="contatct_info_content">
                      <div className="contact_info_title">Email</div>
                      <div className="contact_info_text">abc012@gmaail.com</div>
                    </div>
                  </div>
                  <div className="contact_info_item">
                    <span class="material-icons-sharp">home</span>
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
              <form id="contact_form">
                <div className="contact_form_title">
                  <h2>Get in Touch</h2>
                </div>

                <div className="contact_form_data">
                  <input
                    type="text"
                    name=""
                    id="contact_form_name"
                    className="contact_form_name input_field"
                    placeholder="Name"
                    required="true"
                  />
                  <input
                    type="email"
                    name=""
                    id="contact_form_email"
                    className="contact_form_email input_field"
                    placeholder="Email"
                    required="true"
                  />
                  <input
                    type="number"
                    name=""
                    id="contact_form_number"
                    className="contact_form_number input_field"
                    placeholder="Phone Number"
                    required="true"
                  />
                </div>
                <div className="message">
                  <textarea
                    name="Message"
                    id="contact_form_message"
                    className="contact_form_message"
                    cols="70"
                    rows="10"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div className="contact_form_button">
                  <button className="contact_submit_button" type="submit">
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
