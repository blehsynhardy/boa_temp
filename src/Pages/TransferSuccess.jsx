import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHome } from "@fortawesome/free-solid-svg-icons";

const TransferSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Auto-redirect to dashboard after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const goToDashboard = () => {
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <div className="mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#28a745", fontSize: "5rem" }}
            />
          </div>

          <h2 className="mb-3">Transfer Successful!</h2>
          <p className="mb-4">
            Your money transfer has been processed successfully.
          </p>

          <div className="d-grid gap-2 col-md-6 mx-auto">
            <button
              className="btn"
              style={{ backgroundColor: "#e31837", color: "white" }}
              onClick={goToDashboard}
            >
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Return to Dashboard
            </button>
            <p className="small text-muted mt-2">
              You will be redirected to the dashboard in {countdown} seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSuccess;
