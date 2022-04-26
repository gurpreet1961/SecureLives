import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import profilePic from "../Images/pic.jpeg";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(0);
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
      console.log(data);
      setUserData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <div className="profile_outer_box">
            <div className="profile_box">
              <form method="GET" className="profile_right_side">
                <div className="profile_right_upper">
                  <img src={profilePic} alt="" />
                  <h2>
                    {userData.name}{" "}
                    <span className="material-icons-sharp profile_edit_icon">
                      edit
                    </span>
                  </h2>
                </div>
                <div className="profile_name profile_right_data">
                  <h2>Name: </h2>
                  <p>{userData.name}</p>
                </div>
                <div className="profile_email profile_right_data">
                  <h2>Email: </h2>
                  <p>{userData.email}</p>
                </div>
                <div className="profile_phone profile_right_data">
                  <h2>Phone: </h2>
                  <p>{userData.phone}</p>
                </div>
                <div className="profile_profession profile_right_data">
                  <h2>Profession: </h2>
                  <p>{userData.work}</p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
