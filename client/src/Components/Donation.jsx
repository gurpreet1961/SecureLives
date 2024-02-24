import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DonationCard from "./DonationCard";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { config } from "../App";

const Donation = () => {
	const url = config.endpoint;
	const [donationData, setDonationData] = useState([]);
	const userHomePage = async () => {
		try {
			const res = await fetch(`${url}/getData`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					credentials: "include",
				},
			});
			const data = await res.json();
			setDonationData(data.donationData);
			if (res.status !== 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			window.alert(err);
		}
	};

	useEffect(() => {
		userHomePage();
	}, []);
	return (
		<>
			<div className="Navcontainer">
				<Navbar />
				<main>
					<div className="Education-donation">
						<div className="donationHead">
							<h1>Education</h1>
							<NavLink className="NavLinkTag" to="/education-donation">
								<h2>See more</h2>
							</NavLink>
						</div>

						<div className="insights">
							{donationData.map((val) => {
								if (val.category === "Education") {
									return (
										<React.Fragment key={val._id}>
											<DonationCard
												accNo={val.accNo}
												accHolderName={val.accHolderName}
												category={val.category}
												disc={val.disc}
												ifscCode={val.ifscCode}
												image={val.image}
												paidAmount={val.paidAmount}
												title={val.title}
												postDate={val.postDate}
												totalAmount={val.totalAmount}
												uipID={val.uipID}
											/>
										</React.Fragment>
									);
								}
							})}
						</div>
					</div>
					<div className="medical-donation">
						<div className="donationHead">
							<h1>Medical Treatment</h1>
							<NavLink className="NavLinkTag" to="/education-donation">
								<h2>See more</h2>
							</NavLink>
						</div>

						<div className="insights">
							{donationData.map((val) => {
								if (val.category === "Medical Treatment") {
									return (
										<React.Fragment key={val._id}>
											<DonationCard
												key={val._id + Math.random(1000000000)}
												accNo={val.accNo}
												accHolderName={val.accHolderName}
												category={val.category}
												disc={val.disc}
												ifscCode={val.ifscCode}
												image={val.image}
												paidAmount={val.paidAmount}
												title={val.title}
												postDate={val.postDate}
												totalAmount={val.totalAmount}
												uipID={val.uipID}
											/>
										</React.Fragment>
									);
								}
							})}
						</div>
					</div>
					<div className="NGO-donation">
						<div className="donationHead">
							<h1>NGO / Charity</h1>
							<NavLink className="NavLinkTag" to="/education-donation">
								<h2>See more</h2>
							</NavLink>
						</div>

						<div className="insights">
							{donationData.map((val) => {
								if (val.category === "NGO/Charity") {
									return (
										<React.Fragment key={val._id}>
											<DonationCard
												key={val._id + Math.random(1000000000)}
												accNo={val.accNo}
												accHolderName={val.accHolderName}
												category={val.category}
												disc={val.disc}
												ifscCode={val.ifscCode}
												image={val.image}
												paidAmount={val.paidAmount}
												title={val.title}
												postDate={val.postDate}
												totalAmount={val.totalAmount}
												uipID={val.uipID}
											/>
										</React.Fragment>
									);
								}
							})}
						</div>
					</div>
					<div className="other-donation">
						<div className="donationHead">
							<h1>Other</h1>
							<NavLink className="NavLinkTag" to="/education-donation">
								<h2>See more</h2>
							</NavLink>
						</div>

						<div className="insights">
							{donationData.map((val) => {
								if (val.category === "Other Cause") {
									return (
										<React.Fragment key={val._id}>
											<DonationCard
												key={val._id + Math.random(1000000000)}
												accNo={val.accNo}
												accHolderName={val.accHolderName}
												category={val.category}
												disc={val.disc}
												ifscCode={val.ifscCode}
												image={val.image}
												paidAmount={val.paidAmount}
												title={val.title}
												postDate={val.postDate}
												totalAmount={val.totalAmount}
												uipID={val.uipID}
											/>
										</React.Fragment>
									);
								}
							})}
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Donation;
