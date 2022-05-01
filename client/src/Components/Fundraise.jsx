import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const Fundraise = () => {
  const [inputField, setInputField] = useState({
    title: "",
    totalAmount: "",
    category: "",
    image: "",
    disc: "",
    accHolderName: "",
    accNo: "",
    ifscCode: "",
    uipID: "",
  });
  const imageUpload = (e) => {
    setInputField({ ...inputField, image: e.target.files[0] });
  };
  const handleInputs = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const {
      title,
      totalAmount,
      category,
      image,
      disc,
      accHolderName,
      accNo,
      ifscCode,
      uipID,
    } = inputField;
    if (validForm()) {
      const formdata = new FormData();
      formdata.append("myFile", image, image.name);
      formdata.append("title", title);
      formdata.append("totalAmount", totalAmount);
      formdata.append("category", category);
      formdata.append("disc", disc);
      formdata.append("accHolderName", accHolderName);
      formdata.append("accNo", accNo);
      formdata.append("ifscCode", ifscCode);
      formdata.append("uipID", uipID);
      try {
        await axios
          .post("/add", formdata)
          .then(function (res) {
            if (res.status === 200) {
              setInputField({
                title: "",
                totalAmount: "",
                category: "",
                image: "",
                disc: "",
                accHolderName: "",
                accNo: "",
                ifscCode: "",
                uipID: "",
              });
            }
          })
          .catch(function (err) {
            window.alert(err);
          });
      } catch (e) {
        window.alert(e);
      }
    } else {
      window.alert("Invalid");
    }
  };
  const validForm = () => {
    const {
      title,
      totalAmount,
      category,
      image,
      disc,
      accHolderName,
      accNo,
      ifscCode,
      uipID,
    } = inputField;
    if (
      image.type === "image/jpg" ||
      image.type === "image/jpeg" ||
      image.type === "image/jpeg"
    ) {
      if (
        !title ||
        !totalAmount ||
        !category ||
        !disc ||
        !accHolderName ||
        !accNo ||
        !ifscCode ||
        !uipID
      ) {
        return false;
      }
      return true;
    }
    return false;
  };
  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <h1 style={{ marginBottom: "2rem" }}>Fundraise</h1>
          <div className="FundFormOuter">
            <div className="FundForm">
              <form method="POST" className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputFundTitle" className="form-label">
                    Title
                  </label>
                  <span
                    style={{
                      top: "3.31rem",
                      right: "2.85rem",
                    }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    title
                  </span>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    value={inputField.title}
                    onChange={handleInputs}
                    id="inputFundTitle"
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputFundAmount" className="form-label">
                    Amount Raise
                  </label>
                  <span
                    style={{
                      top: "3.31rem",
                      right: "7rem",
                    }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    currency_rupee
                  </span>
                  <input
                    name="totalAmount"
                    value={inputField.totalAmount}
                    onChange={handleInputs}
                    type="number"
                    className="form-control"
                    id="inputFundAmount"
                    placeholder="Amount"
                    required
                  ></input>
                </div>
                <div className="col-6 col-6-edit">
                  <label htmlFor="inputFundCauses" className="form-label">
                    category
                  </label>
                  <select
                    name="category"
                    onChange={handleInputs}
                    id="inputFundCauses"
                    className="form-select"
                    required
                  >
                    <option value={inputField.category}>Choose...</option>
                    <option>Medical Treatment</option>
                    <option>Education</option>
                    <option>NGO/Charity</option>
                    <option>Other Cause</option>
                  </select>
                </div>
                <div className="col-6 col-6-edit">
                  <label htmlFor="donationImg" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    name="myFile"
                    onChange={imageUpload}
                    className="form-control"
                    id="inputFundImage"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputFundStory" className="form-label">
                    Enter Complete Discription for Fundraise
                  </label>
                  <textarea
                    name="disc"
                    value={inputField.disc}
                    onChange={handleInputs}
                    className="form-control"
                    id="inputFundStory"
                    rows="15"
                    placeholder="Write a story that does justice to your cause and makes the supporter click the donate button.
                    required
Follow these steps:
                * Talk about who you are raising funds for, be it yourself or your loved one.
                 * Explain why you are raising funds.
                * Make an appeal to your supporters."
                  ></textarea>
                </div>

                <h2>BANK DETAILS</h2>
                <div className="col-md-6">
                  <label
                    htmlFor="inputAccountHolderName"
                    className="form-label"
                  >
                    Account Holder Name
                  </label>
                  <span
                    style={{ top: "3.3rem", right: "11.1rem" }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    person
                  </span>

                  <input
                    name="accHolderName"
                    value={inputField.accHolderName}
                    onChange={handleInputs}
                    type="text"
                    className="form-control"
                    id="inputAccountHolderName"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputAccountNumber" className="form-label">
                    Account number
                  </label>
                  <span
                    style={{ top: "3.3rem", right: "8.19rem" }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    pin
                  </span>
                  <input
                    name="accNo"
                    value={inputField.accNo}
                    onChange={handleInputs}
                    type="text"
                    className="form-control"
                    id="inputAccountNumber"
                    placeholder="Account Number"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputIFSCCode" className="form-label">
                    IFSC Code
                  </label>
                  <span
                    style={{ top: "3.25rem", right: "5.2rem" }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    account_balance
                  </span>
                  <input
                    name="ifscCode"
                    value={inputField.ifscCode}
                    onChange={handleInputs}
                    type="text"
                    className="form-control"
                    id="inputIFSCCode"
                    placeholder="IFSC Code"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputUPIID" className="form-label">
                    UPI ID (Optional)
                  </label>
                  <span
                    style={{ top: "3.25rem", right: "9.9rem" }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    account_balance_wallet
                  </span>
                  <input
                    name="uipID"
                    value={inputField.uipID}
                    onChange={handleInputs}
                    type="text"
                    className="form-control"
                    id="inputUPIID"
                    placeholder="@UPI"
                    required
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="title"
                      type="checkbox"
                      id="gridCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I acknowledge and confirm that the information provided
                      above is true and correct to the best of my knowledge and
                      belief and I agree to be liable if any of the above
                      information is found to be false or misleading. I hereby
                      give my consent for sharing it with regulatory authorities
                      or disclosing it as may be required by law."
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    name="submit"
                    onClick={PostData}
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Fundraise;
