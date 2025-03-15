import React from "react";
import logo from "../assets/images/BofA_rgb.png";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="container">
      <div className="banner">
        <span>Bank of America deposit products: </span>
        <img
          src="https://secure1.bac-assets.com/spa/widgets/gt-secure-fdic-widget/1.0.0/spa-assets/images/assets-images-global-fdic-fdic-digital-sign-CSX37f66a3e.svg"
          alt="FDIC-Insured - Backed by the full faith and credit of the U.S. Government"
          className="fdic-digital-sign"
        />
      </div>

      <div className="navbar">
        <div className="navbar_brand">
          <img src={logo} alt="Bank of America logo" className="navbar_logo" />

          <h4>Login </h4>
        </div>
        <div className="navbar_links">
          <div class="secure-area">Secure Area</div>
          <a
            class="divide"
            href="/login/languageToggle.go?request_locale=es_US"
            target="_self"
            name="spanish_toggle"
            title="Muestra esta sesión de la Banca en Línea"
          >
            En español
          </a>
        </div>
      </div>

      <section className="hero_section">
        <div className="login_header">
            <h1>Log In to Online Banking</h1>
        </div>
      </section>
    </div>
  );
};

export default Signin;
