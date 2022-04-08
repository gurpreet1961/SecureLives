import React from "react";
import Navbar from "./Navbar";
const Fundraise = () => {
  return (
    <>
      <div className="Navcontainer">
        <Navbar />
        <main>
          <h1 style={{ marginBottom: "2rem" }}>Fundraise</h1>
          <div className="FundFormOuter">
            <div className="FundForm">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputFundTitle" className="form-label">
                    Title
                  </label>
                  <span
                    style={{
                      top: "3.21rem",
                      right: "2.8rem",
                    }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    title
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFundTitle"
                    placeholder="Title"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputFundAmount" className="form-label">
                    How much do you want to raise?
                  </label>
                  <span
                    style={{
                      top: "3.21rem",
                      right: "17.6rem",
                    }}
                    className="material-icons-sharp fundInputIcon"
                  >
                    currency_rupee
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="inputFundAmount"
                    placeholder="Amount"
                  ></input>
                </div>
                <div className="col-6">
                  <label for="inputFundCauses" className="form-label">
                    Fundraise For...
                  </label>
                  <select id="inputFundCauses" className="form-select">
                    <option selected>Choose...</option>
                    <option>Medical Treatment</option>
                    <option>Education</option>
                    <option>NGO/Charity</option>
                    <option>Other Cause</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="inputFundImage" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputFundImage"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputFundStory" class="form-label">
                    Enter Complete Discription for Fundraise
                  </label>
                  <textarea
                    class="form-control"
                    id="inputFundStory"
                    rows="15"
                    placeholder="Write a story that does justice to your cause and makes the supporter click the donate button.
Follow these steps:
                * Talk about who you are raising funds for, be it yourself or your loved one.
                 * Explain why you are raising funds.
                * Make an appeal to your supporters."
                  ></textarea>
                </div>
                {/* <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label for="inputState" className="form-label">
                State
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-12"></div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div> */}
                <h2>BANK DETAILS</h2>
                <div className="col-md-6">
                  <label for="inputAccountHolderName" className="form-label">
                    Account Holder Name
                  </label>
                  <span
                    style={{ top: "3.2rem", right: "11.1rem" }}
                    class="material-icons-sharp fundInputIcon"
                  >
                    person
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    id="inputAccountHolderName"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputAccountNumber" className="form-label">
                    Account number
                  </label>
                  <span
                    style={{ top: "3.2rem", right: "8.2rem" }}
                    class="material-icons-sharp fundInputIcon"
                  >
                    pin
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAccountNumber"
                    placeholder="Account Number"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputIFSCCode" className="form-label">
                    IFSC Code
                  </label>
                  <span
                    style={{ top: "3.2rem", right: "5.2rem" }}
                    class="material-icons-sharp fundInputIcon"
                  >
                    account_balance
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputIFSCCode"
                    placeholder="IFSC Code"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputUPIID" className="form-label">
                    UPI ID (Optional)
                  </label>
                  <span
                    style={{ top: "3.2rem", right: "9.99rem" }}
                    class="material-icons-sharp fundInputIcon"
                  >
                    account_balance_wallet
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUPIID"
                    placeholder="@UPI"
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      required
                    />
                    <label class="form-check-label" for="gridCheck">
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
                  <button type="submit" className="btn btn-primary">
                    SUBMIT
                  </button>
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
