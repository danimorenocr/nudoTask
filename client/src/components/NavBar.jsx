import React from "react";
import { Link } from "react-router-dom";
import { Dashboard, Layers, Book, Settings, Logout } from "@mui/icons-material";
import "../styles/navBar.css";
import userPhoto from "../assets/img/userPhoto.png";

const NavBar = ({ isOpen, toggleNav }) => {
  return (
    <div className={`navbar-container ${isOpen ? "open" : "closed"}`}>
      <nav className="vertical-nav">
        <div className="logo-nudo" onClick={toggleNav}>
          <img src="logo.png" alt="NudoTask Logo" />
          {isOpen && <h2>NudoTask</h2>}
        </div>
        <ul>
          <li>
            <Link to="/" className="active">
              <Dashboard />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <Layers />
              {isOpen && <span>Projects</span>}
            </Link>
          </li>
          <li>
            <Link to="/diary">
              <Book />
              {isOpen && <span>Diary</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Settings />
              {isOpen && <span>Settings</span>}
            </Link>
          </li>
        </ul>
        <div className="profile">
          <img src={userPhoto} alt="Profile" />
          {isOpen && (
            <Link to="/logout" className="logout">
              <Logout />
              {isOpen && <span>Log out</span>}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
