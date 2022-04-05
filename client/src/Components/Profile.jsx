import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import profilePic from "../Images/pic.jpeg";
const Profile = () => {
  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <div className="profile_outer_box">
            <div className="profile_box">
              <div className="profile_left_side">
                <div className="profile_left_upper">
                  <img src={profilePic} alt="" />
                  <h2>Gurpreet Singh</h2>
                </div>
                <div className="profile_left_lower">
                  <button className="profile_btn">Basic</button>
                  <button className="profile_btn">My Fundraise</button>
                  <button className="profile_btn"> New Donation</button>
                  <button className="profile_btn">New Fundraise</button>
                </div>
              </div>
              <div className="profile_right_side">
                <div className="profile_edit_icon">
                  <span class="material-icons-sharp">edit</span>
                </div>
                <div className="profile_name profile_right_data">
                  <h2>Name: </h2>
                  <p>Gurpreet Singh</p>
                </div>
                <div className="profile_email profile_right_data">
                  <h2>Email: </h2>
                  <p>19bcs1961@cuchd.in</p>
                </div>
                <div className="profile_phone profile_right_data">
                  <h2>Phone: </h2>
                  <p>8219325594</p>
                </div>
                <div className="profile_profession profile_right_data">
                  <h2>Profession: </h2>
                  <p>Student</p>
                </div>
                <div className="profile_profession profile_right_data">
                  <h2>Donations: </h2>
                  <p>04</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
