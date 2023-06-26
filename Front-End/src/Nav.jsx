import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";
import AuthService from "./services/auth.service";
import NotificationAlertIcon from "./components/NotificationAlert";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const logoutConfirmationRef = useRef(null);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

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
  const handleDashboardPath = () =>{
    if (currentUser=== "PARENT")
    navigate("/parent");
    else if(currentUser === "DOCTOR")
    navigate("/doctor");
    else if(currentUser === "MIDWIFE")
    navigate("/midwife");
    else if(currentUser === "ADMIN")
    navigate("/admin");
  }

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const handleConfirmLogout = () => {
    // Perform logout logic here
    AuthService.logout();
    setShowLogoutConfirmation(false);
    navigate("/authenticate");
  };


  const handleBackgroundClick = (e) => {
    if (e.target === logoutConfirmationRef.current) {
      setShowLogoutConfirmation(false);
    }
  };

  return (
    <div>
      <div className="nav">
        {location.pathname === ("/Home" || "") ? <img
          align="center"
          alt="logo"
          className="logo"
          src="src\assets\Sproutopia_navbar_logo.png"
          onClick={() => handleItemClick("/Home")}
          /> : <img
          align="center"
          alt="logo"
          className="Nav_logo"
          src="src\assets\Sproutopia_navbar_logo.png"
          onClick={() => handleItemClick("/Home")}
          />}
          <div></div>

        <ul className="nav-items">
          {currentUser && (
            <li
            className={location.pathname === "/Home" ? "active" : ""}
            onClick={() => handleItemClick("/Home")}
            >
              Home<span></span>
            </li>
          )}
          {currentUser && (
            <li
            className={location.pathname === "/Midwife" ? "active" : ""}
            onClick={() => handleItemClick("/Midwife")}
            >
              Midwife<span></span>
            </li>
          )}
          {currentUser && (
            <li
            className={location.pathname === "/Doctor" ? "active" : ""}
            onClick={() => handleItemClick("/Doctor")}
            >
              Doctor<span></span>
            </li>
          )}
           {currentUser && (
            <li
            className={location.pathname === "/Parent" ? "active" : ""}
            onClick={() => handleItemClick("/Parent")}
            >
              Parent<span></span>
            </li>
          )}
          {currentUser && (
            <li
            className={location.pathname === "/Parent" ? "active" : ""}
            onClick={() => handleDashboardPath()}
            >
              Dashboard<span></span>
            </li>
          )}
          <p>&nbsp; </p>
          {currentUser && <NotificationAlertIcon notificationCount={3} />}
          <p>&nbsp;&nbsp; </p>

          {currentUser ? (
            <li className="logout-button border-2 border-gray-700" onClick={() => handleLogout()}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log Out
              <span></span>
            </li>
          ) : (
            <li
            className="login-button border-2 border-gray-700"
              onClick={() => handleItemClick("/authenticate")}
            >
              <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Log In
              <span></span>
            </li>
          )}

          {!currentUser && (
            <li
              className="signup-button border-2 border-gray-700"
              onClick={() => handleItemClick("/register")}
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Sign Up
              <span></span>
            </li>
          )}

          {!currentUser && (
            <li
              className="adminLogin-button"
              onClick={() => handleItemClick("/adminLogin")}
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Admin Login
              <span></span>
            </li>
          )}
        </ul>
        <div className="menu-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      {showLogoutConfirmation && (
        <div className="logout-confirmation" ref={logoutConfirmationRef}>
          <div className="logout-card">
            <h2>Are you sure you want to logout?</h2>
            <div className="buttons">
              <button
                className="confirm-button"
                onClick={() => handleConfirmLogout()}
              >
                OK
              </button>
              <button
                className="cancel-button"
                onClick={() => handleCancelLogout()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
