// Dashboard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowUp,
  faUniversity,
  faDollarSign,
  faCreditCard,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const handleTransferClick = () => {
    navigate("/transfer");
  };

  return (
    <>
      <div className="welcome-section mb-4">
        <p className="text-secondary mb-0">Dashboard</p>
        <h4>{getGreeting()}, Ganley kym narelle</h4>
        <p className="text-secondary">Here's what's happening</p>
        <div className="d-flex gap-3">
          <button
            className="btn"
            style={{ backgroundColor: "#e31837", color: "white" }}
          >
            <FontAwesomeIcon icon={faChartLine} className="me-2" />
            ALL TRANSACTIONS
          </button>

          <button
            className="btn"
            style={{ backgroundColor: "#e31837", color: "white" }}
            onClick={handleTransferClick}
          >
            <FontAwesomeIcon icon={faWallet} className="me-2" />
            Transfer
          </button>
        </div>
      </div>

      {/* Account Cards */}
      <div className="row">
        {/* Checking Account */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="text-secondary mb-2">Checking Account</p>
                <h3>$100,000</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <span className="text-small" style={{ fontSize: "12px" }}>
                    12% Since last month
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#ffe0e4",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e31837",
                }}
              >
                <FontAwesomeIcon icon={faUniversity} />
              </div>
            </div>
          </div>
        </div>

        {/* Saving Account */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="text-secondary mb-2">Saving Account</p>
                <h3>$0.00</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <span style={{ fontSize: "12px" }}>5% Since last month</span>
                </div>
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#ffe0e4",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e31837",
                }}
              >
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
          </div>
        </div>

        {/* Credit Cards */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="text-secondary mb-2">Credit Cards</p>
                <h3>$0.00</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <span style={{ fontSize: "12px" }}>0% Since last month</span>
                </div>
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#ffe0e4",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e31837",
                }}
              >
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </div>
          </div>
        </div>

        {/* Investment */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div
            className="card shadow-sm"
            style={{ backgroundColor: "#e31837", color: "white" }}
          >
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="mb-2">INVESTMENT</p>
                <h3>$0.00</h3>
                <div>
                  <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <span style={{ fontSize: "12px" }}>0% Since last month</span>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e31837",
                }}
              >
                <FontAwesomeIcon icon={faChartLine} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accounts Section */}
      <div className="mt-2">
        <h4>Accounts</h4>
        <div className="row mt-3">
          {/* Account cards would be added here */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://banking-dashboard.netlify.app/images/logos/boa.png"
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <img
                  src="	https://banking-dashboard.netlify.app/images/logos/cs.png"
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://banking-dashboard.netlify.app/images/logos/rh.png"
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://banking-dashboard.netlify.app/images/logos/m1.png"
                  alt=""
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recent Transactions</h5>
            <p className="card-text text-center mt-3 mb-3 fw-bold">
              No recent transactions found.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
