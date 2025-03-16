import React, { useEffect, useState } from "react";
import logo from "../assets/images/BofA_rgb.png";
import lineLogo from "../assets/images/reactss.svg";
import { ToastContainer, toast } from "react-toastify";
import Connected from "../assets/images/mobile_llama.png";
import "./Signin.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            navigate("/dashboard");
        }
    }, [navigate]);

//   const user = sessionStorage.getItem("user");
//   if (user) {
//     navigate("/dashboard");
//   }

  // Test credentials
  const testCredentials = {
    userId: "U173893839",
    password: "kym1959",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === testCredentials.userId &&
      password === testCredentials.password
    ) {
      // Create user object to store in session
      const user = {
        userId: username,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
      };

      // Save to session storage
      sessionStorage.setItem("user", JSON.stringify(user));

      // Show success toast
      toast.success("Login successful! Redirecting to dashboard...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect to dashboard after a short delay to show the toast
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error("Invalid user ID or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="banner">
        <span>Bank of America deposit products: </span>
        <img
          src={lineLogo}
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
        <div className="a-login_header">
          <h1>Log In to Online Banking</h1>
        </div>
      </section>

      <section className="login_section">
        <div className="login_container">
          <div className="login_form">
            <form onSubmit={handleLogin}>
              <div className="input_container">
                <label for="email">User Id</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input_container">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input_container">
                <small>
                  <a href="#">forgot your password</a>
                </small>
              </div>
              <div className="input_container">
                <span></span>
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>

          <div className="stay_connected">
            <h1>Stay connected with our app</h1>
            <div className="inner_connected">
              <img src={Connected} alt="stay connected" width="180px" />
              <div>
                <p>
                  Secure, convenient <br /> banking anytime
                </p>
                <button className="get_app">Get the App</button>
              </div>
            </div>
          </div>

          <div className="forget_password">
            <h1>Login help</h1>
            <hr width="200px" />
            <p>Forgot ID/Password?</p>
            <p>Problem logging in?</p>

            <h1>Not using Online Banking?</h1>
            <hr width="200px" />
            <p>Enroll now</p>
            <p>Learn more about Online Banking</p>
            <p>Service Agreement</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer_container">
          <p>secure Area</p>
          <p>Privacy | Security | your choice privacy choice</p>

          <p>Bank of America, N.A. Member FDIC. Equal Housing Lender</p>
          <p>© 2025 Bank of America Corporation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Signin;
