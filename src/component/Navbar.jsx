import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-red">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://banking-dashboard.netlify.app/images/BOALogo.png"
            alt=""
            width="250px"
            className="img-responsive"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <div class="container-fluid d-flex justify-content-end">
            <a class="navbar-brand" href="#">
              <span className="rounded-pill">
                {" "}
                <i class="fas fa-user"></i>
              </span>
            </a>
          </div>
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
