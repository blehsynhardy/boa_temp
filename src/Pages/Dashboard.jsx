// Dashboard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, faArrowUp, faUniversity, 
  faDollarSign, faCreditCard 
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section mb-4">
        <p className="text-secondary mb-0">Dashboard</p>
        <h2>Good afternoon!, Alexa Richardson</h2>
        <p className="text-secondary">Here's what's happening</p>
        <button className="btn" style={{ backgroundColor: '#e31837', color: 'white' }}>
          <FontAwesomeIcon icon={faChartLine} className="me-2" />
          ALL TRANSACTIONS
        </button>
      </div>

      {/* Account Cards */}
      <div className="row">
        {/* Checking Account */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="text-secondary mb-2">Checking Account</p>
                <h3>$5,250</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} /> 12% Since last month
                </div>
              </div>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: '#ffe0e4', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e31837'
              }}>
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
                <h3>$20,600</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} /> 5% Since last month
                </div>
              </div>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: '#ffe0e4', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e31837'
              }}>
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
                <h3>$1,600</h3>
                <div className="text-success">
                  <FontAwesomeIcon icon={faArrowUp} /> 16% Since last month
                </div>
              </div>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: '#ffe0e4', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e31837'
              }}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </div>
          </div>
        </div>

        {/* Investment */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm" style={{ backgroundColor: '#e31837', color: 'white' }}>
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="mb-2">INVESTMENT</p>
                <h3>$283,200</h3>
                <div>
                  <FontAwesomeIcon icon={faArrowUp} /> 3% Since last month
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e31837'
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accounts Section */}
      <div className="mt-5">
        <h4>Accounts</h4>
        <div className="row mt-3">
          {/* Account cards would be added here */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <p>Bank of America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;