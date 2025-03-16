// components/DashboardLayout.jsx
import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faThLarge,
  faWallet,
  faExchangeAlt,
  faUser,
  faCog,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking a link on mobile
  const closeSidebarOnMobile = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e31837", marginTop: "-0px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#/">
            BANK OF AMERICA
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="d-md-none"
            type="button"
            onClick={toggleSidebar}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>

          <div className="d-flex flex-grow-1 justify-content-center">
            <div className="input-group" style={{ maxWidth: "400px" }}>
              <span className="input-group-text bg-transparent border-0">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "white",
                }}
              />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserCircle} className="text-white fs-4" />
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar - Hidden on mobile by default */}
          <div
            className={`col-md-3 col-lg-2 d-md-block ${
              sidebarOpen ? "d-block" : "d-none"
            }`}
            style={{
              backgroundColor: "white",
              position: "fixed",
              height: "calc(100vh - 56px)",
              zIndex: 1000,
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
              padding: "0",
            }}
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      "nav-link d-flex align-items-center p-3" +
                      (isActive ? " active text-danger fw-bold" : "")
                    }
                    onClick={closeSidebarOnMobile}
                  >
                    <FontAwesomeIcon icon={faThLarge} className="me-3" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/accounts"
                    className={({ isActive }) =>
                      "nav-link d-flex align-items-center p-3" +
                      (isActive ? " active text-danger fw-bold" : "")
                    }
                    onClick={closeSidebarOnMobile}
                  >
                    <FontAwesomeIcon icon={faWallet} className="me-3" />
                    <span>Accounts</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                      "nav-link d-flex align-items-center p-3" +
                      (isActive ? " active text-danger fw-bold" : "")
                    }
                    onClick={closeSidebarOnMobile}
                  >
                    <FontAwesomeIcon icon={faExchangeAlt} className="me-3" />
                    <span>Transactions</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      "nav-link d-flex align-items-center p-3" +
                      (isActive ? " active text-danger fw-bold" : "")
                    }
                    onClick={closeSidebarOnMobile}
                  >
                    <FontAwesomeIcon icon={faUser} className="me-3" />
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      "nav-link d-flex align-items-center p-3" +
                      (isActive ? " active text-danger fw-bold" : "")
                    }
                    onClick={closeSidebarOnMobile}
                  >
                    <FontAwesomeIcon icon={faCog} className="me-3" />
                    <span>Settings</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <main
            role="main"
            className={`col-md-9 ml-sm-auto col-lg-10 px-md-4 ${
              sidebarOpen ? "content-shifted" : ""
            }`}
            style={{
              marginLeft: sidebarOpen ? "250px" : "0",
              transition: "margin-left 0.3s",
              paddingTop: "2rem",
            }}
          >
            <Outlet />
          </main>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay d-md-none"
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
