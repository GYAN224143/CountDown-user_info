import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h1>task</h1>
        <div className="nav">
          <NavLink to="/">Countdown</NavLink>
          <NavLink to="/user">User_Info</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
