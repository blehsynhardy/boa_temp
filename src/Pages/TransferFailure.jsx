import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faArrowLeft,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

const TransferFailure = () => {
  const navigate = useNavigate();

  // Get error message from session storage if available
  const errorMessage =
    sessionStorage.getItem("transferError") ||
    "We couldn't process your transfer at this time.";

  const goToDashboard = () => {
    navigate("/");
  };

  const tryAgain = () => {
    // Clear the error message
    sessionStorage.removeItem("transferError");
    // Go back to the transfer page
    navigate("/transfer");
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <div className="mb-4">
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{ color: "#e31837", fontSize: "5rem" }}
            />
          </div>

          <h2 className="mb-3">Transfer Failed</h2>
          <p className="mb-4">{errorMessage}</p>

          <div className="d-grid gap-2 col-md-6 mx-auto">
            <button
              className="btn"
              style={{ backgroundColor: "#e31837", color: "white" }}
              onClick={tryAgain}
            >
              <FontAwesomeIcon icon={faRotate} className="me-2" />
              Try Again
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={goToDashboard}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Return to Dashboard
            </button>

            <p className="small text-muted mt-3">
              If you continue to experience issues, please contact our support
              team at support@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferFailure;
