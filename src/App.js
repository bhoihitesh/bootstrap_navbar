import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import menubar from "./assest/icons8-menu-bar.svg";
import profilePic from "./assest/icons8-profile-pic-48.png";
import logo from "./assest/sync_873147.png";
const App = () => {
  const [openMenu, setOpeMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <>
      <div className="sidebar-container bg-light d-flex gap-2">
        <div
          className={`${openMenu ? "close-sidebar" : "sidebar-menu shadow-lg"}`}
        >
          <div className="logo-container py-4">
            <p
              className={`${
                openMenu
                  ? "hide-logo-container"
                  : "navbar-brand fs-2 text-center"
              }`}
            >
              <img src={logo} alt="logo" />
            </p>
          </div>
          <div
            className={`${
              openMenu
                ? "hide-logo-container"
                : "sidebar-options w-100 text-center"
            }`}
          >
            <div className="nav-options w-100">
              <ul className="navbar-nav mx-1">
                <li className="navbar-item py-2">Dashbaord</li>
                <li className="navbar-item py-2">Products</li>
                <li className="navbar-item py-2">Services</li>
                <li className="navbar-item py-2">Contact</li>
                <li className="navbar-item py-2">About us</li>
              </ul>
            </div>

            <div className="profile-options d-flex justify-content-center align-items-center pb-2">
              <img src={profilePic} alt="profile pic" onClick={()=>setProfileMenu(!profileMenu)}/>
              <div className="profilename">
                <span> Jhon anderson</span> <span>Jhon@gmail.com</span>
              </div>
            </div>
              <div className={`${!profileMenu ?"show-profile-dropdown":"profile-dropdown"}`}>
                <span>Settings</span>
                <span>My profile</span>
              </div>
          </div>
        </div>
        <div className="topbar-menu d-flex align-item-center justify-content-center gap-2 w-100 pt-2">
          <div className="d-lg-none">
            <img
              src={menubar}
              alt="menu bar"
              className="menu-bar"
              onClick={() => setOpeMenu(!openMenu)}
            />
          </div>
          <div className="search-bar-container w-100 d-flex justify-content-center align-items-start gap-2">
            <input type="text" className="search-box form-control" />
            <input
              type="text"
              className="sort-box form-control d-flex justify-content-center align-items-start"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
