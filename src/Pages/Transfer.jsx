import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Transfer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromAccount: "checking",
    toAccount: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store transfer details in session storage to use on OTP page
    sessionStorage.setItem("transferDetails", JSON.stringify(formData));
    navigate("/otp-verification");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <button className="btn btn-light" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Dashboard
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4 className="mb-0">Transfer Money</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fromAccount" className="form-label">
                From Account
              </label>
              <select
                className="form-select"
                id="fromAccount"
                name="fromAccount"
                value={formData.fromAccount}
                onChange={handleChange}
                required
              >
                <option value="checking">Checking Account - $100,000</option>
                <option value="savings">Savings Account - $10,000</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="toAccount" className="form-label">
                To Account
              </label>
              <input
                type="text"
                className="form-control"
                id="toAccount"
                name="toAccount"
                placeholder="Account number or name"
                value={formData.toAccount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description (Optional)
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="2"
                placeholder="What's this transfer for?"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#e31837", color: "white" }}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                Continue to Verification
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
