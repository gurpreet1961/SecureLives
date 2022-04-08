import React from "react";
import Navbar from "./Navbar";
import DonationCard from "./DonationCard";
import { NavLink } from "react-router-dom";
const Donation = () => {
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
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
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
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
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
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
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
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
              <DonationCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Donation;
