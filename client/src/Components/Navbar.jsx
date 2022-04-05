import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import ProfilePic from "../Images/pic.jpeg";
import "./Nav.css";
const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState("none");
  const showMenu = () => {
    setMenuDisplay("block");
  };
  const closeMenu = () => {
    setMenuDisplay("none");
  };
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    console.log(pathname);
    return pathname === "/";
  };
  return (
    <>
      {/* <div className="Navcontainer"> */}
      <aside className={menuDisplay}>
        <div className="fixed">
          <div className="Navtop">
            <div className="Navlogo">
              <img className="NavLogo" src={Logo} alt="" srcSet="" />
              <h2>
                Secure
                <span className="Navdanger">Lives</span>
              </h2>
            </div>
            <div className="Navclose" id="Navclose-btn" onClick={closeMenu}>
              <span className="material-icons-sharp">close</span>
            </div>
          </div>
          <div className="Navsidebar">
            <NavLink
              activeClassName="Navactive"
              className="NavLinkTag"
              isActive={checkActive}
              to="/"
            >
              <span className="material-icons-sharp">grid_view</span>
              <h3>Dashboard</h3>
            </NavLink>
            <NavLink
              activeClassName="Navactive"
              className={`NavLinkTag`}
              to="/donation"
            >
              <span className="material-icons-sharp">volunteer_activism</span>
              <h3>Donation</h3>
            </NavLink>
            <NavLink
              activeClassName="Navactive"
              className="NavLinkTag"
              to="/fundraise"
            >
              <span className="material-icons-sharp">favorite</span>
              <h3>Fundraise</h3>
            </NavLink>
            <NavLink
              activeClassName="Navactive"
              className="NavLinkTag"
              to="/profile"
            >
              <span className="material-icons-sharp">account_circle</span>
              <h3>Profile</h3>
            </NavLink>
            <NavLink
              activeClassName="Navactive"
              className="NavLinkTag"
              to="/contact"
            >
              <span className="material-icons-sharp">contact_page</span>
              <h3>Contact Us</h3>
            </NavLink>
            <NavLink className="NavLinkTag" to="/login">
              <span className="material-icons-sharp">login</span>
              <h3>Login</h3>
            </NavLink>
          </div>
        </div>
      </aside>
      <div className="Navright" style={{ order: 2 }}>
        <div className="Navtop">
          <button id="Navmenu-btn" onClick={showMenu}>
            <div className="material-icons-sharp">menu</div>
          </button>
          {/* <div className="Navtheme-toggler">
            <span className="material-icons-sharp ">light_mode</span>
            <span className="material-icons-sharp Navactive">dark_mode</span>
          </div> */}
          <div className="Navprofile">
            <div className="Navinfo">
              <p style={{ marginBottom: "0", color: "white" }}>
                Hey, <b> Gurpreet</b>
              </p>
              {/* <small style={{ color: "white" }} className="Navtext-muted">
                User
              </small> */}
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
      {/* </div> */}
    </>
    // <>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <NavLink className="navbar-brand" to="#">
    //         <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
    //           Secure
    //         </span>
    //         <span
    //           style={{
    //             color: " rgb(112, 176, 231)",
    //             fontSize: "1.5rem",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           Lives
    //         </span>
    //       </NavLink>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <NavLink className="nav-link active" aria-current="page" to="/">
    //               Home
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/about">
    //               About
    //             </NavLink>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <NavLink
    //               className="nav-link dropdown-toggle"
    //               to="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Donation
    //             </NavLink>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li>
    //                 <NavLink className="dropdown-item" to="/fundraise">
    //                   Fund Raise
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink className="dropdown-item" to="/donate">
    //                   Donate
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <hr className="dropdown-divider" />
    //               </li>
    //               <li>
    //                 <NavLink className="dropdown-item" to="#">
    //                   New Request
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/contact">
    //               Contact
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/login">
    //               Login
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/signup">
    //               Registraion
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
};

export default Navbar;
