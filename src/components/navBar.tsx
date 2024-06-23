import React from "react";
import { Avatar, Logo, Notification, Search } from "../assets";
import SearchBar from "./searchBar";

const NavBar: React.FC = () => {
  return (
    <nav className="nav_bar">
      <img src={Logo} alt="logo" />
      <SearchBar />
      <div style={{ display: "flex" }}>
        <a href="" style={{ textDecoration: "none", color: "#213F7D" }}>
          Docs
        </a>
        <img src={Notification} alt="icon" />
        <div className="profile">
          <div>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
