import React from "react";
import PatientImg from "../Images/Patient.jpg";
function DonationCard() {
  return (
    <>
      <div className="activeDonation">
        <div className="DonationImg">
          <img src={PatientImg} alt="" />
        </div>
        <div className="middle">
          <div className="Middlelef">
            <h1>Jhon</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              saepe!
            </p>
            <h1>₹25,000</h1>
            <p className="RemaingAmount">Remaing: ₹2000</p>
          </div>
          <div className="donationCompletion">
            <svg>
              <circle cx={38} cy={38} r={36}></circle>
            </svg>
            <div className="percentage">
              <p>81%</p>
            </div>
          </div>
        </div>
        <button>Donate</button>
      </div>
    </>
  );
}

export default DonationCard;
