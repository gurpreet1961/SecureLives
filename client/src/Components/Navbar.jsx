import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import ProfilePic from "../Images/avataaars.svg";
import { useHistory } from "react-router-dom";
import { config } from "../App";

// import "./Nav.css";
const Navbar = () => {
	const url = config.endpoint;
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
		return pathname === "/";
	};
	const history = useHistory();
	const [userData, setUserData] = useState(0);
	const callProfilePage = async () => {
		try {
			const res = await fetch(`${url}/profile`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					credentials: "include",
				},
			});
			const data = await res.json();
			setUserData(data);
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

	return (
		<>
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
							to="/ContactUs"
						>
							<span className="material-icons-sharp">contact_page</span>
							<h3>Contact Us</h3>
						</NavLink>
						{/* <NavLink className="NavLinkTag" to="/login">
              <span className="material-icons-sharp">login</span>
              <h3>Login</h3>
            </NavLink> */}
						<NavLink className="NavLinkTag" to="/logout">
							<span className="material-icons-sharp">logout</span>
							<h3>Log Out</h3>
						</NavLink>
					</div>
				</div>
			</aside>
			<div className="Navright" style={{ order: 2 }}>
				<div className="Navtop">
					<button id="Navmenu-btn" onClick={showMenu}>
						<div className="material-icons-sharp">menu</div>
					</button>
					<div className="Navprofile">
						<div className="Navinfo">
							<p style={{ marginBottom: "0", color: "white" }}>
								Hey, <b> {userData.name}</b>
							</p>
						</div>
						<div className="Navprofile-photo">
							<NavLink to="/profile">
								<img
									src={ProfilePic}
									width="100%"
									style={{ borderRadius: "20px" }}
								/>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
