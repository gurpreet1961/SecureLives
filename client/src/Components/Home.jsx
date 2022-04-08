import React from "react";
import Navbar from "./Navbar";
import DonationCard from "./DonationCard";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <h1>Dashboard</h1>
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
          <div className="leftScrollbtn">
            <span className="material-icons-sharp leftScrollicon" size="48dp">
              arrow_back_ios
            </span>
          </div>
          <div className="rightScrollbtn">
            <span className="material-icons-sharp rightScrollicon">
              arrow_forward_ios
            </span>
          </div>
          <div className="homeTables ">
            <div className="completionTable TableStyle">
              <h1>Last 10 Target Complete</h1>
              <table>
                <thead>
                  <th>Person Name</th>
                  <th>Number of Days</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="TopDonors TableStyle">
              <h1>Top 10 Donors</h1>
              <table>
                <thead>
                  <th>Person Name</th>
                  <th>Number of Donations</th>
                  <th>Total Amount</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                  <tr>
                    <td className="TableName">Raj</td>
                    <td className="TableDays">20</td>
                    <td className="TablePayment">₹200000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
