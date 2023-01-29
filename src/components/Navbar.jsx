import React from "react";
import "./Navbar.css";
import icon from "../assets/reactjs-icon.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="iconDiv">
          <img className="icon" src={icon} alt="React Icon" />
          <h1>ReactFacts</h1>
        </div>
        <div>
          <h3 className="title">React Course - Project 1</h3>
        </div>
      </nav>
    </>
  );
}
