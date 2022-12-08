import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <h1>Movie Library</h1>
      </div>
      <div className="topbar-center">
        <div className="logo-center"></div>
      </div>
      <div className="topbar-right">
        <div>
          <a href="https://devcodecamp.com/" target="_blank">
            <img
              src="https://devcodecamp.com/wp-content/uploads/2020/03/devCodeCamp-Logo-12W.png"
              className="topbar-image"
              alt="devCodeCamp Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
