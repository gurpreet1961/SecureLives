import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DonationCard from "./DonationCard";
import "./home.css";
const Home = () => {
  const [donationData, setDonationData] = useState([]);
  const userHomePage = async () => {
    try {
      const res = await fetch("/getData", {
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
          <h1>Dashboard</h1>
          <div className="insights">
            {donationData.map((val) => {
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
            })}
          </div>

          <div className="homeTables ">
            <div className="completionTable TableStyle">
              <h1>Last 10 Target Complete</h1>
              <table>
                <thead>
                  <tr>
                    <th>Person Name</th>
                    <th>Number of Days</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="TableName">Anmol Rantidev</td>
                    <td className="TableDays">30 days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Shriram Payal</td>
                    <td className="TableDays">20 days</td>
                    <td className="TablePayment">₹100000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Tarit Lalit</td>
                    <td className="TableDays">53 days</td>
                    <td className="TablePayment">₹560000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Kaushal Konkar</td>
                    <td className="TableDays">10 days</td>
                    <td className="TablePayment">₹20000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Ashok Hiranandani</td>
                    <td className="TableDays">20 days</td>
                    <td className="TablePayment">₹55000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Samar Motiwala</td>
                    <td className="TableDays">14 days</td>
                    <td className="TablePayment">₹20000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Kanhaiya Panick</td>
                    <td className="TableDays">29 days</td>
                    <td className="TablePayment">₹370000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Chittaswarup Bedi</td>
                    <td className="TableDays">20 days</td>
                    <td className="TablePayment">₹200000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Amitabh Naimish</td>
                    <td className="TableDays">10 days</td>
                    <td className="TablePayment">₹20000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                  <tr>
                    <td className="TableName">Musheer Jyotiradha</td>
                    <td className="TableDays">22 days</td>
                    <td className="TablePayment">₹90000</td>
                    <td className="donationDone">Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="TopDonors TableStyle">
              <h1>Top 10 Donors</h1>
              <table>
                <thead>
                  <tr>
                    <th>Person Name</th>
                    <th>Number of Donations</th>
                    <th>Total Amount</th>
                  </tr>
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
