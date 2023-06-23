import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../nav.css";
import AuthService from "../services/auth.service";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null); // Modified initial value
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

  const handleBackgroundClick = (e) => {
    if (e.target === logoutConfirmationRef.current) {
      setShowLogoutConfirmation(false);
    }
  };

  const styles = {
    fontSize: "25px",
    color: "white",
    textAlign: "left",
    margin: 0,
  };

  const logoStyle = {
    borderRadius: "50%",
    // Add any other custom styles for the logo image here
  };

  return (
      <div className="nav static">
        <img
          align="center"
          alt="logo"
          className="logo float-left"
          src="src/assets/Images/logo.jpeg"
          style={logoStyle} // Apply the logoStyle to the image
          onClick={() => handleItemClick("/home")}
        />

        <ul className="nav-items float-right">
          <li
            className={""}
            onClick={() => handleItemClick("/admin")}
          >
            HOME<span></span>
          </li>
          <li
            className={""}
            onClick={() => handleItemClick("/adduser")}
          >
            ADD USER<span></span>
          </li>
          
          <li
            className={""}
            onClick={() => handleItemClick("/adddoctor")}
          >
            ADD DOCTOR<span></span>
          </li>

          <li
            className={""}
            onClick={() => handleItemClick("/addparent")}
          >
            ADD PARENT<span></span>
          </li>
          <li
            className={""}
            onClick={() => handleItemClick("/display")}
          >
            DISPLAY <span></span>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
  );
};
