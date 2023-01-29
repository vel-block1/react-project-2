import React from "react";
import "./Content.css";
import Dot from "../assets/Ellipse 1.svg";

export default function Main() {
  return (
    <>
      <div className="content">
        <h1 className="titleMain">Fun facts about React</h1>
        <ul className="list">
          <li>
            <img src={Dot} alt="dot" />
            <div>Was first released in 2013</div>
          </li>
          <li>
            <img src={Dot} alt="dot" />
            <div>Was originally created by Jordan Walke</div>
          </li>
          <li>
            <img src={Dot} alt="dot" />
            <div>Has well over 100K stars on GitHub</div>
          </li>
          <li>
            <img src={Dot} alt="dot" />
            <div> Is maintained by Facebook</div>
          </li>
          <li>
            <img src={Dot} alt="dot" />
            <div>
              Powers thousands of enterprise apps, including mobile apps
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
