import React from "react";
import { Link } from "react-router-dom";
import { TESTAPIPAGE } from "./routes/Path";
import "./App.css";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to={TESTAPIPAGE}>
          <li>TestApi</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
