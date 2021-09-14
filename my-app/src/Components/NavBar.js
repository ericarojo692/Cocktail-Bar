import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <h2>test</h2>
    <Link to="/"> Home </Link>
    <Link to="/Menu"> Menu </Link>
    <Link to="/login"> Login </Link>
  </div>
  );
}

export default NavBar;
