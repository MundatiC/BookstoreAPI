import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaUndo, FaExclamationCircle } from "react-icons/fa";
import "../Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Menu</h3>
        <div className="collapse-toggle" onClick={handleCollapseToggle}>
          <i
            className={`fas ${
              collapsed ? "fa-chevron-right" : "fa-chevron-left"
            }`}
          ></i>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/borrowed-books" className="sidebar-link">
            <FaBook />
            <span>Books Borrowed</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/returned-books" className="sidebar-link">
            <FaUndo />
            <span>Returned Books</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/overdue-books" className="sidebar-link">
            <FaExclamationCircle />
            <span>Overdue Books</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p className="sidebar-footer-text">© 2023 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
