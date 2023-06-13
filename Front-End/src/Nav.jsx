import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import AuthService from "./services/auth.service";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const logoutConfirmationRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".nav li");

    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav ul");

    document.addEventListener("click", handleBackgroundClick);
    
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
    }

    menuItems.forEach((item) => {
        ["mouseenter", "mouseout"].forEach((evt) => {
          item.removeEventListener(evt, (e) => {
            const parentOffset = item.getBoundingClientRect();
            const relX = e.clientX - parentOffset.left;
            const relY = e.clientY - parentOffset.top;
            const span = item.querySelector("span");

            span.style.top = relY + "px";
            span.style.left = relX + "px";
          });
        });
      });

      menuBtn.removeEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navUl.classList.toggle("open");
      }); 

    return () => {
      menuItems.forEach((item) => {
        ["mouseenter", "mouseout"].forEach((evt) => {
          item.removeEventListener(evt, (e) => {
            const parentOffset = item.getBoundingClientRect();
            const relX = e.clientX - parentOffset.left;
            const relY = e.clientY - parentOffset.top;
            const span = item.querySelector("span");

            span.style.top = relY + "px";
            span.style.left = relX + "px";
          });
        });
      });

      menuBtn.removeEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navUl.classList.toggle("open");
      }); 

      document.removeEventListener("click", handleBackgroundClick);
    };
  }, []);

  const handleItemClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const handleConfirmLogout = () => {
    // Perform logout logic here
    navigate("/authenticate");
    setShowLogoutConfirmation(false);
  };

  const logOut = () => {
    AuthService.logout();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === logoutConfirmationRef.current) {
      setShowLogoutConfirmation(false);
    }
  };

  return (
    <div>
        <div className="nav">
          <img
                align="center"
                alt="logo"
                className="logo"
                src="src\components\Images\Logopit_cover2.png"
                onClick={() => handleItemClick("/Home")}
              />
          <ul className="nav-items">
            {currentUser &&<li className={location.pathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")}>
              Home<span></span>
            </li>}
            {currentUser &&<li className={location.pathname === "/Midwife" ? "active" : ""} onClick={() => handleItemClick("/Midwife")}>
              Midwife<span></span>
            </li>}
            {currentUser &&<li className={location.pathname === "/Reservations" ? "active" : ""} onClick={() => handleItemClick("/Reservations")}>
              Tab2<span></span>
            </li>}
            {(currentUser)?<li className="logout-button" onClick={() => handleLogout()}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log Out<span></span>
            </li>:<li className="login-button" onClick={() => handleItemClick("/authenticate")}>
              <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Log In<span></span>
            </li>}
            {!(currentUser) &&<li className="signup-button" onClick={() => handleItemClick("/register")}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Sign Up<span></span>
            </li>}
          </ul>
          <div className="menu-btn">
            <i className="fa fa-bars" aria-hidden="true" ></i>
          </div>
          
        </div>
        {showLogoutConfirmation && (
            <div className="logout-confirmation" ref={logoutConfirmationRef}>
              <div className="logout-card">
                <h2>Are you sure you want to logout?</h2>
                <div className="buttons">
                  <button className="confirm-button" onClick={() => handleConfirmLogout()}>OK</button>
                  <button className="cancel-button" onClick={() => handleCancelLogout()}>Cancel</button>
                </div>
              </div>
            </div>
          )}
    </div>
  );
};