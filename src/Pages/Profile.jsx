import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../assets/images/profile.jpeg";
import {
  faArrowLeft,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faMapMarkerAlt,
  faBell,
  faShieldAlt,
  faFingerprint,
  faExclamationTriangle,
  faSave,
  faToggleOn,
  faToggleOff
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  
  // Sample user data
  const [userData, setUserData] = useState({
    firstName: "Ganley",
    lastName: "Kym Narelle",
    email: "Ganleykym@gmail.com",
    phone: "+61 402 990 662",
    address: {
      street: "123 Main Street",
      city: "Austin",
      state: "TX",
      zip: "78701"
    },
    accountNumber: "****1234",
    lastLogin: "March 16, 2025 at 9:32 AM",
    twoFactorEnabled: true,
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  });
  
  // Form state tracking
  const [formData, setFormData] = useState({ ...userData });
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  const goBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleToggle = (field) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: !formData[parent][child]
        }
      });
    } else {
      setFormData({
        ...formData,
        [field]: !formData[field]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setSuccessMessage("Changes saved successfully!");
    setIsEditing(false);
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

const renderPersonalInfo = () => (
    <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Personal Information</h5>
            <button 
                type="button" 
                className="btn btn-sm btn-outline-primary"
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? "Cancel" : "Edit"}
            </button>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <img src={ProfileImage} alt="" width="65px" height="70px" className="rounded-circle" />
                    </div>
                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-3 col-form-label">First Name</label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="lastName" className="col-sm-3 col-form-label">Last Name</label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <div className="input-group">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="phone" className="col-sm-3 col-form-label">Phone</label>
                    <div className="col-sm-9">
                        <div className="input-group">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                </div>
                {isEditing && (
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                            <FontAwesomeIcon icon={faSave} className="me-2" />
                            Save Changes
                        </button>
                    </div>
                )}
            </form>
        </div>
    </div>
);

  const renderAddressInfo = () => (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Address Information</h5>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="street" className="col-sm-3 col-form-label">Street Address</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="street"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="city" className="col-sm-3 col-form-label">City</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="city"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="state" className="col-sm-3 col-form-label">State</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="state"
                name="address.state"
                value={formData.address.state}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="zip" className="col-sm-3 col-form-label">ZIP Code</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="zip"
                name="address.zip"
                value={formData.address.zip}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          {isEditing && (
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );

  const renderSecurityInfo = () => (
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">Security Settings</h5>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <h6 className="mb-3">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            Password
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">Password last changed: <strong>February 28, 2025</strong></p>
              <p className="text-muted small">It's recommended to change your password every 90 days.</p>
            </div>
            <button className="btn btn-outline-secondary">Change Password</button>
          </div>
        </div>
        
        <hr />
        
        <div className="mb-4">
          <h6 className="mb-3">
            <FontAwesomeIcon icon={faFingerprint} className="me-2" />
            Two-Factor Authentication
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0">Status: <strong className={formData.twoFactorEnabled ? "text-success" : "text-danger"}>
                {formData.twoFactorEnabled ? "Enabled" : "Disabled"}
              </strong></p>
              <p className="text-muted small">Add an extra layer of security to your account.</p>
            </div>
            <button 
              className={`btn ${formData.twoFactorEnabled ? 'btn-outline-danger' : 'btn-outline-success'}`}
              onClick={() => handleToggle('twoFactorEnabled')}
            >
              {formData.twoFactorEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
        
        <hr />
        
        <div>
          <h6 className="mb-3">
            <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
            Recent Activity
          </h6>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">Login from Austin, TX</h6>
                <small>3 hours ago</small>
              </div>
              <p className="mb-1 text-muted">Device: Chrome / macOS</p>
            </div>
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">Password changed</h6>
                <small>February 28, 2025</small>
              </div>
              <p className="mb-1 text-muted">Device: Chrome / macOS</p>
            </div>
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">Login from Dallas, TX</h6>
                <small>March 10, 2025</small>
              </div>
              <p className="mb-1 text-muted">Device: Safari / iOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsInfo = () => (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Notification Preferences</h5>
        <button 
          type="button" 
          className="btn btn-sm btn-outline-primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Email Notifications</h6>
                  <p className="mb-0 text-muted small">Receive updates, alerts, and promotional messages via email</p>
                </div>
                <div className="form-check form-switch">
                  <button 
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleToggle('notifications.email')}
                    disabled={!isEditing}
                  >
                    <FontAwesomeIcon 
                      icon={formData.notifications.email ? faToggleOn : faToggleOff} 
                      size="2x"
                      color={formData.notifications.email ? "#0d6efd" : "#6c757d"}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Push Notifications</h6>
                  <p className="mb-0 text-muted small">Receive real-time alerts directly to your browser or mobile app</p>
                </div>
                <div className="form-check form-switch">
                  <button 
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleToggle('notifications.push')}
                    disabled={!isEditing}
                  >
                    <FontAwesomeIcon 
                      icon={formData.notifications.push ? faToggleOn : faToggleOff} 
                      size="2x"
                      color={formData.notifications.push ? "#0d6efd" : "#6c757d"}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">SMS Notifications</h6>
                  <p className="mb-0 text-muted small">Receive important updates via text message</p>
                </div>
                <div className="form-check form-switch">
                  <button 
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleToggle('notifications.sms')}
                    disabled={!isEditing}
                  >
                    <FontAwesomeIcon 
                      icon={formData.notifications.sms ? faToggleOn : faToggleOff} 
                      size="2x"
                      color={formData.notifications.sms ? "#0d6efd" : "#6c757d"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="text-end mt-3">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <button className="btn btn-outline-secondary mb-3" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Back
      </button>
      
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "personal" ? "active" : ""}`} 
            onClick={() => setActiveTab("personal")}
          >
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Personal
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "address" ? "active" : ""}`} 
            onClick={() => setActiveTab("address")}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            Address
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "security" ? "active" : ""}`} 
            onClick={() => setActiveTab("security")}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
            Security
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "notifications" ? "active" : ""}`} 
            onClick={() => setActiveTab("notifications")}
          >
            <FontAwesomeIcon icon={faBell} className="me-2" />
            Notifications
          </button>
        </li>
      </ul>

      {activeTab === "personal" && renderPersonalInfo()}
      {activeTab === "address" && renderAddressInfo()}
      {activeTab === "security" && renderSecurityInfo()}
      {activeTab === "notifications" && renderNotificationsInfo()}
    </div>
  );
};

export default Profile;