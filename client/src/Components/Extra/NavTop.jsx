import React from "react";
import ProfilePic from "../Images/pic.jpeg";
import "./Nav.css";
function NavTop() {
  return (
    <>
      <div className="Navright">
        <div className="Navtop">
          <button id="Navmenu-btn">
            <div className="material-icons-sharp">menu</div>
          </button>
          <div className="Navtheme-toggler">
            <span className="material-icons-sharp ">light_mode</span>
            <span className="material-icons-sharp Navactive">dark_mode</span>
          </div>
          <div className="Navprofile">
            <div className="Navinfo">
              <p style={{ marginBottom: "0" }}>
                Hey, <b>Gurpreet</b>
              </p>
              <small className="Navtext-muted">User</small>
            </div>
            <div className="Navprofile-photo">
              <img
                src={ProfilePic}
                width="100%"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTop;
