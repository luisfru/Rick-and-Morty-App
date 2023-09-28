import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Character </Link>
        <Link to="/location"> Location </Link>
        <Link to="/episode"> Episode </Link>
      </div>
    </div>
  );
};