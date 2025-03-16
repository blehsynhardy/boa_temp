import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [transferDetails, setTransferDetails] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Retrieve transfer details from session storage
    const details = sessionStorage.getItem("transferDetails");
    if (details) {
      setTransferDetails(JSON.parse(details));
    } else {
      // If no transfer details, redirect back to transfer page
      navigate("/transfer");
    }

    // Set up timer for OTP expiration
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    if (isNaN(value) && value !== "") {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const resendOtp = () => {
    // Reset timer
    setTimer(60);
    // Clear OTP fields
    setOtp(["", "", "", "", "", ""]);
    // Focus on first field
    document.getElementById("otp-0").focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call or verification process
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to success page or dashboard
      sessionStorage.removeItem("transferDetails");
      navigate("/transfer-success");
    }, 2000);
  };

  const goBack = () => {
    navigate("/transfer");
  };

  // Check if all OTP fields are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="container py-4">
      <div className="mb-4">
        <button className="btn btn-light" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Transfer
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4 className="mb-0">Verify Transfer</h4>
        </div>
        <div className="card-body">
          {transferDetails && (
            <div className="mb-4">
              <h5>Transfer Details</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>From:</strong>{" "}
                    {transferDetails.fromAccount === "checking"
                      ? "Checking Account"
                      : "Savings Account"}
                  </p>
                  <p className="mb-1">
                    <strong>To:</strong> {transferDetails.toAccount}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>Amount:</strong> $
                    {parseFloat(transferDetails.amount).toFixed(2)}
                  </p>
                  {transferDetails.description && (
                    <p className="mb-1">
                      <strong>Description:</strong>{" "}
                      {transferDetails.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-4">
            <p>
              Enter the 6-digit verification code sent to your registered phone
              number
            </p>
            <p className="small text-muted">Code expires in {timer} seconds</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  className="form-control text-center"
                  style={{ width: "50px", height: "50px", fontSize: "24px" }}
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  required
                />
              ))}
            </div>

            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#e31837", color: "white" }}
                disabled={!isOtpComplete || isSubmitting || timer === 0}
              >
                {isSubmitting ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                )}
                Verify and Complete Transfer
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-link"
                onClick={resendOtp}
                disabled={timer > 0}
              >
                <FontAwesomeIcon icon={faRotate} className="me-2" />
                Resend OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
