import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header1">
        <ul>
          <li>Contact Us</li>
          <li>English</li>
          <li>Current: USD</li>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <li>Login</li>{" "}
          </Link>
        </ul>
      </div>
    </>
  );
};
