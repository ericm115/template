import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Webworks</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          More
          <div className="dropdown-content">
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}
