import React from "react";
import { FaTimes } from "react-icons/fa";
import { SidebarContainer } from "./SidebarElements";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <div className="icon">
        <FaTimes onClick={toggle}></FaTimes>
      </div>
      <div className="sidebarmenu">
        <Link to="/" className="sidebarlink">
          Home
        </Link>
        <Link to="/regPage" className="sidebarlink">
          Leaderboard
        </Link>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
