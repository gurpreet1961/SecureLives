import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import profilePic from "../Images/avataaars.svg";
import { useHistory } from "react-router-dom";
import { config } from "../App";

const Profile = () => {
	const url = config.endpoint;

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
			<div className="Navcontainer">
				<Navbar />
				<main className="profileMain">
					<h1 className="Profile_heading">YOUR PROFILE</h1>
					<div className="profilehead">
						<img src={profilePic} alt="" />
						<div>
							<h2>
								{userData.name}{" "}
								{/* <span className="material-icons-sharp profile_edit_icon">
                  edit
                </span> */}
							</h2>
							<h2>{userData.email}</h2>
						</div>
					</div>
					<div className="profiledata">
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
						<div className="profile_donated profile_right_data">
							<h2>Donated: </h2>
							<p>₹{userData.donationAmount}</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Profile;
